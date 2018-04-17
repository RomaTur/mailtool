import * as React from 'react';

interface CheckProps {
  changeFunc: any;
  options: any;
}
interface CheckState {
  value: any;
}
class Check extends React.Component<CheckProps, CheckState> {
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
    this.props.changeFunc(this.props.options.key, e.target.checked);
  }
  render() {
    return(
      <div className='form__check'>
        <span className='form__check-name'>{this.props.options.name}: </span>
        <input
          type='checkbox'
          checked={this.props.options.value}
          placeholder={this.props.options.placeholder || 'input'}
          value='в мес'
          className='form__input-input'
          onChange={this.setVal.bind(this)}
        />
      </div>
    );
  }
}

export default Check;