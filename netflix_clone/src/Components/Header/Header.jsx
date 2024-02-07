import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

// 985417
// 263395

const Header = () => {
  return (
    <div>
        <div className='Header_wrapper'>
        <div className='Left_head'>
            <ul>
                <li className='logo'><img src={logo} alt="" /></li>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse By language</li>
            </ul>
        </div>

        <div className='Right_head'>
            <ul>
                <li><SearchIcon/></li>
                <li><NotificationsIcon/></li>
                <li><PersonIcon/></li>
            </ul>
        </div>

        </div>
    </div>
  )
}

export default Header