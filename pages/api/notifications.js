import firebase from '../../lib/firebase'

const getNotificationData = async (query = {}) => {
    let snapshot = await firebase
      .firestore()
      .collection('notifications')
      .get()
    let data = (snapshot.docs.map(doc => doc.data()))
    if (!data === 0) {
      console.log('Cant find collection')
    } else{
      return data
    }
  }

  export default getNotificationData