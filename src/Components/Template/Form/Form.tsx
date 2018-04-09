import * as React from 'react';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import Select from './Select/Select';
import Button from './Button/Button';
import './Form.css';

interface FormProps {
  options: any;
  changeFunc: any;
  clickAction: any;
}

class Form extends React.Component<FormProps, {}> {

  // пробрасывает все значения в родитель
  // setter(key: string, value: any) {
  //   this.props.changeFunc(key, value);
  // }

  // рекурсия
  reverse(element: any) {
    let param: any;
    // если массив, то проходимся рекурсивно по всем элементам
    if (element.type === 'array') {
      let arrayPush: any = [];
      element.elements.forEach((elem: any) => {
        const elemInside: any = this.reverse(elem) || null;
        arrayPush.push(
          elemInside
        );
      });
      const arrayReturn = <div className='form__array'>{arrayPush}</div>; 
      return arrayReturn; // возвращаем блок с компонентами
    }
    // если обьект, то рендерим компонент с его параметрами
    for (param in element) {
      if (element[param]) {
        if (element[param] === 'input') {
          let inputReturn = <Input options={element} key={element.key} changeFunc={this.props.changeFunc.bind(this)}/>;
          return inputReturn; // возвращаем компонент
        }
        if (element[param] === 'textarea') {
          let textArea = <TextArea options={element} key={element.key} changeFunc={this.props.changeFunc.bind(this)}/>;
          return textArea; // возвращаем компонент
        }
        if (element[param] === 'select') {
          let select = <Select options={element} key={element.key} changeFunc={this.props.changeFunc.bind(this)}/>;
          return select; // возвращаем компонент
        }
        if (element[param] === 'button') {
          let button = <Button options={element} key={element.key} clickAction={this.props.clickAction.bind(this)} />;
          return button; // возвращаем компонент
        }
      }
    }
    return null; // в ином случае беда
  }

  render() {
    let markDown: any = [];

    // первый рекурсивный проход по массиву из переданных параметров
    this.props.options.forEach((element: any) => {
      const elemInside: any = this.reverse(element) || null;
      markDown.push(
        elemInside
      );
    });

    return (
      <form className='form'>
        {markDown}
      </form>
    );
  }
}

export default Form;