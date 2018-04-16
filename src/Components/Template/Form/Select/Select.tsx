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
    this.props.options.elements.forEach((element: any) => {
      selectArr.push(
        <option value={element.key}>{element.name}</option>
      );
    });

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