import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppWorks from '../components/home/works';
import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppWorks/>
      <AppContact/>
    </div>
  );
}

export default AppHome;