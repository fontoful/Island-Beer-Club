import Head from 'next/head'
import Nav from './Nav'
import { Container } from 'react-bootstrap'
import styles from './Layout.module.scss'
import React from 'react'

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Container className={styles.layout}>
      <Nav className={styles.nav} />
        {children}
      </Container>
    </React.Fragment>
  )
}