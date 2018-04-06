import * as React from 'react';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import Select from './Select/Select';
import './Form.css';

interface FormProps {
  options: any;
}

interface FormState {
  input: string;
}

class Form extends React.Component<FormProps, FormState> {

  constructor(props: any) {
    super(props);
    this.state = {
      input: ''
    };
  }

  submitForm(e: any) {
    e.preventDefault();
  }
  reverse(element: any) {
    let param: any;
    console.log(element);
    if (element.type === 'array') {
      console.log(element.type);
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
          let inputReturn = <Input name={element.name}/>;
          return inputReturn;
        }
        if (element[param] === 'textarea') {
          let textArea = <TextArea name={element.name}/>;
          return textArea;
        }
        if (element[param] === 'select') {
          let select = <Select name={element.name} options={element.elements} default={element.default}/>;
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
        {/* <select>
           <option disabled>Выберите героя</option>
           <option value='Чебурашка'>Чебурашка</option>
           <option selected value='Крокодил Гена'>Крокодил Гена</option>
           <option value='Шапокляк'>Шапокляк</option>
           <option value='Крыса Лариса'>Крыса Лариса</option>
        </select> */}
      </form>
    );
  }
}

export default Form;