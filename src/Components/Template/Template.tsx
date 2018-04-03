import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Modal from 'react-modal';
import EmailPreview from './EmailPreview/EmailPreview';
import './Template.css';
const arrow = require('./arrow.svg');

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
  templateHtml: string;
  modalIsOpen: boolean;
  inputs: any;
}

class Template extends React.Component<TemplateProps, TemplateState> {
  constructor(props: any) {
    super(props);
    this.state = {
      params: this.props.location.state || {
          title: 'Empty title',
          desc: 'Empty desc',
          inputs: []
      },
      templateHtml: `<div>templateHtml</div>`,
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
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    console.log('modal opened');
    console.log(document.getElementById('modal__email'));
    // document.getElementById('modal__email').innerHTML = this.state.templateHtml || '';
    const modalWrapper = document.getElementById('modal__email') || {innerHTML: ''};
    console.log(modalWrapper);
    modalWrapper.innerHTML = this.state.templateHtml;
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
  }

  render() {
    const propInputs = [];
    console.log(this.state.params.inputs);
    if (this.state.params.inputs.length !== 0) {
      for (let i = 0; i < this.state.params.inputs.length; i++) {
        propInputs.push(
          <input
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
            <div className='template__preview-btn' onClick={this.openModal}>
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
              <h2>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div id='modal__email'>I am a modal</div>
              <EmailPreview
                name={this.state.inputs.name}
              />
            </Modal>
            <form className='template__form'>
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
