import {CtfComponentRenderer} from '@/components/contentful/CtfComponentRenderer'
import {getByContentTypeId} from '@/lib/contentful'

export default async function Home() {
  const {items} = await getByContentTypeId('page', {
    'fields.slug': 'home',
    include: 10,
  })
  const pageContent = items[0].fields.pageContent

  return (
    <main className="relative">
      {pageContent &&
        pageContent?.map(entry => (
          <CtfComponentRenderer key={entry.sys.id} entry={entry} />
        ))}
    </main>
  )
}
