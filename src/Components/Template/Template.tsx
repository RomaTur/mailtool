import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Modal from 'react-modal';
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
          desc: 'Empty desc'
      },
      templateHtml: '<div>templateHtml</div>',
      modalIsOpen: false,
      inputs: {
        name: '',
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
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  changeInput(e: any) {
    const attr = e.target.attributes.getNamedItem('data-key').value;
    const attrVal = e.target.value;
    this.setState({
      inputs: Object.assign(this.state.inputs, {
          [ attr ]: attrVal
        })
    });
  }

  render() {

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
                contentLabel='Example Modal'
                style={modalStyles}
            >
              <h2>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
            </Modal>
            <form className='template__form'>
              <input
                type='text'
                data-key='name'
                className='form__input'
                placeholder='Имя'
                required
                onChange={this.changeInput}
              />
              <input
                type='email'
                data-key='email'
                className='form__input'
                placeholder='Email'
                required
                onChange={this.changeInput}
              />
              <input type='submit' className='form__input' value='Отправить'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
