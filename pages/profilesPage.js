global.XMLHttpRequest = require("xhr2");
import React, { useState } from 'react'
import { useRouter, } from 'next/router'
import Head from 'next/head'
import Footer from '../components/Footer'
import { loadProfiles } from './api/profiles'
import getNotificationData from './api/notifications'
import NavHandler from '../components/NavHandler'
import ProfileCard from '../components/ProfileCard'
import PaginationReact from '../components/PaginationReact'
import { Button, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap'
import { storage, db } from '../lib/firebase'

const ProfilesPage = props => {
  const router = useRouter()
  const [profiles, setProfiles] = useState(props.profiles)
  const [currentPage, setCurrentPage] = useState(1)
  const [profilesPerPage] = useState(10)
  const [notificationData, setNotifications] = useState(props.notificationData)
  const [users, setUsers] = useState()

  //! Logic for the pagination
  const indexOfLastProfile = currentPage * profilesPerPage
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile,
  )
  const paginate = pageNumber => setCurrentPage(pageNumber)
  
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

  return (
    <>
      <Head>
        <title>Island Beer Club | Profiles</title>
        <link rel='icon' href='/beer-solid.svg' />
      </Head>
      <NavHandler notifications={notificationData} />
      <Container className='bg-white px-0'>
      <Jumbotron
          fluid
          className='d-flex justify-content-center align-items-center text-light beer-sky-header w-100 mb-0'
        >
          <p className='h2'>Member Profiles</p>
        </Jumbotron>
            <Row className='d-flex flex-column mb-4 mx-0'>
          <Col>
            <Form className='profile-search__form' onSubmit={handleFormSubmit}>
              <Form.Control
                size='lg'
                className='profile-search__input p-4'
                type='text'
                name='searchField'
                placeholder='Name, MBR#'
                defaultValue={router.query.search}
              />
              <Button type='submit' size='lg' letiant='secondary'>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        <ProfileCard
          storage={storage}
          currentProfiles={currentProfiles} 
        />
        <Row className='d-flex flex-column mx-0 bg-secondary'>
        <Col className='text-center text-light pt-2'>
          <h3>Member Profiles</h3>
        </Col>
        <Col className='d-flex flex-wrap justify-content-center align-items-center p-1'>
          <PaginationReact
            paginate={paginate}
            totalProfiles={profiles.length}
            profilesPerPage={profilesPerPage}
          />
        </Col>
      </Row>

        <Footer />
      </Container>
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

export default ProfilesPage