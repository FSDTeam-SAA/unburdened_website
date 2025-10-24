// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchServices(page = 1): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services?page=${page}&limit=4`,
    {
      cache: 'no-store',
    }
  )
  if (!res.ok) throw new Error('Failed to fetch services')
  return res.json()
}
