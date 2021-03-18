import React from 'react'
import { Toast } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import getNotificationData from '../pages/api/notifications'

const NotificationData = ({ notifications }) => {
//console.log('Test', notifications)
  return (
    <>
    {notifications.map((notification, index) => (
      <Toast key={index} className='m-auto'>
        <Toast.Header>
          <FontAwesomeIcon icon={faBeer} width='12' className="rounded mr-2" />
          <strong className="mr-auto">{notification.header}</strong>
          <small>5 Weeks ago</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
    ))}
    </>
  )
}

export const getServerSideProps = async ctx => {
  const { query } = ctx
  const notifications = await getNotificationData(query)
  return {
    props: {
      notifications,
    },
  }
}

export default NotificationData