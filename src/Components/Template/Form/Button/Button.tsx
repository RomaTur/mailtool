import * as React from 'react';

interface ButtonProps {
  options: any;
  clickAction: any;
}

class Button extends React.Component<ButtonProps, {}> {
  action() {
    this.props.clickAction(this.props.options.target, this.props.options.action);
  }

  render() {
    let val = '';
    let classVal = '';
    if (this.props.options.action === 'remove') {
      classVal = 'form__element-remove' ;
      val = this.props.options.name;
    } else {
      classVal = 'form__element-add';
      val = this.props.options.name;
    }
    return (
      <input
        type='button'
        value={val}
        onClick={this.action.bind(this)}
        className={classVal}
      />
    );
  }
}

export default Button;