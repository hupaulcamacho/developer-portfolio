import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'

import fgcsocial from '../assets/fgc_social.png';
import fgcsocialV from '../assets/fgc_social.mov';
import handmedown from '../assets/handmedown.png';
import handmedownV from '../assets/handmedown720.mov';

import watchlist from '../assets/watchlist.png';
import watchlistV from '../assets/watchlist720.mov';

import remotetheater from '../assets/remotetheater.png';
import remotetheaterV from '../assets/remotetheater720.mov';

// character images
import ryu from '../assets/ryu_char_select.png';
import ken from '../assets/ken_char_select.png';
import bison from '../assets/bison_char_select.png';

import viper from '../assets/viper_char_select.png';
import guy from '../assets/guy_char_select.png';
import rose from '../assets/rose_char_select.png';


import '../css/Projects.css'

const projects = {
    'FGC Social': {
        title: 'FGC Social',
        character: viper,
        description: 'A social media platform for the fighting game community. Users can post, comment, and like posts. Users can also create and join groups to find other players in their area.',
        imgUrl: fgcsocial,
        videoURL: fgcsocialV,
        repo: 'https://github.com/hupaulcamacho/fgc-social',
        live: 'https://fgc-social.vercel.app/'
    },
    'Hand Me Down': {
        title: 'Hand Me Down',
        character: ryu,
        description: 'A social media engagement project to promote sustainablity in the fashion industry. Utilizes QR codes to allow users to save stories of their memories made while wearing a piece of clothing, before handing that clothing down to someone else or donating it. ',
        imgUrl: handmedown,
        videoURL: handmedownV,
        repo: 'https://github.com/hupaulcamacho/HandMeDown',
        live: ''
    },
    // 'Watchlist': {
    //     title: 'Watchlist',
    //     character: ken,
    //     description: 'A web app where users can post, comment on, and favorite TV shows that they are binging on.',
    //     imgUrl: watchlist,
    //     videoURL: watchlistV,
    //     repo: '',
    //     live: ''
    // },
    'Remote Theater': {
        title: 'Remote Theater',
        character: rose,
        description: 'This application allows users to watch movies as if they were in a real movie theater. Interact with other users live as the movie is playing, as well as setting preferences',
        imgUrl: remotetheater,
        videoURL: remotetheaterV,
        repo: 'https://github.com/hupaulcamacho/remote-theater',
        live: ''
    }
}


class Projects extends Component {
    state = {
        project: projects['FGC Social'],
    }

    handleClick = (e) => {
        e.preventDefault()
        const imageName = e.target.dataset.name

        this.setState({
            project: projects[imageName]
        })
    }

    renderImg = () => {
        const { project } = this.state
        return <img key={project.character} className='char-portrait' src={project.character} />
    }

    render() {
        const { project } = this.state
        const isLoading = this.props.isLoading
        console.log(isLoading)
        return (
            
            <div className='project-main'>
                {isLoading
                ?
                <div className='spinner-div'>
                    <span class='spinner'></span>
                </div>
                :
                <>
                    <h1 className='projects-select'>{project.title}</h1>
                    <h1 className='project-title'>Select a Project</h1>
                    {this.renderImg()}
                    <div className='project-container'>
                        <img
                            onClick={this.handleClick}
                            className='character'
                            src={projects['FGC Social'].imgUrl}
                            data-name={projects['FGC Social'].title}
                        />
                        <img
                            onClick={this.handleClick}
                            className='character'
                            src={projects['Hand Me Down'].imgUrl}
                            data-name={projects['Hand Me Down'].title}
                        />
                        {/* <img
                            onClick={this.handleClick}
                            className='character'
                            src={projects['Watchlist'].imgUrl}
                            data-name={projects['Watchlist'].title}
                        /> */}
                        <img
                            onClick={this.handleClick}
                            className='character'
                            src={projects['Remote Theater'].imgUrl}
                            data-name={projects['Remote Theater'].title}
                        />

                    </div>
                    <div className='back-home-projects'>
                        <Link to='/'>Back to Home</Link>
                    </div>

                    <div className='project-video'>
                        <ReactPlayer key={project.title} className='video-preview' url={project.videoURL} playing />
                        <div className='caption'>
                            {project.description}
                            <div>
                                <a href={project.repo} target="_blank">
                                    <button className='repo'>Repo</button>
                                </a>
                                <a href={project.live} target="_blank">
                                    <button className='live'>Live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
                }
                
            </div>
        )
    }
}

export default Projects
