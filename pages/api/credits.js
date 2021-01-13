import firebase from '../../lib/firebase'

export const loadKegCredits = async (query = {}) => {
	

	let docsSnap = await firebase
		.firestore()
		.collection('creditData')
		.orderBy('pk')
		.get()

	let kegCredits = docsSnap.docs.map(doc => doc.data())


	return kegCredits
}

export default async (req, res) => {
	const output = {
		kegCredits: await loadKegCredits(req.query),
	}

	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(output))
}