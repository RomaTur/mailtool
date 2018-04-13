import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Modal from 'react-modal';
import EmailPreview from './EmailPreview/EmailPreview';
import Form from './Form/Form';
import { TweenLite } from 'gsap';
// const pug = require('pug');
import './Template.css';
const arrow = require('./arrow.svg');
const avatarImg = require('./avatar.svg');
const subjectImg = require('./subject.svg');
import swal from 'sweetalert';
import * as _ from 'lodash';

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
  options: any;
}

interface TemplateState {
  params: any;
  modalIsOpen: boolean;
  show: boolean;
  inputs: any;
  previewHtml: string;
}

class Template extends React.Component<TemplateProps, TemplateState> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      params: this.props.location.state || {
          title: 'Empty title',
          desc: 'Empty desc',
          options: [],
          templateHtml: '/-email-/',
          logic: 'template1.ts'
      },
      previewHtml: '/-email-/',
      modalIsOpen: false,
      inputs: {
        email: ''
      }
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  private templ: HTMLDivElement;

  componentDidMount() {
    // анимация когда компонент примонтирован
    TweenLite.fromTo(this.templ, 0.4, { x: -10, opacity: '0' }, 
      { x: 0, opacity: '1', delay: 0.2 });
  }

  // рекурсия -- Добавление/удаление обьекта в массив
  changeEmpty(element: any, newTarget: any) {
    // если массив, то проходимся рекурсивно по всем элементам
    if (element.type === 'array') {
      let arrayPush: any = [];
      newTarget.forEach((e: any) => {
        if (element.key === e.oldTarget) {
          element.key = e.newTarget;
        }
      });
      element.elements.forEach((elem: any) => {
        const elemInside = this.changeEmpty(elem, newTarget) || null;
        arrayPush.push(
          elemInside
        );
      });
      element.elements = arrayPush; 
      return element; // возвращаем новый элемент
    }
    if (element.type === 'button') {
      newTarget.forEach((e: any) => {
        if (element.target === e.oldTarget) {
          element.target = e.newTarget;
        }
      });
    }
    element.key = `${Math.random()}`;
    element.value = '';
    
    return element; // возвращаем элемент
  }

  changeArr(target: string, action: string) {
    let tt = this.state.params;
    let tempArr: any = [];
    tt.options.forEach((element: any) => {
      element = this.arrReverse(element, target, action);
      tempArr.push(element);
    });
    tt.options = tempArr;
    this.setState({
      params: tt
    });
  }

  getNewTargetArr(element: any, oldArr: any) {
    if (element.type === 'array') {
      element.elements.forEach((elem: any) => {
        const newArr = this.getNewTargetArr(elem, oldArr);
        oldArr.concat(newArr);
      });
      return oldArr;
    }
    for (let anKey in element) {
      if (element[anKey]) {
        if (element.type === 'button') {
          oldArr.push({oldTarget: element.target, newTarget: ''});
          return oldArr;
        }
      }
    }
    return oldArr;
  }

  arrReverse(element: any, target: string, action: string) {
    if (element.type === 'array') {
      if (action === 'remove') {
        let index: any;
        for (let i = 0; i < element.elements.length; i++) {
          if (element.elements[i].key === target) {
            index = i;
            element.elements.splice(index, 1);
            return element;
          }
        }
      }
      if (element.key === target) {
        if (action === 'add') {
          let targetArr = this.getNewTargetArr(element.elements[0], []);
          targetArr.forEach((elem: any) => {
            elem.newTarget = `${Math.random()}`;
          });
          let newObj: any = JSON.parse(JSON.stringify(element.elements[0]));
          if (newObj.type === 'array' && newObj.remove === true) {
            newObj.elements.splice(0, 1);
            newObj.key = `${Math.random()}`;
            newObj.elements.unshift({
              type: 'button',
              name: 'Удалить',
              target: newObj.key,
              action: 'remove'
            });
          }
          newObj = this.changeEmpty(newObj, targetArr);
          element.elements.push(newObj);
        }
        return element;
      } else {
        let arrayPush: any = [];
        element.elements.forEach((elem: any) => {
          const elemInside = this.arrReverse(elem, target, action) || null;
          arrayPush.push(
            elemInside
          );
        });
        element.elements = arrayPush;
      }
      return element; // возвращаем блок с компонентами
    }
    return element; // возвращаем элемент
  }

  // функция, которая передается в каждый компонент формы и добавляет или меняет значение ключа !важно понять!
  setter(key: string, value: any) {
    let tt = this.state.params;
    let tempArr: any = [];
    tt.options.forEach((element: any) => {
      element = this.reverse(element, key, value);
      tempArr.push(element);
    });
    tt.options = tempArr;
    this.setState({
      params: tt
    });
  }

  // рекурсия
  reverse(element: any, key: string, value: string) {
    let param: any;
    // если массив, то проходимся рекурсивно по всем элементам
    if (element.type === 'array') {
      let arrayPush: any = [];
      element.elements.forEach((elem: any) => {
        const elemInside: any = this.reverse(elem, key, value) || null;
        arrayPush.push(
          elemInside
        );
      });
      element.elements = arrayPush; 
      return element; // возвращаем новый элемент
    }
    // если обьект, то проходимся по нему
    for (param in element) {
      if (element.key === key) {
        element.value = value;
      }
    }
    return element; // возвращаем элемент
  }

  sumPrice(elem: any, findElem: string) {
    let total = 0;
      elem.forEach((element: any) => {
        if (element.elem === findElem) {
          let subTotal = 0;
          element.elements.forEach((elem: any) => {
            elem.elements.forEach((elem: any) => {
              if (elem.elem === 'price') {
                subTotal = elem.value;
              }
              if (elem.elem === 'count') {
                subTotal = subTotal * elem.value;
              }
            });
          });
          total += subTotal;
        }
      });
      return total;
  }

  renderHtml() {
    let totalPrice = this.sumPrice(this.state.params.options, 'products');
    const compiledTemplate: string = _.template(this.state.params.templateHtml)({
      options: this.state.params.options,
      totalPrice: totalPrice
    });
    return compiledTemplate;
  }

  openModal() {
    this.state.params.options.forEach((element: any) => {
      if (element.key === 'subject') {
        this.setState({
          inputs: Object.assign(this.state.inputs, {
              [ element.key ]: element.value || 'Тема'
          })
        });
      }
      if (element.key === 'client') {
        this.setState({
          inputs: Object.assign(this.state.inputs, {
              [ element.key ]: element.value || 'null'
          })
        });
      }
      if (element.key === 'email') {
        this.setState({
          inputs: Object.assign(this.state.inputs, {
              [ element.key ]: element.value || 'email@email.net'
          })
        });
      }
    });
    const finalHtml: any = this.renderHtml();
    this.setState({
      previewHtml: finalHtml
    });
    if (this.state.previewHtml !== '') {
      this.setState({modalIsOpen: true});
    }
  }
 
  afterOpenModal() {
    console.log('');
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  checkEmptyInput(element: any) {
    if (element) {
      if (element.type === 'array') {
        element.elements.forEach((elem: any) => {
          this.checkEmptyInput(elem);
        });
      } else {
        for (const key in element) {
          if (element.hasOwnProperty(key)) {
            if (element.elem === 'client' || element.elem === 'email' || element.elem === 'subject') {
            if (key === 'value') {
            const elem = element[key];
              if (elem === '' || elem === ' ') {
                swal({
                  title: 'Не заполнены основные поля',
                  icon: 'warning',
                  timer: 2000
                });
                return false;
              }
            }
          }
          }
        }
      }
    }
    return true;
  }

  sendEmail(e: any) {
    e.preventDefault();
    let url = '';
    if (window.location.hostname === 'localhost') {
      url = 'http://localhost:3004';
    }
    let isFilledInputs = true;
    this.state.params.options.forEach((element: any) => {
      if (isFilledInputs) {
        isFilledInputs = this.checkEmptyInput(element);
        console.log(isFilledInputs);
      }
    });
    if (isFilledInputs) {
      this.state.params.options.forEach((element: any) => {
        if (element.key === 'subject') {
          this.setState({
            inputs: Object.assign(this.state.inputs, {
                [ element.key ]: element.value || 'Тема'
            })
          });
        }
        if (element.key === 'client') {
          this.setState({
            inputs: Object.assign(this.state.inputs, {
                [ element.key ]: element.value || 'null'
            })
          });
        }
        if (element.key === 'email') {
          this.setState({
            inputs: Object.assign(this.state.inputs, {
                [ element.key ]: element.value || 'email@email.net'
            })
          });
        }
      });
      const finalHtml = this.renderHtml();
      this.setState({
        previewHtml: finalHtml
      });
      const sendingObj = {
        to: this.state.inputs.email,
        subject: this.state.inputs.subject,
        html: finalHtml
      };
      fetch(`${url}/maildata`,
      {
          method: 'POST',
          body: JSON.stringify(sendingObj),
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
      }).then((res: any) => {
        if (res.status === 200) {
          swal({
            title: 'Успешно отправлено!',
            icon: 'success',
            timer: 2000
          });
        } else {
          swal({
            title: 'Произошла ошибка!',
            icon: 'error',
            timer: 2000
          });
        }
      }).catch(() => {
        swal({
          title: 'Произошла ошибка!',
          icon: 'error',
          timer: 2000
        });
      });
    }
  }

  render() {
    return (
      <div className='template'>
        <Link to='./templates' className='template__back'>
          <img src={arrow} className='template__back-arrow'/>
          <span className='template__back-text'>Назад</span>
        </Link>
        <form
            className='template__wrapper'
            onSubmit={this.sendEmail.bind(this)}
            ref={(templ: any) => {this.templ = templ; }}
        >
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
                  <h3 className='template__preview-value'>{this.state.inputs.email}, {this.state.inputs.client}</h3>
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
            <Form
              options={this.state.params.options}
              changeFunc={this.setter.bind(this)}
              clickAction={this.changeArr.bind(this)}
            />
          </div>
          <input type='submit' value='Отправить' className='form__button-submit'/>
          {/* {this.state.previewHtml} */}
        </form>
      </div>
    );
  }
}

export default Template;
