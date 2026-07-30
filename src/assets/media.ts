import lydiePortrait from './lydie.jpg'
import bookRecommencer from './book-recommencer.jpg'
import bookAloeVera from './book-aloevera.jpg'
import bookPouvoir from './book-pouvoir.jpg'

// Toutes les images du site (Unsplash, URLs verifiees visuellement)
const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`

export const IMG = {
  // Hero: portrait reel de Lydie
  lydie: lydiePortrait,

  // Galerie circulaire des services (ordre = ordre des items i18n)
  diplomacy: u('photo-1761301643520-49c1ee626e72'),
  migration: u('photo-1521295121783-8a321d551ad2'),
  consular: u('photo-1654163600175-efc47ce20b29'),
  travel: u('photo-1436491865332-7a61a109cc05'),
  realestate: u('photo-1564013799919-ab600027ffc6'),
  training: u('photo-1503428593586-e225b39bddfe'),
  fundraising: u('photo-1521791136064-7986c2920216'),
  events: u('photo-1511578314322-379afb476865'),
  languages: u('photo-1503676260728-1c00da094a0b'),
  sports: u('photo-1571019613454-1cb2f99b2d8b'),
  naturo: u('photo-1515377905703-c4788e51af15'),
  networking: u('photo-1724866976376-4b217d29a462'),
}

export const BOOK_COVERS = {
  recommencer: bookRecommencer,
  aloevera: bookAloeVera,
  pouvoir: bookPouvoir,
}

export const GALLERY_IMAGES = [
  IMG.diplomacy,
  IMG.migration,
  IMG.consular,
  IMG.travel,
  IMG.realestate,
  IMG.training,
  IMG.fundraising,
  IMG.events,
  IMG.languages,
  IMG.sports,
  IMG.naturo,
  IMG.networking,
]
