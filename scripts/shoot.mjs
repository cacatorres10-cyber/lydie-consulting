import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise((r) => setTimeout(r, 3500))

const targets = [
  ['hero', null],
  ['about', '#about'],
  ['services', '#services'],
  ['career', '#career'],
  ['education', '#education'],
  ['contact', '#contact'],
  ['footer', 'footer'],
]

for (const [name, sel] of targets) {
  if (sel) {
    await page.evaluate((s) => {
      document.querySelector(s)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, sel)
    await new Promise((r) => setTimeout(r, 2200))
  }
  await page.screenshot({ path: `${OUT}/pp-${name}.png` })
  console.log(`captured ${name}`)
}

// Reseau du hero (noeud central + satellites)
await page.evaluate(() => window.scrollTo(0, 640))
await new Promise((r) => setTimeout(r, 2200))
await page.screenshot({ path: `${OUT}/pp-hero-network.png` })
console.log('captured hero-network')

// Vue au milieu du scroll sticky de la galerie circulaire
await page.evaluate(() => {
  const el = document.querySelector('#showcase')
  if (el) window.scrollTo(0, el.offsetTop + el.offsetHeight * 0.4)
})
await new Promise((r) => setTimeout(r, 2200))
await page.screenshot({ path: `${OUT}/pp-showcase-mid.png` })
console.log('captured showcase-mid')

// Versions ES et EN pour valider le toggle
for (const code of ['ES', 'EN']) {
  await page.evaluate((c) => {
    window.scrollTo(0, 0)
    const btns = [...document.querySelectorAll('button')]
    btns.find((b) => b.textContent?.trim().toUpperCase() === c)?.click()
  }, code)
  await new Promise((r) => setTimeout(r, 1500))
  await page.screenshot({ path: `${OUT}/pp-hero-${code.toLowerCase()}.png` })
  console.log(`captured hero-${code.toLowerCase()}`)
}

// Mobile 375px
await page.evaluate(() => {
  const btns = [...document.querySelectorAll('button')]
  btns.find((b) => b.textContent?.trim().toUpperCase() === 'FR')?.click()
})
await page.setViewport({ width: 375, height: 812 })
await page.evaluate(() => window.scrollTo(0, 0))
await new Promise((r) => setTimeout(r, 1500))
await page.screenshot({ path: `${OUT}/pp-mobile-hero.png` })
console.log('captured mobile-hero')

await browser.close()
