// Toutes les images du site (Unsplash, URLs verifiees visuellement)
const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`

export const IMG = {
  // Hero
  paris: u('photo-1502602898657-3e91760cbb34', 1200),

  // Galerie circulaire des services (ordre = ordre des items i18n)
  diplomacy: u('photo-1451187580459-43490279c0fa'),
  consular: u('photo-1521295121783-8a321d551ad2'),
  travel: u('photo-1436491865332-7a61a109cc05'),
  realestate: u('photo-1564013799919-ab600027ffc6'),
  elected: u('photo-1529107386315-e1a2ed48a620'),
  fundraising: u('photo-1521791136064-7986c2920216'),
  events: u('photo-1511578314322-379afb476865'),
  languages: u('photo-1503676260728-1c00da094a0b'),
  training: u('photo-1524178232363-1fb2b075b655'),
  sports: u('photo-1571019613454-1cb2f99b2d8b'),
  naturo: u('photo-1515377905703-c4788e51af15'),
}

export const GALLERY_IMAGES = [
  IMG.diplomacy,
  IMG.consular,
  IMG.travel,
  IMG.realestate,
  IMG.elected,
  IMG.fundraising,
  IMG.events,
  IMG.languages,
  IMG.training,
  IMG.sports,
  IMG.naturo,
]
