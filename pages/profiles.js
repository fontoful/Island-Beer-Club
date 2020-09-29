import React from 'react'
import db from '../lib/firebase'

const Profiles = ({ profiles }) => {
	return (
		<>
			{/* {ownerLists.map(item => (
				<h1>{item.ownername}</h1>
			))} */}
			{profiles.map(profile => console.log(profile))}
		</>
	)
}

export const getStaticProps = async () => {
	const snapshot = await db.collection('profiles').get()
	const data = snapshot.docs.map(doc => doc.data())
	return {
		props: {
			profiles: data,
		},
	}
}

// export const getStaticProps = async () => {
// 	return {
// 		props: {
// 			ownerLists: [
// 				{
// 					ownername: 'bruno',
// 				},
// 			],
// 		},
// 	}
// }

export default Profiles
