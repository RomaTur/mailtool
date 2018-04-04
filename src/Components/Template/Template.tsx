import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Modal from 'react-modal';
import EmailPreview from './EmailPreview/EmailPreview';
import './Template.css';
const arrow = require('./arrow.svg');
const avatarImg = require('./avatar.svg');
const subjectImg = require('./subject.svg');

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

interface TemplateProps {
  location: any;
  inputs: any;
}

interface TemplateState {
  params: any;
  modalIsOpen: boolean;
  inputs: any;
  previewHtml: string;
}

class Template extends React.Component<TemplateProps, TemplateState> {
  constructor(props: any) {
    super(props);
    this.state = {
      params: this.props.location.state || {
          title: 'Empty title',
          desc: 'Empty desc',
          inputs: [],
          templateHtml: '/-email-/'
      },
      previewHtml: '',
      modalIsOpen: false,
      inputs: {
        email: ''
      }
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  openModal() {
    if (this.state.previewHtml !== '') {
      this.setState({modalIsOpen: true});
    }
  }
 
  afterOpenModal() {
    console.log('modal opened');
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  changeInput(e: any) {
    const attr = e.target.attributes.getNamedItem('data-key').value || 'null';
    const attrVal = e.target.value || 'null';
    this.setState({
      inputs: Object.assign(this.state.inputs, {
          [ attr ]: attrVal
      })
    });
    this.changePreviewHtml();
  }

  changePreviewHtml() {
    let previewHtml = this.state.params.templateHtml;
    for (let key in this.state.inputs) {
      if (this.state.inputs[key] !== '') {
        previewHtml = previewHtml.replace(new RegExp(`/-${key}-/`, 'g'), this.state.inputs[key]);
      }
    }
    this.setState({
      previewHtml: previewHtml
    });
  }

  sendEmail(e: any) {
    e.preventDefault();
    // if (this.state.inputs.email === '') {
    //   return '';
    // }
    const sendingObj = {
      to: this.state.inputs.email,
      subject: this.state.inputs.subject,
      html: this.state.previewHtml
    };

    // var data = new FormData();
    // data.append( 'json', JSON.stringify(sendingObj) );
    // console.log(data);
    fetch('/maildata',
    {
        method: 'POST',
        body: JSON.stringify(sendingObj),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then(function(res: any) {
      return res.json();
    });
  }

  render() {
    const propInputs = [];
    if (this.state.params.inputs.length !== 0) {
      for (let i = 0; i < this.state.params.inputs.length; i++) {
        propInputs.push(
          <input
            key={i}
            type={this.state.params.inputs[i].type}
            data-key={this.state.params.inputs[i].key}
            className='form__input'
            placeholder={this.state.params.inputs[i].placeholder}
            required
            onChange={this.changeInput}
          />
        );
      }
    }

    return (
      <div className='template'>
        <Link to='./templates' className='template__back'>
          <img src={arrow} className='template__back-arrow'/>
          <span className='template__back-text'>Назад</span>
        </Link>
        <div className='template__wrapper'>
          <h3 className='template__title'>{this.state.params.title}</h3>
          <div className='template__content'>
            <div className='template__preview-open' onClick={this.openModal}>
              <div className='template__preview-block template__preview-block--one'/>
              <div className='template__preview-block template__preview-block--two'/>
              <div className='template__preview-block template__preview-block--three'/>
              <div className='template__preview-block template__preview-block--four'/>
            </div>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel='Email modal'
                style={modalStyles}
            > 
              <div className='template__preview-header'>
                <div className='template__preview-person'>
                  <img src={avatarImg} alt='user' className='template__preview-icon'/>
                  <h3 className='template__preview-value'>{this.state.inputs.email}</h3>
                </div>
                <div className='template__preview-border'/>
                <div className='template__preview-subject'>
                  <img src={subjectImg} alt='subject' className='template__preview-icon'/>
                  <h3 className='template__preview-value'>{this.state.inputs.subject}</h3>
                </div>
              </div>
              <EmailPreview
                html={this.state.previewHtml}
              />
              <button onClick={this.closeModal} className='template__preview-close'>Закрыть</button>
            </Modal>
            <form className='template__form' onSubmit={this.sendEmail.bind(this)}>
              {propInputs}
              <input type='submit' className='form__input form__input--submit' value='Отправить'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
