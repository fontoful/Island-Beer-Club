import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { loadProfiles } from './api/profiles'
import getNotificationData from './api/notifications'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavHandler from '../components/NavHandler'
import PaginationReact from '../components/PaginationReact'
import { Pagination } from 'react-bootstrap'
import { Button, Col, Container, Form, Image, Jumbotron, Row, Tab, Tabs } from 'react-bootstrap'

const getUrl = pathToFile => {
  const bucket = 'island-beer-club.appspot.com'
  const img = pathToFile
  const downloadToken = 1
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
    img,
  )}?alt=media&token=${downloadToken}`
}

const Profiles = props => {
  const router = useRouter()
  const [profiles, setProfiles] = useState(props.profiles)
  const [notificationData, setNotifications] = useState(props.notificationData)
  const [currentPage, setCurrentPage] = useState(1)
  const [profilesPerPage] = useState(5)

  //! Logic for the pagination
  const indexOfLastProfile = currentPage * profilesPerPage
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile,
  )
  // cutting the Array
  const handleFormSubmit = async e => {
    e.preventDefault()

    const searchInput = e.target.searchField.value
    const query = {}

    const response = await fetch(`/api/profiles?search=${searchInput}`)
    const { profiles } = await response.json()
    setProfiles(profiles)

    if (searchInput !== '') {
      query.search = searchInput
    }

    router.push({
      pathname: router.pathname,
      query,
    })
  }

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <Head>
        <title>Island Beer Club | Profiles</title>
        <link rel='icon' href='/beer-solid.svg' />
      </Head>
      <NavHandler notifications={notificationData} />
      <Jumbotron fluid className='d-flex align-items-center justify-content-center text-light profile-jumbotron mb-0'>
        <p className='h2'>Member Profiles</p>
      </Jumbotron>
      <Container fluid className='bg-white'>
        <Row className='d-flex flex-column mb-4'>
          <Col cl>
            <Form className='profile-search__form' onSubmit={handleFormSubmit}>
              <Form.Control
                size='lg'
                className='profile-search__input p-4'
                type='text'
                name='searchField'
                placeholder='Name, MBR#'
                defaultValue={router.query.search}
              />
              <Button type='submit' size='lg' variant='secondary'>
                Search
          </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center flex-wrap align-content-stretch mt-2'>
            {currentProfiles.map(profile => (
              <div key={profile.mbr} className='profile-card shadow'>
                <div className='profile-header'>
                  <Image
                    className='profile-img shadow'
                    src={getUrl(profile.img)}
                    style={{borderStyle:'solid', borderColor: 'white', borderRadius: '.2rem'}}
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

                  <Tabs className='d-flex flex-row' defaultActiveKey='bio'>
                    <Tab eventKey='bio' title='Bio' className='profile-body'>
                      {profile.bio.length === 0 ? 'No bio.' : profile.bio}
                    </Tab>
                    <Tab eventKey='likes' title='Likes' className='profile-body'>
                      {profile.likes.length === 0 ? 'No likes.' : profile.likes}
                    </Tab>
                    <Tab
                      eventKey='dislikes'
                      title='Dislikes'
                      className='profile-body'
                    >
                      {profile.dislikes.length === 0
                        ? 'No dislikes.'
                        : profile.dislikes}
                    </Tab>
                    <Tab
                      eventKey='hobbies'
                      title='Hobbies'
                      className='profile-body'
                    >
                      {profile.hobbies.length === 0
                        ? 'No hobbies.'
                        : profile.hobbies}
                    </Tab>
                    <Tab
                      eventKey='nicknames'
                      title='Nicknames'
                      className='profile-body'
                    >
                      {profile.nicknames.length === 0
                        ? 'No nicknames.'
                        : profile.nicknames}
                    </Tab>
                  </Tabs>
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center align-items-center bg-secondary'>
            <PaginationReact
              paginate={paginate}
              totalProfiles={profiles.length}
              profilesPerPage={profilesPerPage}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
export const getServerSideProps = async ctx => {
  const { query } = ctx
  const profiles = await loadProfiles(query)
  const notificationData = await getNotificationData(query)
  return {
    props: {
      profiles,
      notificationData,
    },
  }
}
export default Profiles
