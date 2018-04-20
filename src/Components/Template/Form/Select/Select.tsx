import * as React from 'react';

interface SelectProps {
  options: any;
  changeFunc: any;
}

interface SelectState {
  value: string;
}

class Select extends React.Component<SelectProps, SelectState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    this.props.changeFunc(this.props.options.key, this.props.options.elements[0].key, this.props.options.target);
  }

  setVal(e: any) {
    this.setState({
      value: e.target.value
    });
    this.props.changeFunc(this.props.options.key, e.target.value, this.props.options.target);
  }

  render() {
    let selectArr: any = [];
    let object = this.props.options.elements;
    if (object instanceof Array) {
      this.props.options.elements.forEach((element: any) => {
        selectArr.push(
          <option value={element.key}>{(element.name_new) ? element.name_new : element.name}</option>
        );
      });
    } else {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        let optGroupArr: any = [];
        element.forEach((e: any) => {
          optGroupArr.push(
            <option value={e.code}>{e.name}</option>
          );
        });
        selectArr.push(
          <optgroup label={key}>{optGroupArr}</optgroup>
        );
      }
    }
    }
    return (
      <div className='form__select'>
        <span className='form__select-name'>{this.props.options.name}: </span>
        <select className='form__select-input' value={this.props.options.value} onChange={this.setVal.bind(this)}>
          {selectArr}
        </select>
      </div>
    );
  }
}

export default Select;