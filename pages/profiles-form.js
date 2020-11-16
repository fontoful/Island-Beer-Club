import Head from 'next/head'
import { db } from '../lib/firebase'

import { useForm } from 'react-hook-form'
import Header from '../components/header'
import Navigation from '../components/navbar'
import Footer from '../components/footer'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

const ProfilesForm = () => {
	const { register, handleSubmit, errors } = useForm()

	const onSubmit = data => {
		db.collection('profilesTest')
			.add({
				...data,
				is_member: 'false',
			})
			.then(() => {
				console.log('document was successfully written')
			})
			.catch(err => console.log(err))
	}

	return (
		<>
			<Head>
				<title>Island Beer Club | Profiles Form</title>
			</Head>

			<Navigation />

			<Header />

			<Container className='my-4'>
				<section className='greeting-sec'>
					<h1 className='text text-primary'>
						Island Beer Club Profile Submission Page...
					</h1>
					<p>
						Use the form below to submit your official IBC Member
						profile. If your current profile needs changing, use
						this form to send in a new one. Visit the profile page
						to get an idea what others submitted. Don't worry about
						your Mbr#, your MS date or your geneology assignment;
						they will all be added to your profile for you.
					</p>
				</section>

				<Row>
					<Col>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<Form.Row>
								<Form.Group as={Col} controlId='formGridEmail'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										name='email'
										ref={register({ required: true })}
										placeholder='Enter email'
									/>
								</Form.Group>
								<Form.Group
									as={Col}
									controlId='formGridPassword'
								>
									<Form.Label>Phone number</Form.Label>
									<Form.Control
										type='text'
										name='phone number'
										ref={register({ required: true })}
										placeholder='Phone number'
									/>
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Sponsor</Form.Label>
									<Form.Control
										type='text'
										name='sponsor'
										ref={register({ required: true })}
									></Form.Control>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Other Category</Form.Label>
									<Form.Control
										type='textarea'
										size='lg'
										name='other'
										ref={register}
									></Form.Control>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Likes</Form.Label>
									<Form.Control
										as='textarea'
										size='lg'
										placeholder='likes'
										name='likes'
										ref={register({ required: true })}
									/>
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>First name</Form.Label>
									<Form.Control
										type='text'
										name='firstName'
										ref={register({
											required: true,
											minLength: 5,
										})}
									/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Last name</Form.Label>
									<Form.Control
										type='text'
										ref={register}
										name='lastName'
									></Form.Control>
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col} controlId='formGridCity'>
									<Form.Label>Nicknames</Form.Label>
									<Form.Control
										name='nicknames'
										ref={register({ required: true })}
										as='textarea'
										size='lg'
										placeholder='your nicknames...'
									/>
								</Form.Group>

								<Form.Group as={Col} controlId='formGridState'>
									<Form.Label>Hobbies</Form.Label>
									<Form.Control
										name='hobbies'
										ref={register({ required: true })}
										as='textarea'
										size='lg'
										placeholder='What are your hobbies'
									></Form.Control>
								</Form.Group>

								<Form.Group as={Col} controlId='formGridZip'>
									<Form.Label>Zip</Form.Label>
									<Form.Control
										placeholder='Enter zip'
										name='zip'
										ref={register({ required: true })}
									/>
								</Form.Group>
							</Form.Row>
							<Button variant='primary' type='submit'>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>

			<Footer />
		</>
	)
}

export default ProfilesForm
