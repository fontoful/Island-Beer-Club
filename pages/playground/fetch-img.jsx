import React, { useState, useEffect } from 'react'
import firebase from '../../lib/firebase'
import uuid from 'uuidv4'

const useProfiles = function () {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    firebase
      .firestore()
      .collection('profiles')
      .onSnapshot((snapshot) => {
        const newProfiles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setProfiles(newProfiles)
      })
  }, [])
  return profiles
}

 const downloadUrl = (pathToFile) => {
  const bucket = 'island-beer-club.appspot.com'
  const img = pathToFile
  const downloadToken = 1
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/resources%2F${encodeURIComponent(img)}?alt=media&token=${downloadToken}`
}

const Profiles = () => {
  const profiles = useProfiles()
  return (
    <>
      {profiles.map((profile) =>
        <img key={profile.id} src={downloadUrl(profile.img)} height="125px" width="200px" />            
      )}
    </>
  )
}

export default Profiles