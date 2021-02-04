import firebase from '../../lib/firebase'

export const loadIbuData = async (query = {}) => {
    let docsSnap = await firebase
        .firestore()
        .collection('ibuData')
        .orderBy('beerStyle')
        .get()
    
    let ibuData = docsSnap.docs.map(doc => doc.data())

    return ibuData
}

export default async (req, res) => {
    const output = {
        ibuData: await loadIbuData(req.query),
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(output))
}