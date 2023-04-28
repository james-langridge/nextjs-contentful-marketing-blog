const fetcher = async ({
  url,
  method,
  body,
  json = true,
  cache,
}: {
  url: string
  method: string
  body?: {[key: string]: string}
  json?: boolean
  cache?: 'force-cache' | 'no-store'
}) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    cache: cache && cache,
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error)
  }

  if (json) {
    return data.data
  }
}

export const submitContactForm = (body: {
  name: string
  email: string
  message: string
}) => {
  return fetcher({
    url: '/api/contact',
    method: 'post',
    body,
  })
}
