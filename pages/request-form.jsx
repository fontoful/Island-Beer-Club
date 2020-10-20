import React, { useState } from 'react'
import firebase from '../lib/firebase'
import Head from 'next/head'
import Navigation from '../components/navbar'
import Hero from '../components/header'
import Footer from '../components/footer'
import { Container, Col, Button, Form } from 'react-bootstrap'

const addMemberForm = () => {
    
  const [validated, setValidated] = useState(false)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setValidated(true)
  }

    return (
        <>
            <Head>
                {/* head */}
                <title>Island Beer Club | Signup!</title>
            </Head>
            <Hero />
            <Navigation />
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control required type="text" placeholder="Full Name" />
                            <Form.Control.Feedback>Custom Greeting.</Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Control required type="text" placeholder="Sponsor" />
                            <Form.Control.Feedback>Custom Feedback about Sponsor</Form.Control.Feedback>
                        </Col>
                    </Form.Row>
                    </Form.Group>

                    <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control required as="textarea" rows="3" placeholder="Bio" />
                        </Col>
                    </Form.Row>
                    </Form.Group>

                    <Form.Group>
                    <Form.Row>
                        <Col>
                        <Form.Control required as="textarea" rows="3" placeholder="Likes" />
                        </Col>
                    </Form.Row>
                    </Form.Group>

                    <Form.Group>
                    <Form.Row>
                        <Col>
                        <Form.Control required as="textarea" rows="3" placeholder="Dislikes" />
                        </Col>
                    </Form.Row>
                    </Form.Group>

                    <Button>Submit</Button>
                </Form>
            </Container>
            <Footer />
        </>
    )
}

export default addMemberForm