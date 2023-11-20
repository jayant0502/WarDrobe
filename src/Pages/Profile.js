import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import "../Styles/Profile.css"
import { useParams } from 'react-router'
import UserSidebar from '../components/UserProfile/UserSidebar'
import AccountSetting from '../components/UserProfile/AccountSetting'
import MyOrders from '../components/UserProfile/MyOrders'
import Addresses from '../components/UserProfile/Addresses'

const Profile = () => {

  const {activePage}=useParams()

  return (
    <div className='userProfile-container'>
      <Navbar secondaryNav={true}></Navbar>
      <section className=" profile-bg-img">
          <div className="bg-overlay bg-over"></div>
          <div className="title">
            <h1>My Account</h1>
        </div>
        
       </section>
       <section className='userProfile'>

       <div className="user-left">

        <UserSidebar activePage={activePage}></UserSidebar>
       </div>
       <div className="user-right">

       {
        activePage ==="accountsettings" &&   <AccountSetting></AccountSetting>
       }
       {
        activePage ==="myorders" &&   <MyOrders></MyOrders>
       }
       {
        activePage ==="addresses" &&   <Addresses></Addresses>
       }
       </div>

       </section>
      <Footer></Footer>
    </div>
  )
}

export default Profile
