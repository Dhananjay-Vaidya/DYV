import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Counterfeit Medicine Detection',
    content: 'Our approach is to detect any faulty aspects for users receiving medicines from shops or online.We are using machine learning technology to detect fake medicines that user receives.',

  },
  {
    key: '2',
    title: 'Working together for a healthy future.',
    content: "Detecting such faulty products which can be very fatal for humans as well as animals if consumed is something we must all look into as this is a ver serious situation if not dealt with properly.",
  },
  {
    key: '3',
    title: 'Scanner',
    content: 'With power of Artificial Intelligence and Machine Learning we can now detect any faulty medicine delivered to us.This is easily done with help of our daily usage devices with just a scan.',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;