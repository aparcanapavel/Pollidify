import React from 'react';
import './landing_page.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <main className='landing-main' id='landing-main'>
          <div className='landing-main-div'>
            <h1>This is where we'd have our about page and stuff.</h1>
          </div>
        </main>
      </div>
    );
  }
}

export default LandingPage;