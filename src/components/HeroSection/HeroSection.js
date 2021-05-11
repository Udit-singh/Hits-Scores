import React from 'react';
import '../../App.css';
import { Button } from "react-bootstrap"
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://media.istockphoto.com/videos/cricket-batsman-on-the-stadium-video-id677740658' autoPlay loop muted />
      <p>ADVENTURE AWAITS</p>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button variant="dark">
        Rankings
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--pri'
          buttonSize='btn--lar'
          onClick={console.log('hey')}
        >
          Live Scores <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
