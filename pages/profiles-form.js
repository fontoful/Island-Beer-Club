import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap'

const ProfilesForm = () => {
	return (
		<>
			<Head>
				<title>Island Beer Club | Profiles Form</title>
			</Head>

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
						<Form>
							<Form.Row>
								<Form.Group as={Col} controlId='formGridEmail'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										placeholder='Enter email'
									/>
								</Form.Group>

								<Form.Group
									as={Col}
									controlId='formGridPassword'
								>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type='password'
										placeholder='Password'
									/>
								</Form.Group>
							</Form.Row>

							<Form.Group controlId='formGridAddress1'>
								<Form.Label>Address</Form.Label>
								<Form.Control placeholder='1234 Main St' />
							</Form.Group>

							<Form.Group controlId='formGridAddress2'>
								<Form.Label>Address 2</Form.Label>
								<Form.Control placeholder='Apartment, studio, or floor' />
							</Form.Group>

							<Form.Row>
								<Form.Group as={Col} controlId='formGridCity'>
									<Form.Label>City</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col} controlId='formGridState'>
									<Form.Label>State</Form.Label>
									<Form.Control
										as='select'
										defaultValue='Choose...'
									>
										<option>Choose...</option>
										<option>...</option>
									</Form.Control>
								</Form.Group>

								<Form.Group as={Col} controlId='formGridZip'>
									<Form.Label>Zip</Form.Label>
									<Form.Control />
								</Form.Group>
							</Form.Row>

							<Form.Group id='formGridCheckbox'>
								<Form.Check
									type='checkbox'
									label='Check me out'
								/>
							</Form.Group>

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
