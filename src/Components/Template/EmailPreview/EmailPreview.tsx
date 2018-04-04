import * as React from 'react';
import './EmailPreview.css';

interface EmailPreviewProps {
  html: string;
}

class EmailPreview extends React.Component<EmailPreviewProps, {}> {
  componentDidMount() {
    this.pushHtml();
  }

  pushHtml() {
    const modalWrapper = document.getElementById('email__preview') || {innerHTML: ''};
    modalWrapper.innerHTML = this.props.html;
  }

  render() {
    return (
      <div className='email__preview-wrapper'>
        <div id='email__preview'/>
      </div>
    );
  }
}

export default EmailPreview;