import * as React from 'react';
import './TemplatePreview.css';
const emailImg = require('./emailImg.jpg');

class TemplatePreview extends React.Component {
  render() {
    return (
      <div className='template__preview'>
        <img src={emailImg} alt='preview' className='template__preview-img' />
        <div className='template__preview-text'>
          <h3 className='template__preview-title'>
            Title of Template
          </h3>
          <p className='template__preview-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse id libero non felis ullamcorper efficitur a at massa.
          </p>
        </div>
      </div>
    );
  }
}

export default TemplatePreview;