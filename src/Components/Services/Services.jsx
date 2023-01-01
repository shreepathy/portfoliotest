import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../Card/Card'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './resume.pdf'
import { motion } from 'framer-motion';

const Services = () => {
    const transition = { duration: 2, type:'spring'};
    return (
        <div className="services" id="Services">
            <div className="awesome">

                <span>My Awesome</span>
                <span>services</span>
                <span>FrontEnd Developer with high level of Experience
                    <br />
                    in Web designing and development
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className='blur s-blur1' 
                    style={{background:"#ABF1FF94"}}>
                </div>
            </div>
            <div className="cards">
                <motion.div
                    initial={{left:'35rem'}}
                    whileInView={{left:'24rem'}}
                    transition={transition}        
                >
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe Pre"}
                    />
                </motion.div>
                <motion.div
                    initial={{left:'0rem'}}
                    whileInView={{top:'12rem',left:'6rem'}}
                    transition={transition} 
                >
                    <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"Html, CSS, React, Javascript"}
                    />
                </motion.div>
                <motion.div
                    initial={{left:'36rem'}}
                    whileInView={{top:'19rem',left:'30rem'}}
                    transition={transition} 
                >
                    <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {"jhsfj jhds sdfh sdjfhds dsjfhsd hjd"}
                    />
                </motion.div>
                <div className='blur s-blur2' 
                    style={{background: "var(--purple)"}}>
                </div>
            </div>
        </div>

    )
}

export default Services