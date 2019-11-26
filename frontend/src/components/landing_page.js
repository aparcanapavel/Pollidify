import React from 'react';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

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