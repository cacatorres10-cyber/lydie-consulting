export const LINKEDIN_URL = 'https://www.linkedin.com/in/lydie-monthouelguarinos/'
export const INSTAGRAM_URL = 'https://www.instagram.com/ladyguarinos/'
export const FACEBOOK_URL = 'https://www.facebook.com/lydie.guarinos?locale=pt_BR'
export const TIKTOK_URL = 'https://www.tiktok.com/@travalari'

// PLACEHOLDER: remplacer par l'adresse email reelle de Lydie avant la mise en ligne
export const CONTACT_EMAIL = 'lydie.guarinos@gmail.com'

export const BASE_LOCATION = 'France'

export const WHATSAPP_NUMBER = '18298495413'

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
