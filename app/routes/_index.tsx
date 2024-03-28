import type { MetaFunction } from '@remix-run/node'
import { json, useLoaderData } from '@remix-run/react'

import CharacterItem from '~/components/Character-item'

import { Character } from '~/types'
import { getCharacters } from '~/http/api'

export const meta: MetaFunction = () => {
  return [
    { title: 'Rick and Morty App' },
    { name: 'description', content: 'Welcome to Rick and Morty App!' },
  ]
}

export async function loader() {
  const data = await getCharacters()
  return json(data)
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const characters: Character[] = data.results

  return (
    <div
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}
      className=" text-slate-900"
    >
      <ul className="bg-white width-full rounded-md p-4">
        {characters.map((character) => (
          <CharacterItem key={character.id} {...character} />
        ))}
      </ul>
    </div>
  )
}
