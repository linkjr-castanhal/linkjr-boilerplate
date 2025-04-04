const createSiteConfig = () => {
  const url = 'https://linkjr.com.br'
  const links = {
    github: 'https://github.com/linkjr/',
    instagram: 'https://www.instagram.com/linkjr/',
    linkedin: 'https://www.linkedin.com/in/linkjr/',
    medium: 'https://medium.com/linkjr',
  }

  return {
    name: 'LinkJr Boilerplate',
    description: 'Created by LinkJr.',
    ogImage: `${url}/og.jpg`,
    links,
    url,
  }
}

export const siteConfig = createSiteConfig()
