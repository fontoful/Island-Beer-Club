import React from 'react'
import { firebaseDB } from '../lib/firebase'

const Profiles = ({ ownerLists }) => {
	return (
		<>
			{ownerLists.map(item => (
				<h1>{item.ownername}</h1>
			))}
		</>
	)
}

export const getStaticProps = async () => {
	return {
		props: {
			ownerLists: [
				{
					ownername: 'bruno',
				},
			],
		},
	}
}

export default Profiles
