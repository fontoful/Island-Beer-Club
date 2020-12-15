import {
	Jumbotron,
	Container,
	Row,
	Col,
	Image,
	Button,
	OverlayTrigger,
	Form,
} from 'react-bootstrap'

const Header = () => (
	<>
		<Jumbotron fluid className='landing-bg'>
			<Container className='text-center'>
				<Row>
					<Col>
						<Image className='landing-logo' src='IBCLogo2.png' />
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className='landing-text'>Already a Member?</h3>
						<p className='landing-sub-text'>
							Opt-in below for our periodic eGram.
						</p>

						{['bottom'].map(placement => (
							<OverlayTrigger
								trigger='click'
								key={placement}
								placement={placement}
								overlay={
									<Form>
										<Form.Row className='landing-optin'>
											<Form.Group as={Col}>
												<Form.Control
													type='email'
													placeholder='Enter email'
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group
												className='text-center'
												as={Col}
											>
												<Button
													type='submit'
													variant='success'
												>
													Submit
												</Button>
											</Form.Group>
										</Form.Row>
									</Form>
								}
							>
								<Button variant='light' size='lg'>
									adf;sgj
								</Button>
							</OverlayTrigger>
						))}
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	</>
)

export default Header
