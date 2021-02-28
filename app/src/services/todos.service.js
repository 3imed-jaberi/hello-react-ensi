import { API_URL } from '../constants/api.const'

export async function getAllTodos() {
  try {
    const response = await fetch(
      `${API_URL}/todos`,
      { method: 'GET' }
    )

    const data = await response.json()

    return data
  } catch (error) {
    throw error
  }
}
