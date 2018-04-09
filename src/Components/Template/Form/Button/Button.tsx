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
    return (
      <input
        type='button'
        value={this.props.options.name}
        onClick={this.action.bind(this)}
      />
    );
  }
}

export default Button;