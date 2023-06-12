const baseUrl: string = 'https://api.open5e.com/'

export async function fetchClassList () {
  try {
    const response = await fetch(baseUrl + 'classes')
    return await response.json()
  } catch (err) {
    console.log('Could not fetch classlist: ',err)
  }
}