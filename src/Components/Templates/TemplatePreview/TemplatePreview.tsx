import * as React from 'react';
import './TemplatePreview.css';
const emailImg = require('./emailImg.jpg');

interface TemplateProps {
  title: string;
  desc: string;
}

class TemplatePreview extends React.Component<TemplateProps, {}> {
  render() {
    return (
      <div className='template__preview'>
        <img src={emailImg} alt='preview' className='template__preview-img' />
        <div className='template__preview-text'>
          <h3 className='template__preview-title'>
            {this.props.title}
          </h3>
          <p className='template__preview-description'>
            {this.props.desc}
          </p>
        </div>
      </div>
    );
  }
}

export default TemplatePreview;