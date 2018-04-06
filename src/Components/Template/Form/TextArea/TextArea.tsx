import * as React from 'react';

interface TextAreaProps {
  name: string;
}

class TextArea extends React.Component<TextAreaProps, {}> {
  render() {
    return (
      <div className='form__textarea'>
        <span className='form__textarea-name'>{this.props.name}: </span>
        <textarea className='form__textarea-input'/>
      </div>
    );
  }
}

export default TextArea;