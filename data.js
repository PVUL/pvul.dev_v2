/*
 * data containing works, etc.
 */
export const works = [
  {
    title: 'Almanac',
    link: 'https://almanac.io',
    description:
      'Almanac is a document sharing platform for teams. While working on this project, it was important to me to have a consistent style across all parts of the customer experience. I created the home page, registration, profiles, and library components- such as navbar, article cards, and avatars. Optimized all pages for SEO.',
    technologies:
      'React, Typescript, Rails, Ant Design, Heroku, Cloudinary, Algolia, Figma',
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
    description:
      'Wayfair Registry is a wedding registry platform for Wayfair. While working on this project, the most important thing was make features that would convert towards higher conversion rates, which were measured through A-B testing. Created the homepage, brand pages, gift tracking, and a registry referral program. Improved page performance by 50% by optimizing images above-the-fold. Also, created documentation for other team members.',
    technologies: 'React, PHP, MSSQL, Redis, GraphQL, Invision',
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
