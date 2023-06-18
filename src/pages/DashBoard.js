import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/DashBoard.scss';
import logo from '../assets/chat icon.png';


const Dashboard = () => {
  return (
    <div className='dashboard__container'>
      <div className='dashboard__logosection'>
        {/* <div className='header'>HELLO <span>BUDDY</span></div> */}
        <img src={logo} alt='chat__logo' />
      </div>
      <div className='dashboard__loginsection'>
        <Link to="/login"><button className='login__button'>LOGIN</button></Link>
        <Link to="/signup"><button className='signup__button'>SIGNUP</button></Link>
      </div>
    </div>
  )
}

export default Dashboard