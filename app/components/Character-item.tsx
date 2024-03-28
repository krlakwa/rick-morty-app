import { Link } from '@remix-run/react'

interface CharacterItemProps {
  id: number
  name: string
  image: string
}

const CharacterItem = ({ id, name, image }: CharacterItemProps) => {
  return (
    <li className="w-full p-3 border-x border-y my-2 border-slate-100 rounded-md hover:bg-slate-50">
      <Link prefetch="intent" to={`/characters/${id}`} className="flex">
        <img src={image} alt={name} className="w-20 rounded-full mr-5" />
        <div className="flex justify-items-center items-center">
          <h2 className="font-semibold">{name}</h2>
        </div>
      </Link>
    </li>
  )
}

export default CharacterItem
