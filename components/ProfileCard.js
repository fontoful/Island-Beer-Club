// global.XMLHttpRequest = require("xhr2");
import React, { useEffect, useReducer, useState } from 'react'
import Image from 'next/image'

const ProfileCard = ({ storage, currentProfiles }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const resultingArr = Promise.all(
      currentProfiles.map(async profile => {
        const { img } = profile
        const fullUrl = await storage.ref().child(img).getDownloadURL()

        return { ...profile, img: fullUrl }
      }),
    )

    resultingArr.then(data => setUsers(data))
  }, [])

  console.log(users)

  return (
    <>
      <h1>A Profile Card Component</h1>
      {users &&
        users.length > 0 &&
        users.map((profile, idx) => (
          <div key={idx}>
            <img src={profile.img} />
            <p>{profile.name}</p>
          </div>
        ))}
    </>
  )
}

export default ProfileCard
