import * as React from 'react';
import { Link } from 'react-router-dom';
import TemplatePreview from './TemplatePreview/TemplatePreview';
const arrow = require('./arrow.svg');
import './Templates.css';

let templateDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
templateDesc = templateDesc + 'Suspendisse id libero non felis ullamcorper efficitur a at massa.';

interface TemplatesState {
  templates: any;
}

class Templates extends React.Component<{}, TemplatesState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      templates: [
        {
          key: 'template1',
          title: 'Title of template1',
          description: templateDesc,
          inputs: [
            {
              type: 'email',
              placeholder: 'Email',
              key: 'email'
            }
          ]
        },
        {
          key: 'template2',
          title: 'Title of template2',
          description: templateDesc,
          inputs: [
            {
              type: 'text',
              placeholder: 'Имя',
              key: 'name'
            },
            {
              type: 'text',
              placeholder: 'Описание',
              key: 'desc'
            },
            {
              type: 'email',
              placeholder: 'Email',
              key: 'email'
            }
          ]
        },
        {
          key: 'template3',
          title: 'Title of template3',
          description: templateDesc,
          inputs: [
            {
              type: 'text',
              placeholder: 'Имя',
              key: 'name'
            },
            {
              type: 'text',
              placeholder: 'Описание',
              key: 'desc'
            },
            {
              type: 'text',
              placeholder: 'Ключевые слова',
              key: 'keywords'
            },
            {
              type: 'email',
              placeholder: 'Email',
              key: 'email'
            }
          ]
        }
      ]
    };
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