import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className='main-nav'>
                    <Link value='projects' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/projects'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='projects'>
                            PROJECTS
                        </div>
                    </Link>
                    <a href='https://docs.google.com/document/d/1Em9Gtufu-p6gn61pYoun2LAQeLJ6In7Y2sIOJXlySt8/edit?usp=sharing' target="_blank" value='resume' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription}>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='about' >
                            RESUME
                        </div>
                    </a>
                    {/* <Link value='twitch' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/twitch'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='twitch'>
                            TWITCH
                        </div>
                    </Link> */}
                    {/* <Link value='about' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/about'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='about' >
                            ABOUT ME
                        </div>
                    </Link>
                    <Link value='skills' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/skills'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='skills' >
                            SKILLS
                        </div>
                    </Link> */}
                    {/* <Link value='street-fighter' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/StreetFighter'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='street-fighter' >
                            STREET FIGHTER?
                        </div>
                    </Link> */}
                </nav>
            </div>
        )
    }
}

export default NavBar