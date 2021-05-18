global.XMLHttpRequest = require("xhr2");
import React, { useEffect, useState } from 'react'
import { Col, Image, Row, Tab, Tabs } from 'react-bootstrap'

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

  return (
    <Row className='mx-0'>
      <Col className='d-flex flex-wrap justify-content-around'>
        {users &&
          users.length > 0 &&
          users.map((profile) => (
            <div key={profile.id} className='profile-card shadow'>
              <div className='profile-header'>
                <Image
                  className='profile-img shadow'
                  src={profile.img}
                  style={{
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderRadius: '.2rem',
                  }}
                />
                <div className='profile-stats text-light'>
                  <h4>{profile.name} </h4>
                  <h5>MSD: {profile.msd}</h5>
                  <h6>Sponsor: {profile.sponsor}</h6>
                </div>
                <div className='profile-number pt-2 text-light'>
                  <h3>#{profile.mbr}</h3>
                </div>
              </div>

              <Tabs className='d-flex flex-row justify-content-around' defaultActiveKey='bio'>
                <Tab eventKey='bio' title='Bio' className='profile-body'>
                  {profile.bio === undefined ? 'No bio' : profile.bio}
                </Tab>
                <Tab eventKey='likes' title='Likes' className='profile-body'>
                  {profile.likes === undefined
                    ? 'No likes'
                    : profile.likes}
                </Tab>
                <Tab
                  eventKey='dislikes'
                  title='Dislikes'
                  className='profile-body'
                >
                  {profile.dislikes === undefined
                    ? 'No dislikes'
                    : profile.dislikes}
                </Tab>
                <Tab
                  eventKey='hobbies'
                  title='Hobbies'
                  className='profile-body'
                >
                  {profile.hobbies === undefined
                    ? 'No hobbies'
                    : profile.hobbies}
                </Tab>
                <Tab
                  eventKey='nicknames'
                  title='Nicknames'
                  className='profile-body'
                >
                  {profile.nicknames === undefined
                    ? 'No nicknames.'
                    : profile.nicknames}
                </Tab>
              </Tabs>
            </div>
          ))}
      </Col>
    </Row>

  )
}

export default ProfileCard
