import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Amine Hmidani Filali', // TODO: Add a custom title
  description = "Étudiant en MQL, passionné de développement, maîtrisant Java, NodeJS, React, recherchant un stage innovant.", // TODO: Add a custom description
  image = '/profilepicture.jpg', // TODO: Add a custom image
  icons = '/avatar.svg', // TODO: Add a custom icon
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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@chrislonzo'
    },
    icons,
    metadataBase: new URL('https://www.chrislonzo.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
