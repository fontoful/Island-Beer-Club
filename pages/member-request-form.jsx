import React, { useState } from 'react'
import firebase from '../lib/firebase'
import Head from 'next/head'
import Navigation from '../components/navbar'
import Hero from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap'

const addMemberForm = () => {
    const [name, setName] = useState('')
    const [sponsor, setSponsor] = useState('')
    const [bio, setBio] = useState('')
    const [likes, setLikes] = useState('')
    const [dislikes, setDislikes] = useState('')
    function onSubmit(e) {
        e.preventDefault()

        firebase
        .firestore()
        .collection('profilesTest')
        .add({
            name: fname + lname,
            sponsor: sponsor,
            likes: likes,
            dislikes: dislikes
        })
        .then(() => {
            setName('')
            setSponsor('')
            setBio('')
            setLikes('')
            setDislikes('')
        })
    }

    return (
        <>
            <Head>
                {/* head */}
                <title>Island Beer Club | Members</title>
            </Head>
            <Hero />
            <Navigation />
            <Container>
                <Form onSubmit={onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formfirst">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control value={name} onChange={e => setName(e.currentTarget.value)} type="text" placeholder="John McDrinksAlot" />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formSponsor">
                            <Form.Label>Sponsor</Form.Label>
                            <Form.Control value={sponsor} onChange={e => setSponsor(e.currentTarget.value)} type="text" placeholder="Rob Crenshaw" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Col} controlId="formBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control value={bio} onChange={e => setBio(e.currentTarget.value)} as="textarea" rows="3" placeholder="Retired from this job. Started this buisness. I have this many kids. I've been divorced times." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formLikes">
                        <Form.Label>Likes</Form.Label>
                        <Form.Control value={likes} onChange={e => setLikes(e.currentTarget.value)} as="textarea" rows="3" placeholder="I like Beer and babes." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDislikes">
                        <Form.Label>Dislikes</Form.Label>
                        <Form.Control value={dislikes} onChange={e => setDislikes(e.currentTarget.value)} as="textarea" rows="3" placeholder="Annoying people. Bad tattoos and my exwife and/or exhusband." />
                    </Form.Group>
                    <Button>Submit</Button>
                </Form>
            </Container>
            <Footer />
        </>
    )
}

export default addMemberForm