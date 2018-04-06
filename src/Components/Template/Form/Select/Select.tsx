import * as React from 'react';

interface SelectProps {
  options: any;
  name: string;
  default: string;
}

interface SelectState {
  value: string;
}

class Select extends React.Component<SelectProps, SelectState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: this.props.default || 'opt1'
    };
  }

  setVal(e: any) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    let selectArr: any = [];
    this.props.options.forEach((element: any) => {
      selectArr.push(
        <option value={element.key}>{element.name}</option>
      );
    });

    return (
      <div className='form__select'>
        <span>{this.props.name}</span>
        <select value={this.state.value} onChange={this.setVal.bind(this)}>
          {selectArr}
        </select>
      </div>
    );
  }
}

export default Select;