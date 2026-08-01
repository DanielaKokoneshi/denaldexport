const IMG = '/images'

export const ASSETS = {
  logo: `${IMG}/site/logo.png`,
  menuIcon: `${IMG}/site/menu-icon.png`,
  homeAboutImage: `${IMG}/site/home-about.jpg`,
  homeAboutImageSrcSet: [
    `${IMG}/site/home-about-500.jpg 500w`,
    `${IMG}/site/home-about-800.jpg 800w`,
    `${IMG}/site/home-about-1080.jpg 1080w`,
    `${IMG}/site/home-about-1600.jpg 1600w`,
    `${IMG}/site/home-about-2000.jpg 2000w`,
    `${IMG}/site/home-about.jpg 2400w`,
  ].join(', '),
  aboutStoryImage1: `${IMG}/site/about-story-1.png`,
  aboutStoryImage1SrcSet: [
    `${IMG}/site/about-story-1-500.png 500w`,
    `${IMG}/site/about-story-1-800.png 800w`,
    `${IMG}/site/about-story-1.png 896w`,
  ].join(', '),
  aboutStoryImage2: `${IMG}/site/about-story-2.jpg`,
  aboutStoryImage2SrcSet: [
    `${IMG}/site/about-story-2-500.jpg 500w`,
    `${IMG}/site/about-story-2-800.jpg 800w`,
    `${IMG}/site/about-story-2-1080.jpg 1080w`,
    `${IMG}/site/about-story-2-1600.jpg 1600w`,
    `${IMG}/site/about-story-2-2000.jpg 2000w`,
    `${IMG}/site/about-story-2-2600.jpg 2600w`,
    `${IMG}/site/about-story-2.jpg 3024w`,
  ].join(', '),
  backgrounds: {
    home: `${IMG}/backgrounds/home-hero.jpg`,
    about: `${IMG}/backgrounds/about-hero.png`,
    contact: `${IMG}/backgrounds/subpage-hero.jpg`,
    products: `${IMG}/backgrounds/products-hero.jpg`,
    vegetables: `${IMG}/backgrounds/vegetables-hero.png`,
    fruits: `${IMG}/backgrounds/fruits-hero.png`,
    cta: `${IMG}/backgrounds/cta.jpeg`,
  },
  footerIcons: {
    location: `${IMG}/footer/location.svg`,
    phone: `${IMG}/footer/phone.svg`,
    email: `${IMG}/footer/email.svg`,
  },
  serviceIcons: {
    sourcing: `${IMG}/icons/sourcing.svg`,
    quality: `${IMG}/icons/quality.svg`,
    packaging: `${IMG}/icons/packaging.svg`,
    documentation: `${IMG}/icons/documentation.svg`,
    logistics: `${IMG}/icons/logistics.svg`,
  },
} as const

export const CONTACT = {
  email: 'denald.Export@gmail.com',
  mailto: 'mailto:denaldexport@gmail.com?subject=You%27ve%20got%20mail!',
  phone: '+ 355 674082728',
  address: 'Rruga Pavarsia, Divjakë, Albania',
  mapsUrl: 'https://maps.app.goo.gl/R1eNa9dVfUEbN43L8',
  social: {
    instagram: 'https://www.instagram.com/denald_export/',
    tiktok: 'https://www.tiktok.com/@denald.export',
    facebook: 'https://www.facebook.com/profile.php?id=61581332777318',
  },
} as const

export const SITE = {
  name: 'DenaldExport',
  motto: 'Nourishing the world with nature’s best.',
} as const
