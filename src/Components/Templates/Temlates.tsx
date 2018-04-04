import * as React from 'react';
import { Link } from 'react-router-dom';
import './Templates.css';

import TemplatePreview from './TemplatePreview/TemplatePreview';
const arrow = require('./arrow.svg');
const templates = require('../../templates.json');

let templateDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
templateDesc = templateDesc + 'Suspendisse id libero non felis ullamcorper efficitur a at massa.';

interface TemplatesState {
  templates: any;
}

class Templates extends React.Component<{}, TemplatesState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      templates: []
    };
  }

  componentDidMount() {
    this.setState({
      templates: templates.templates
    });
  }

  render() {

    const templatesPreviewArr = [];

    for (let i = 0; i < this.state.templates.length; i++) {
      templatesPreviewArr.push(
        <TemplatePreview
          key={i}
          title={this.state.templates[i].title}
          desc={this.state.templates[i].description}
          inputs={this.state.templates[i].inputs}
          templateHtml={this.state.templates[i].templateHtml}
        />);
    }

    return (
      <div className='templates'>
        <Link to='./' className='templates__back'>
          <img src={arrow} className='templates__back-arrow'/>
          <span className='templates__back-text'>Назад</span>
        </Link>
        {templatesPreviewArr}
      </div>
    );
  }
}

export default Templates;