import React from 'react';
import '../../styles/SideIcons.css';
import AddIcon from '@mui/icons-material/Add';

const index = () => {
    return (
        <div className='sideIcons'>
            <div className="sideIcons__top">
                <a href="https://www.google.com/gemini" target="_blank" rel="noopener noreferrer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s" alt="Google Gemini" />
                </a>
                <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" alt="Google Calendar" />
                </a>
                <a href="https://www.google.com/tasks" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" alt="Google Tasks" />
                </a>
            </div>

            <hr />

            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>
        </div>
    );
}

export default index;