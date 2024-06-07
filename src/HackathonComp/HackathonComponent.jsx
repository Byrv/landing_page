import React from 'react';
import './HackathonComponent.css';

const HackathonComponent = () => {
  return (
    <div className="hackathon-wrapper">
      <div className="hackathon-container">
        <div className="hackathon-content">
          <h1>VTION ANDROID HACKATHON</h1>
          <p>
            Join OTTHack, where elite builders capture, analyze, and scale insights from millions of Android TVs.
          </p>
          <ul>
            <li>📺 Your Code, Running on Millions of TVs</li>
            <li>💰 Build for ₹2.5 Lakhs in Prizes</li>
            <li>🏆 Exclusive job offers for Top Participants</li>
          </ul>
        </div>
        <div className="hackathon-image">
          <img src="path-to-your-image" alt="VTION ANDROID HACKATHON" />
        </div>
      </div>
      <div className="register-now">
        <a href="#register">Register Now</a>
      </div>
      <div className="countdown">
        <div className="countdown-box">
          <div>04</div>
          <div>DAYS</div>
        </div>
        <div className="countdown-box">
          <div>19</div>
          <div>HOURS</div>
        </div>
        <div className="countdown-box">
          <div>32</div>
          <div>MINUTES</div>
        </div>
      </div>
    </div>
  );
}

export default HackathonComponent;
