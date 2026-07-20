export const LINKEDIN_URL = 'https://www.linkedin.com/in/lydie-monthouelguarinos/'

// PLACEHOLDER: remplacer par l'adresse email reelle de Lydie avant la mise en ligne
export const CONTACT_EMAIL = 'contact@lydie-consulting.com'

export const BASE_LOCATION = 'France'

export const WHATSAPP_NUMBER = '18298495413'

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
