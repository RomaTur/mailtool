import * as React from 'react';
import TemplatePreview from './TemplatePreview/TemplatePreview';

class Templates extends React.Component {

  render() {

    const templatesPreviewArr = [];

    for (let i = 0; i < 3; i++) {
      templatesPreviewArr.push(<TemplatePreview key={i} />);
    }

    return (
      <div className='Templates'>
        {templatesPreviewArr}
      </div>
    );
  }
}

export default Templates;