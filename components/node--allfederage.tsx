import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR('https://fed.septembre.io/jsonapi/group_relationship/projets_federage-b5856fc584d18c4', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
