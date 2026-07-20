import { I18nProvider } from '@/i18n'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { About } from '@/components/About'
import { Expertise } from '@/components/Expertise'
import { ServicesGallery } from '@/components/ServicesGallery'
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
        <About />
        <Expertise />
        <ServicesGallery />
        <Career />
        <Education />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  )
}
