/*
 * data containing works, etc.
 */
export const works = [
  {
    title: 'Almanac',
    link: 'https://almanac.io',
    category: 'App Development',
    description:
      'Almanac is a document sharing platform for teams. While working on this project, it was important to me to have a consistent style across all parts of the customer experience. I created the home page, registration, profiles, and library components- such as navbar, article cards, and avatars. Optimized all pages for SEO.',
    technologies:
      'React, Typescript, Ruby on Rails, Ant Design, Heroku, Cloudinary, Algolia, Figma',
    images: [
      {
        alt: 'almanac-1',
        source: '/works/almanac-1.png',
      },
      {
        alt: 'almanac-2',
        source: '/works/almanac-2.png',
      },
      {
        alt: 'almanac-3',
        source: '/works/almanac-3.png',
      },
    ],
  },
  {
    title: 'Wayfair',
    link: '',
    category: 'App Development',
    description:
      'Wayfair Registry is a wedding registry platform for Wayfair. While working on this project, the most important thing was to make features that would convert towards higher conversion rates, which were measured through A-B testing. Created the homepage, brand pages, gift tracking, and a registry referral program. Improved page performance by 50% by optimizing images above-the-fold. Also, created documentation for other team members.',
    technologies:
      'React, Javascript, PHP, SASS, SQL Server, Redis, GraphQL, Invision',
    images: [
      {
        alt: 'wayfair-1',
        source: '/works/wayfair-1.png',
      },
      {
        alt: 'wayfair-2',
        source: '/works/wayfair-2.png',
      },
      {
        alt: 'wayfair-3',
        source: '/works/wayfair-3.png',
      },
    ],
  },
  {
    title: 'Giyea',
    link: 'https://giyea.com',
    category: 'Graphic Design',
    description:
      "Giyea is a high-end women's fashion brand that embodies sophistication and timelessness. We wanted to create a simple logo that is balanced against negative space, and spoke to the essence of the brand. It was important that the original logo could translate across different medias.",
    technologies: 'Illustrator',
    images: [
      {
        alt: 'giyea-1',
        source: '/works/giyea-1.png',
      },
      {
        alt: 'giyea-2',
        source: '/works/giyea-2.png',
      },
      {
        alt: 'giyea-3',
        source: '/works/giyea-3.png',
      },
    ],
  },
  {
    title: 'Pavlok',
    link: '',
    category: 'Packaging & Graphic Design',
    description:
      "Pavlok is an aversion therapy device that shocks you into breaking bad habits. It was important to show off the unique product through it's retail packaging with it's trademark colorway. Other factors that we kept in mind throughout the design process were cost and ease of assembly.",
    technologies:
      'Solidworks, Keyshot, Photoshop, Illustrator, InDesign, 3d printing',
    images: [
      {
        alt: 'pavlok-1',
        source: '/works/pavlok-1.png',
      },
      {
        alt: 'pavlok-2',
        source: '/works/pavlok-2.png',
      },
    ],
  },
  {
    title: 'Aila Technologies',
    link: '',
    category: 'Product Design',
    description:
      'Aila makes tablet kiosks systems which are used at retail locations such as Target, WeWork, and PacSun. While designing the tablet scanner enclosure, it was important that the design language was intuitive so that customers would know how to interact with the device without instructions.',
    technologies:
      'Solidworks, Keyshot, Photoshop, Illustrator, 3d printing, Laser Cutting',
    images: [
      {
        alt: 'aila-1',
        source: '/works/aila-1.png',
      },
      {
        alt: 'aila-2',
        source: '/works/aila-2.png',
      },
    ],
  },
  {
    title: 'Escargot',
    link: '',
    category: 'Product & Packaging Design',
    description:
      "Escargot is a mobile device accessories brand focused on minimalism and practical design. While working on their product, Spixi, I wanted to create something that people would enjoy using everyday, as well as appreciate it's beauty in an otherwise mundane product category.",
    technologies: 'Solidworks, Keyshot, Photoshop, Illustrator, 3d printing',
    images: [
      {
        alt: 'spixi-1',
        source: '/works/spixi-1.png',
      },
      {
        alt: 'spixi-2',
        source: '/works/spixi-2.png',
      },
      {
        alt: 'spixi-3',
        source: '/works/spixi-3.png',
      },
    ],
  },
  {
    title: 'Ergotech',
    link: '',
    category: 'Product Design',
    description:
      'Ergotech is a monitor and tablet mounting solutions brand. While I was designing their first tablet stand, VersaStand, it was important to me to create something elegant, functional, and portable. I was proud that <a href="https://www.cnet.com/reviews/ergotech-versastand-for-ipad-review/" target="_blank" rel="noopener noreferrer">CNET</a> rated the design highly.',
    technologies: 'Solidworks, Keyshot, Photoshop, Illustrator',
    images: [
      {
        alt: 'versastand-1',
        source: '/works/versastand-1.png',
      },
      {
        alt: 'versastand-2',
        source: '/works/versastand-2.png',
      },
    ],
  },
]

export const services = [
  {
    title: 'Web Design',
    description: 'Building a digital presence that is perfectly suited to you.',
    technologies: [
      'NextJS',
      'React',
      'Typescript',
      'Javascript',
      'SASS',
      'Figma',
      'Invision',
      'TailwindCSS',
      'Bootstrap',
      'SEO',
    ],
    icon: 'icons/web-design.png',
    alt: 'web-design',
  },
  {
    title: 'App Development',
    description: 'Developing a full-featured idea in the digital landscape.',
    technologies: [
      'NodeJS',
      'Ruby on Rails',
      'PHP',
      'Python',
      'SQL Server',
      'PostgreSQL',
      'AWS/GCP',
      'Vercel/Netlify',
      'Docker',
      'Unity',
    ],
    icon: 'icons/app-development.png',
    alt: 'app-development',
  },
  {
    title: 'Product Design',
    description:
      'Creating a physical product from conceptualization to mass-production.',
    technologies: [
      'Solidworks',
      '3d Modeling',
      'Photoshop',
      'Illustrator',
      'Rendering',
      'Logo/Packaging',
      '3d Printing',
      'Prototyping',
      'Laser Cutting',
      'Sourcing',
    ],
    icon: 'icons/product-design.png',
    alt: 'product-design',
  },
]
