import React from 'react'
import Navbar from './navbar'
import parcelIcon from '../assets/images/parcel.jpeg'
import locationIcon from '../assets/images/location.png'
import contactIcon from '../assets/images/contact.jpg'

const Profile = () => {
  return (
    <div className='profileHolder'>
        <Navbar />
        <div className='container'>
            <h1 className='heading'>Your Account</h1>
            <div className='card-wrapper'>
                <div className='card-box'>
                    <img src={parcelIcon} />
                    <h1>Your Orders</h1>
                </div>
                <div className='card-box'>
                    <img src={locationIcon}/>
                    <h1>Your Addresses</h1>
                </div>
                <div className='card-box'>
                    <img src={contactIcon}/>
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile