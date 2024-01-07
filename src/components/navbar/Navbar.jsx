import React from 'react';
import Searchbar from '../searchbar/Searchbar.jsx';
import im from '../../assets/im.png';
import './navbar.scss';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useAuth } from '../../utils/AuthContext.jsx';

export default function Navbar() {
  const { user } = useAuth();
  const currentDate = new Date();

  // Format the date as "Tue 2 Jan 2024"
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="navbar">
      <div className="logo">
        <img src={im} alt="Missing" />
      </div>
      <div className="welcome-text">Welcome back, {user.fullName}</div>
      <div className="search-bar">
        <Searchbar />
      </div>
      <div className="date">
        <div className="icon">
          <CalendarTodayOutlinedIcon />
        </div>
        <div className="date-text">{formattedDate}</div>
      </div>
    </div>
  );
}
