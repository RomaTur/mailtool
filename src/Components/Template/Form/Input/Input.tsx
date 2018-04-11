import * as React from 'react';

interface InputProps {
  changeFunc: any;
  options: any;
}
interface InputState {
  value: any;
}
class Input extends React.Component<InputProps, InputState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    };
  }
  setVal(e: any) {
    this.setState({
      value: e.target.value
    });
    this.props.changeFunc(this.props.options.key, e.target.value);
  }
  render() {
    return(
      <div className='form__input'>
        <span className='form__input-name'>{this.props.options.name}: </span>
        <input
          type={this.props.options}
          placeholder={this.props.options.placeholder || 'input'}
          value={this.props.options.value}
          className='form__input-input'
          onChange={this.setVal.bind(this)}
        />
      </div>
    );
  }
}

export default Input;