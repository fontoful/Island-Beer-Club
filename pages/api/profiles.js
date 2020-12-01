import firebase from '../../lib/firebase'

export const loadProfiles = async (query = {}) => {
	const { search } = query

	let docsSnap = await firebase
		.firestore()
		.collection('profilesTest')
		//.where('is_member', '==', 'true')
		.orderBy('mbr', 'asc')
		.get()

	let profiles = docsSnap.docs.map(doc => doc.data())

	if (search) {
		const searchRegex = new RegExp(search, 'gi')
		profiles = profiles.filter(
			profile =>
				typeof profile.name === 'string' &&
				profile.name.match(searchRegex),
		)
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