import React, { useState } from 'react'
import Head from 'next/head'
import { loadProfiles } from './api/profiles'
import ProfileCard from '../components/ProfileCard'
import { Col, Container, Row } from 'react-bootstrap'
import { storage, db } from '../lib/firebase'

const ProfilesPage = props => {
  const [profiles, setProfiles] = useState(props.profiles)
  const [currentPage, setCurrentPage] = useState(1)
  const [profilesPerPage] = useState(10)

  //! Logic for the pagination
  const indexOfLastProfile = currentPage * profilesPerPage
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile,
  )

  return (
    <>
    <Head>
        <title>Island Beer Club | Profiles</title>
        <link rel='icon' href='/beer-solid.svg' />
      </Head>
    <Container>
      <Row>
        <Col>
          <ProfileCard
            storage={storage}
            currentProfiles={currentProfiles}
            db={db}
           />
        </Col>
      </Row>
    </Container>
    </>
  )


}

export const getServerSideProps = async ctx => {
  const { query } = ctx
  const profiles = await loadProfiles(query)
  return {
    props: {
      profiles,
    },
  }
}

export default ProfilesPage