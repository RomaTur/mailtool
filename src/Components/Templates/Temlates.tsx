import * as React from 'react';
import { Link } from 'react-router-dom';
import './Templates.css';
import swal from 'sweetalert';

import TemplatePreview from './TemplatePreview/TemplatePreview';
const arrow = require('./arrow.svg');

// импорт только для разработки, необходимо будет подгружать с сервера
// const templates = require('../../templates.json');

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
    // здесь нужно будет подгружать с сервера json
    // this.setState({
    //   templates: templates.templates
    // });
    // const templates = require('../../templates.json');
    if (window.location.host === 'localhost:3000') {
      fetch('http://localhost:3001/templates')
                    .then((response: any) => {
                      return response.json();
                    }).then((data: any) => {
                      this.setState({
                        templates: data.templates
                      });
                      return data;
                    }).catch(() => {
                      alert('Не подгрузились данные');
                    });
    } else {
      fetch('/templates')
        .then((response: any) => {
          return response.json();
        }).then((data: any) => {
          this.setState({
            templates: data.templates
          });
          return data;
        }).catch(() => {
          swal({
            title: 'Успешно отправлено!',
            icon: 'success',
            timer: 2000
          });
        });
    }
    
  }

  render() {

    let templatesPreviewArr: any = [];

    for (let i = 0; i < this.state.templates.length; i++) {
      templatesPreviewArr.push(
        <TemplatePreview
          key={i}
          duration={i}
          title={this.state.templates[i].title}
          desc={this.state.templates[i].description}
          options={this.state.templates[i].options}
          logic={this.state.templates[i].logic}
          templateHtml={this.state.templates[i].templateHtml}
        />);
    }
    if (templatesPreviewArr === []) {
      templatesPreviewArr = <div className='template__preview-link'>Не подгрузились шаблоны</div>;
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