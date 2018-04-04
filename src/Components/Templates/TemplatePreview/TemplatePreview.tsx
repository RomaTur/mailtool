import * as React from 'react';
import { Link } from 'react-router-dom';
import './TemplatePreview.css';
const emailImg = require('./emailImg.jpg');

interface TemplateProps {
  title: string;
  desc: string;
  inputs: any;
  templateHtml: string;
}

class TemplatePreview extends React.Component<TemplateProps, {}> {
  render() {
    const linkParams = {
      pathname: './template',
      state: {
        title: this.props.title,
        desc: this.props.desc,
        inputs: this.props.inputs || ['email'],
        templateHtml: this.props.templateHtml || 'Sorry'
      }
    };
    return (
      <Link to={linkParams} className='template__preview-link'>
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
      </Link>
    );
  }
}

export default TemplatePreview;