const API_URL = 'https://rickandmortyapi.com/api'

export async function getCharacters() {
  const response = await fetch(`${API_URL}/character`)
  const data = await response.json()
  return data
}

export async function getCharacter(id?: string) {
  const response = await fetch(`${API_URL}/character/${id}`)
  const data = await response.json()

  return {
    image: data.image,
    name: data.name,
    status: data.status,
    species: data.species,
    location: data.location.name,
  }
}
