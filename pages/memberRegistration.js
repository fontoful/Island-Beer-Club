import Head from 'next/head'
import React from 'react'
import { db } from '../lib/firebase'

import { useForm } from 'react-hook-form'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

const MemberRegistration = () => {
    const { register, handleSubmit, errors } = useForm()

	const onSubmit = data => {
		db.collection('profilesTest')
			.add({
				...data,
				is_member: false,
			})
			.then(() => {
				console.log('document was successfully written')
			})
			.catch(err => console.log(err))
    }
    
    return (
        <>
        <Head>
            <title> Island Beer club | Member Registration</title>
        </Head>
		<Navigation />

		<Container fluid className='bg-light px-0'>
			<Navigation />
			<Jumbotron fluid className='profile-jumbotron'>
				<p className='display-2'>Member Registration Form</p>
			</Jumbotron>
		</Container>

		<Container className='form-container shadow px-0 mb-5'>
			<Row className='d-flex w-100'>
				<Col className='member-reg-col-one text-light text-center'>
					<Image className='question-icon' src='question-circle-regular.svg' />
					<p className='lead'>Visit our Profile Page to get an idea what others submitted.</p>
					<p className='lead'>Don’t worry about your Mbr#, your MS date or your geneology assignment; they will all be added to your profile for you.</p>
				</Col>

				<Col xs={8} className='member-reg-col-two bg-light'>
				<form className='member-reg__form' onSubmit={handleSubmit(onSubmit)}>

					<div className='member-reg__row'>
						<div className='member-reg__group w-50'>
							<input
								className='member-reg__input'
								type='text'
								name='firstName'
								ref={register}
								placeholder='First Name' />
						</div>
						<div className='member-reg__group w-50'>
							<input
								className='member-reg__input'
								type='text'
								name='lastName'
								ref={register}
								placeholder='Last Name' />
						</div>
						<div className='member-reg__group w-50'>
							<input
								className='member-reg__input'
								type='text'
								name='phone'
								ref={register}
								placeholder='Phone' />
						</div>
						<div className='member-reg__group w-50'>
							<input
								className='member-reg__input'
								type='email'
								name='email'
								ref={register}
								placeholder='email' />
						</div>
						<div className='member-reg__group w-50'>
							<input
								className='member-reg__input'
								type='text'
								name='sponsor'
								ref={register}
								placeholder='Sponsor Full Name' />
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
								ref={register} />
						</div>
					</div>
					<div className='member-reg-row pt-4 w-85'>
						<div className='member-reg-group__textarea'>
							<label className='member-reg__label'>Likes:</label>
							<textarea
								className='member-reg__textarea'
								type='text'
								name='likes'
								ref={register} />
						</div>
					</div>
					<div className='member-reg-row pt-4 w-85'>
						<div className='member-reg-group__textarea'>
							<label className='member-reg__label'>Disikes:</label>
							<textarea
								className='member-reg__textarea'
								type='text'
								name='dislikes'
								ref={register} />
						</div>
					</div>
					<div className='member-reg-row pt-4 w-85'>
						<div className='member-reg-group__textarea'>
							<label className='member-reg__label'>Hobbies:</label>
							<textarea
								className='member-reg__textarea'
								type='text'
								name='hobbies'
								ref={register} />
						</div>
					</div>
					<div className='member-reg-row py-4 w-85'>
						<div className='member-reg-group__textarea'>
							<label className='member-reg__label'>Nicknames:</label>
							<textarea
								className='member-reg__textarea'
								type='text'
								name='nicknames'
								ref={register} />
						</div>
					</div>
					<div className='member-reg-row py-4 w-85'>
						<Button className='member-reg__btn' block size='xxl'>Finish</Button>
					</div>
				</form>
				</Col>
			</Row>
		</Container>
		<Footer />
        </>
    )
}

export default MemberRegistration