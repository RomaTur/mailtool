import * as React from 'react';

interface EmailPreviewProps {
  name: string;
}

class EmailPreview extends React.Component<EmailPreviewProps, {}> {
  render() {
    return (
      <div className='email__preview'>
        {/* {this.props.name} */}
      </div>
    );
  }
}

export default EmailPreview;