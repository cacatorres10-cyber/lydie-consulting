import { I18nProvider } from '@/i18n'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ServicesGallery } from '@/components/ServicesGallery'
import { About } from '@/components/About'
import { Career } from '@/components/Career'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ServicesGrid />
        <ServicesGallery />
        <About />
        <Career />
        <Education />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  )
}
