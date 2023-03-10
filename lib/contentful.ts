import {CtfPage} from '@/@types/contentful'
import * as contentful from 'contentful'
import {INavbarFields} from '@/@types/generated/contentful'

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

export const getPageData = async (slug: string) => {
  return await client.getEntries<CtfPage>({
    content_type: 'page',
    'fields.slug': slug,
    include: 10,
  })
}

export const getNavbar = async () => {
  return await client.getEntry<INavbarFields>(
    process.env.CONTENTFUL_NAVBAR_ENTRY_ID || '',
  )
}
