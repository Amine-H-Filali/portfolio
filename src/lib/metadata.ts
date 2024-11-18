import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Amine Hmidani Filali', // TODO: Add a custom title
  description = "Étudiant en MQL, passionné de développement, maîtrisant Java, NodeJS, React, recherchant un stage innovant.", // TODO: Add a custom description
  image = '/profilepicture.jpg', // TODO: Add a custom image
  icons = '/favicon.ico', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
   
    icons,
    metadataBase: new URL('http://www.aminehmidanifilali.me'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
