import React from 'react'
import "../../assets/bootstrap.min.css"
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
    <div className='Footer'>
    <div className='Footer container'>
      <div className='Social_Media'>
        <div><FacebookIcon/></div>
        <div><YouTubeIcon/></div>
        <div><InstagramIcon/></div>
      </div>

      <div className='Footer_Lists row'>
      <div className='col-sm-6 col-md-3'>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relation</li>
          <li>Legal Notice</li>
          <li>Service Code</li>
          <li className='copy'>1997-2024 Netflix Inc &copy;</li>
        </ul>
      </div>

      <div className='col-sm-6 col-md-3'>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>

      <div className='col-sm-6 col-md-3'>
        <ul>
          <li>Gift Card</li>
          <li>Term Of Use</li>
          <li>Coporate Information</li>
        </ul>
      </div>

      <div className='col-sm-6 col-md-3'>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Conatact Us</li>
        </ul>
      </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Footer