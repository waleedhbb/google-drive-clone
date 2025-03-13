import React from 'react';
import GDriveLogo from '../../media/googledrivelogo.png';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import '../../styles/Header.css';

const Header = ({ userPhoto }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={GDriveLogo} alt="Google Drive Logo" />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img 
          src={userPhoto || 'default-photo.png'} 
          alt="User" 
          className="header__userPhoto"
        />
      </div>
    </div>
  );
};

export default Header;
