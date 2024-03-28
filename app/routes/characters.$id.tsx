import { LoaderFunctionArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import { getCharacter } from '~/http/api'

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params
  const data = await getCharacter(id)

  return json(data)
}
function CharacterPage() {
  const data = useLoaderData<typeof loader>()
  return (
    <div className="bg-white rounded-md flex overflow-hidden">
      <div>
        <img src={data.image} alt={data.name} />
      </div>
      <div className="flex flex-col flex-1 px-6 py-2">
        <h1 className="font-semibold text-2xl border-b border-slate-200 py-4 mb-3">
          {data.name}
        </h1>
        <div className="flex flex-1 flex-col">
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
          <p>Location: {data.name}</p>
        </div>
        <Link
          to="/"
          className="bg-blue-600 p-2 text-white rounded-md max-w-max hover:bg-blue-500"
        >
          Go back
        </Link>
      </div>
    </div>
  )
}

export default CharacterPage
