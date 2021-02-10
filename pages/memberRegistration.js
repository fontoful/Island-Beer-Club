import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { db } from '../lib/firebase'
import { useForm, Controller } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Swal from 'sweetalert2'

const MemberRegistration = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = data => {
    db.collection('profilesTest')
      .add({
        ...data,
        is_member: false,
      })
      .then(() => {
        console.log('document was successfully written')
        Swal.fire({
          icon: 'success',
          text: 'Your information has been sent',
        })
      })
      .catch(
        Swal.fire({
          icon: 'error',
          text: 'it appears that something has gone wrong',
        }),
      )
  }

  return (
    <>
      <Head>
        <title> Island Beer club | Member Registration</title>
        <link rel='icon' href='/beer-solid.svg' />
      </Head>

      <Container className='form-container shadow px-0'>
        <Row className='d-flex w-100'>
          <Col className='member-reg-col-one text-light text-center py-4'>
            <Image
              className='question-icon'
              src='question-circle-regular.svg'
            />
            <p className='lead'>
              Visit our Profile Page to get an idea what others submitted.
            </p>
            <p className='lead'>
              Don’t worry about your Mbr#, your MS date or your geneology
              assignment; they will all be added to your profile for you.
            </p>
          </Col>

          <Col md={8} className='member-reg-col-two bg-light'>
            <form
              className='member-reg__form'
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className='display-3 mt-5 text-center'> Island Beer Club</p>
              <p className='h3'>Member Registration Form</p>
              <div className='member-reg__row'>
                <div className='member-reg-group-row w-50'>
                  <div className='error-box'>
                    {errors.firstName && (
                      <FontAwesomeIcon icon={faExclamationCircle} size='2x' />
                    )}
                  </div>
                  <input
                    className='member-reg__input'
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    ref={register({
                      required: true,
                      maxLength: 40,
                    })}
                  />
                </div>

                <div className='member-reg-group-row w-50'>
                  <div className='error-box'>
                    {errors.lastName && (
                      <FontAwesomeIcon icon={faExclamationCircle} size='2x' />
                    )}
                  </div>
                  <input
                    className='member-reg__input'
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    ref={register({
                      required: true,
                      maxLength: 40,
                    })}
                  />
                </div>

                <div className='member-reg-group-row w-50'>
                  <div className='error-box'>
                    {errors.phone && (
                      <FontAwesomeIcon icon={faExclamationCircle} size='2x' />
                    )}
                  </div>
                  <MaskedInput
                    mask={[
                      '(',
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    className='member-reg__input'
                    placeholder='Phone Number'
                    guide={false}
                    id='my-input-id'
                    onBlur={() => {}}
                    onChange={() => {
                      // const saveItem = localStorage.setItem(defaultValue)
                    }}
                  />
                </div>

                <div className='member-reg-group-row w-50'>
                  <div className='error-box'>
                    {errors.email && (
                      <FontAwesomeIcon icon={faExclamationCircle} size='2x' />
                    )}
                  </div>
                  <input
                    className='member-reg__input'
                    type='text'
                    name='email'
                    placeholder='email'
                    ref={register({
                      required: true,
                      maxLength: 40,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                </div>

                <div className='member-reg-group-row w-50'>
                  <div className='error-box'>
                    {errors.sponsor && (
                      <FontAwesomeIcon icon={faExclamationCircle} size='2x' />
                    )}
                  </div>
                  <input
                    className='member-reg__input'
                    type='text'
                    name='sponsor'
                    placeholder='Sponsor Full Name'
                    ref={register({
                      required: true,
                      maxLength: 50,
                    })}
                  />
                </div>
              </div>

              <p className='display-4'>Tell us about yourself...</p>

              <div className='member-reg-row pt-4 w-85'>
                <div className='member-reg-group__textarea'>
                  <label className='member-reg__label'>Bio:</label>
                  <textarea
                    className='member-reg__textarea'
                    type='text'
                    name='bio'
                    ref={register}
                  />
                </div>
              </div>
              <div className='member-reg-row pt-4 w-85'>
                <div className='member-reg-group__textarea'>
                  <label className='member-reg__label'>Likes:</label>
                  <textarea
                    className='member-reg__textarea'
                    type='text'
                    name='likes'
                    ref={register}
                  />
                </div>
              </div>
              <div className='member-reg-row pt-4 w-85'>
                <div className='member-reg-group__textarea'>
                  <label className='member-reg__label'>Disikes:</label>
                  <textarea
                    className='member-reg__textarea'
                    type='text'
                    name='dislikes'
                    ref={register}
                  />
                </div>
              </div>
              <div className='member-reg-row pt-4 w-85'>
                <div className='member-reg-group__textarea'>
                  <label className='member-reg__label'>Hobbies:</label>
                  <textarea
                    className='member-reg__textarea'
                    type='text'
                    name='hobbies'
                    ref={register}
                  />
                </div>
              </div>
              <div className='member-reg-row py-4 w-85'>
                <div className='member-reg-group__textarea'>
                  <label className='member-reg__label'>Nicknames:</label>
                  <textarea
                    className='member-reg__textarea'
                    type='text'
                    name='nicknames'
                    ref={register}
                  />
                </div>
              </div>

              <div className='member-reg-row py-4 w-85'>
                <div className='member-reg-group__textarea'>
                  <label className='member-reg__label'>Comments:</label>
                  <textarea
                    className='member-reg__textarea'
                    type='text'
                    name='comments'
                    ref={register}
                  />
                </div>
              </div>
              <div className='member-reg-row py-4'>
                <Button
                  type='submit'
                  className='member-reg__btn'
                  block
                  size='xxl'
                >
                  Finish
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className='d-flex m-auto w-85'>
          <Col className='d-flex justify-content-end mt-2 lead'>
            <p className='mr-2'>Lost? Go </p>
            <Link href='/'>Home</Link>
          </Col>
        </Row>
      </Container>
      <style jsx global>{`
        html,
        body {
          background: linear-gradient(
            90deg,
            rgba(135, 161, 171, 1) 0%,
            rgba(69, 101, 124, 1) 87%,
            rgba(88, 125, 151, 1) 100%
          );
        }
      `}</style>
    </>
  )
}

export default MemberRegistration
