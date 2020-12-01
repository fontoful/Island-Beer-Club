import React from 'react'
import Image from 'react-bootstrap/Image'
import { loadProfiles } from '../../api/profiles'

const getUrl = pathToFile => {
	const bucket = 'island-beer-club.appspot.com'
	const img = pathToFile
	const downloadToken = 1
	return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/resources%2F${encodeURIComponent(
		img,
	)}?alt=media&token=${downloadToken}`
}

const ProfileCard = (props) =>{

return (
    <div key={profile.id} className='profile-card shadow'> 
		<div className='profile-header'>
			<Image className='profile-img' thumbnail src={getUrl(profile.img)} />
				<div lg={4} xs={6} className='profile-stats text-light'>
											<h4>{profile.name} </h4>
											<h5>{profile.msd}</h5>
											<h6>{profile.sponsor}</h6>
										</div>
										<div className='profile-number pt-2 text-light'>
											<h3>Mbr#:{profile.number}</h3>
										</div>
										</div>
										<div className='profile-body'>
											<h5>Bio:</h5>
											<p className='profile-bio'>
												{profile.bio}
											</p>
										</div>
									</div>
)
}
export const getServerSideProps = async ctx => {
	const { query } = ctx
	const profiles = await loadProfiles(query)
	return {
		props: {
			profiles,
		},
	}
}
export default ProfileCard