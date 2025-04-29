
import React, { useState } from 'react';
import NavBar from './NavBar';
import '../css/Homepage.css';

const descriptions = {
    'PROJECTS': {
        text: 'A collection of collaborative web applications and personal projects that I have developed.'
    },
    'ABOUT ME': {
        text: 'Who I am and where I come from.'
    },
    'RESUME': {
        text: 'A redirect to my current updated resume.'
    },
    'SKILLS': {
        text: 'Programming languages and skills I have learned and mastered.'
    },
    'TWITCH': {
        text: 'Watch live competitive gameplay from my twitch channel.'
    },
    'STREET FIGHTER': {
        text: "What's this?"
    }
};

function Homepage() {
    const [ description, setDescription ] = useState('Choose an option...');

    const handleMouseOver = (e) => {
        e.preventDefault();
        const category = e.target.innerText
        setDescription(descriptions[category].text)
    }

    return (
        <div className='home-main'>
            <NavBar 
                handleChange={handleMouseOver} 
            />
            <h1 className='my-name'>Hupaul Camacho</h1>
            <p className='my-description'>Full Stack Web Developer</p>
            <div className='description'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Homepage;