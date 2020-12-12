import React, { Component, useState, useEffect } from 'react';

import { loadProfiles } from '../api/profiles'
import Image from 'react-bootstrap/Image'

const getImg = pathToFile => {
    const bucket = 'island-beer-club.appspot.com'
    const img = pathToFile
    const downloadToken = 1
    return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/resources%2F${encodeURIComponent(
        img,
    )}?alt=media&token=${downloadToken}`
}

const ProfileTabs = props => {
    const [profiles] = useState(props.profiles)
    return (
        <>
            {profiles.map(profile => (
                <div key={profile.id}>
                    <Image
                        className='profile-img'
                        thumbnail
                        src={getImg(profile.img)}
                    />
                    <h5>Mbr # {profile.number}</h5>
                    <p className='profile-bio'>
                        {profile.bio}
                    </p>

                </div>
            ))}
        </>
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
export default ProfileTabs