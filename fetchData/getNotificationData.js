import firebase from '../firebase/clientApp'

const getNotificationData = async (query = {}) => {
  let db = firebase.firestore()
  let snapshot = await db.collection('notifications').get()
  let notifications = snapshot.docs.map(doc => doc.data())
  if (!snapshot.exists) {
    console.log('Cant find collection')
  } else{
    return notifications
  }
}

export default getNotificationData