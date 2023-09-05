const baseUrl: string = 'https://api.open5e.com/'

export async function fetchClassList () {
  try {
    const response = await fetch(baseUrl + 'classes')
    return await response.json()
  } catch (err) {
    console.log('Could not fetch classlist: ',err)
  }
}

//you could probably move this into the api file inside the source folder, but this one was working before I created that folder.  it was the only api/db file working and I didn't want to mess with it while I had other things that needed my attention.