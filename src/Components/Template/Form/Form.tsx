import * as React from 'react';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import Select from './Select/Select';
import './Form.css';

interface FormProps {
  options: any;
  changeFunc: any;
}

interface FormState {
  // obj: any;
}

class Form extends React.Component<FormProps, FormState> {

  constructor(props: any) {
    super(props);
    // this.state = {
    //   obj: {}
    // };
  }

  setter(key: string, value: any) {
    this.props.changeFunc(key, value);
  }

  submitForm(e: any) {
    e.preventDefault();
  }

  reverse(element: any) {
    let param: any;
    if (element.type === 'array') {
      let arrayPush: any = [];
      element.elements.forEach((elem: any) => {
        const elemInside: any = this.reverse(elem) || null;
        arrayPush.push(
          elemInside
        );
      });
      const arrayReturn = <div className='form__array'>{arrayPush}</div>; 
      return arrayReturn;
    }
    for (param in element) {
      if (element[param]) {
        if (element[param] === 'input') {
          let inputReturn = <Input options={element} key={element.key} changeFunc={this.setter.bind(this)}/>;
          return inputReturn;
        }
        if (element[param] === 'textarea') {
          let textArea = <TextArea options={element} key={element.key} changeFunc={this.setter.bind(this)}/>;
          return textArea;
        }
        if (element[param] === 'select') {
          let select = <Select options={element} changeFunc={this.setter.bind(this)}/>;
          return select;
        }
      }
    }
    return null;
  }

  render() {
    let markDown: any = [];
    this.props.options.forEach((element: any) => {
      const elemInside: any = this.reverse(element) || null;
      markDown.push(
        elemInside
      );
    });

    return (
      <form className='form' onSubmit={this.submitForm.bind(this)}>
        {markDown}
      </form>
    );
  }
}

export default Form;