import firebase from '../../lib/firebase'

export const loadKegConsumption = async (query = {}) => {

    let docsSnap = await firebase
        .firestore()
        .collection('kegConsumption')
        .orderBy('kegs')
        .get()
    
    let kegConsumption = docsSnap.docs.map(doc => doc.data())

    return kegConsumption
}

export default async (req, res) => {
    const output = {
        kegConsumption: await loadKegConsumption(req.query),
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(output))
}