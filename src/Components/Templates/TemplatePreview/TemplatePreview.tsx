import * as React from 'react';
import { Link } from 'react-router-dom';
const TweenLite = require('gsap');

import './TemplatePreview.css';
const emailImg = require('./emailImg.jpg');

interface TemplateProps {
  title: string;
  desc: string;
  options: any;
  templateHtml: string;
  duration: number;
  logic: string;
  dbUrl: any;
}

class TemplatePreview extends React.Component<TemplateProps, {}> {
  
  private templ: HTMLDivElement;

  componentDidMount() {
    // анимация при создании компонента
    TweenLite.fromTo(this.templ, 0.4, { x: -10, opacity: '0' }, 
      { x: 0, opacity: '1', delay: this.props.duration / 9 });
  }

  render() {
    // параметры, которые передаются в роутер через ссылку
    const linkParams = {
      pathname: './template',
      state: {
        title: this.props.title, // название шаблона
        desc: this.props.desc, // краткое описание шаблона
        options: this.props.options || [{type: 'input'}], // все параметры шаблона
        templateHtml: this.props.templateHtml || 'Sorry', // разметка шаблона для отправки письма
        logic: this.props.logic || 'template1.ts',
        dbUrl: this.props.dbUrl || {}
      }
    };
    return (
      <Link to={linkParams} className='template__preview-link'>
        <div className='template__preview' ref={(templ: any) => { this.templ = templ; }}>
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