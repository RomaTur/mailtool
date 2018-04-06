import * as React from 'react';

interface TextAreaProps {
  changeFunc: any;
  options: any;
}

interface TextAreaState {
  value: any;
}

class TextArea extends React.Component<TextAreaProps, TextAreaState> {
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
    console.log(this.props.options.key);
    this.props.changeFunc(this.props.options.key, e.target.value);
  }

  render() {
    return (
      <div className='form__textarea'>
        <span className='form__textarea-name'>{this.props.options.name}: </span>
        <textarea className='form__textarea-input' value={this.state.value} onChange={this.setVal.bind(this)}/>
      </div>
    );
  }
}

export default TextArea;