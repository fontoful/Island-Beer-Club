import React, { useState, useEffect } from 'react'
import { Toast } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import { db } from '../lib/firebase'

export const loadNotificationData = async (query = {}) => {
  let snapshot = await firebase
    .firestore()
    .collection('notifications')
    .get()
  let data = (snapshot.docs.map(doc => doc.data()))
  if (!data === 0) {
    console.log('Cant find collection')
  } else{
    return data
  }
}

const Notifications = ({data} = loadNotificationData(query)) => {
  return(
  <>
  <Toast className='m-auto'>
        <Toast.Header>
          <FontAwesomeIcon icon={faBeer} width='12' className="rounded mr-2" />
          <strong className="mr-auto">static header</strong>
          <small>5 Weeks ago</small>
        </Toast.Header>
        <Toast.Body>This is a static body for my body.</Toast.Body>
      </Toast>
  </>
)
  }
export default Notifications
