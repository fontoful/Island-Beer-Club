import React, { Component, useState } from "react"
import { Link } from "@reach/router"
import Head from 'next/head'
import Navigation from '../components/navbar'
import Footer from '../components/footer'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const signInWithEmailAndPasswordHandler =
    (event, email, password) => {
      event.preventDefault()
    }

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget

    if (name === 'userEmail') {
      setEmail(value)
    }
    else if (name === 'userPassword') {
      setPassword(value)
    }
  }

  return (
    <>
      <Head>
        {/* head */}
        <title>Island Beer Club | Member</title>
      </Head>
      <Navigation />
      <Container fluid className="login-flexbox">
        <Row>
          <Col>

            <Form className="login-form">
              <Form.Row>
                <Image as={Col} className="login-logo" src='/IBCLogo.png' />
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label sm={2}>Email</Form.Label>
                  <Form.Control size="lg" type="email" placeholder="Enter email" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label size="sm">Password</Form.Label>
                  <Form.Control size="lg" type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Button className="login-button" type="submit" size="lg" block>
                  Submit
              </Button>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default SignIn