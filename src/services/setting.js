const API_KEY = 'fbc6de7a-fc9d-4d82-a51c-91398511d6a8'
const API_URL = `https://api.opendota.com/api/`

export async function getAllPlayers() {
  try {
    const response = await fetch(`${API_URL}proPlayers?api_key=${API_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
