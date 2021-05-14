import firebase from '../../lib/firebase'

export const loadProfiles = async (query = {}) => {
  const { search } = query

  const numbSearch = Number.isNaN(+search)

  let docsSnap = await firebase
    .firestore()
    .collection('user-data')
    //.where('is_member', '==', 'true')
    .orderBy('mbr', 'asc')
    .get()

  let profiles = docsSnap.docs.map(doc => doc.data())

  // ⬇ this logic is firing up when there is a search keyword
  if (search) {
    if (numbSearch) {
      // this logic is firing up if the filter is a word
      const searchRegex = new RegExp(search, 'gi')
      // We're now bullet-proofing our filter by first extracting only the profiles where the name property exists so this algorihtm doesn't break again
      profiles = profiles.filter(profile => profile.name).filter(profile => profile.name.match(searchRegex))
    } else {
      // this logic is firing up if the filter is a number
      profiles = profiles.filter(profile => profile.mbr === +search)
    }
  }

  return profiles
}

export default async (req, res) => {
  const output = {
    profiles: await loadProfiles(req.query),
  }

  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(output))
}