import firebase from '../../lib/firebase'

export const loadProfiles = async (query = {}) => {
	const { search } = query

	const numbSearch = Number.isNaN(+search)

	let docsSnap = await firebase
		.firestore()
		.collection('profilesTest')
		//.where('is_member', '==', 'true')
		.orderBy('id', 'asc')
		.get()

	let profiles = docsSnap.docs.map(doc => doc.data())

	if (search) {
		if (numbSearch) {
			const searchRegex = new RegExp(search, 'gi')
			profiles = profiles.filter(profile =>
				profile.name.match(searchRegex),
			)
		} else {
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
