import * as React from 'react';
import './Template.css';

interface TemplateProps {
  location: any;
}

class Template extends React.Component<TemplateProps, {}> {
  render() {
    if (this.props.location.state !== undefined) {
      console.log(this.props.location.state.title);
    } else {
      return (
        <div className='template'>
          Empty
        </div>
      );
    }
    return (
      <div className='template'>
        {this.props.location.state.title}
      </div>
    );
  }
}

export default Template;
