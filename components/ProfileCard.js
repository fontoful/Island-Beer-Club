global.XMLHttpRequest = require("xhr2");
import React, { useEffect, useReducer, useState } from 'react'
import Image from 'next/image'

const ProfileCard = ({ storage, currentProfiles}) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const newMappedProfiles = []
    // this is firing up when the component mounts
    currentProfiles.forEach(async doc => {
          const { img } = doc
          const storageRef = storage.ref()
          const fileRef = storageRef.child(img)
          const fullUrl = await fileRef.getDownloadURL()
          newMappedProfiles.push({...doc, img: fullUrl})
    })

    setUsers(newMappedProfiles)
  }, [])

  return (
    <>
      <h1>A Profile Card Component</h1>
      {users.map(profile => (
        <p>{profile.name}</p>
      ))}
      
    </>
  )
}

export default ProfileCard