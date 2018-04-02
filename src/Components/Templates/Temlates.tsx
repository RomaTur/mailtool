import * as React from 'react';
import TemplatePreview from './TemplatePreview/TemplatePreview';

let templateDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
templateDesc = templateDesc + 'Suspendisse id libero non felis ullamcorper efficitur a at massa.';

interface TemplatesState {
  templates: any;
}

class Templates extends React.Component<{}, TemplatesState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      templates: [
        {
          key: 'template1',
          title: 'Title of template1',
          description: templateDesc
        },
        {
          key: 'template2',
          title: 'Title of template2',
          description: templateDesc
        },
        {
          key: 'template3',
          title: 'Title of template3',
          description: templateDesc
        }
      ]
    };
  }
  render() {

    const templatesPreviewArr = [];

    for (let i = 0; i < this.state.templates.length; i++) {
      templatesPreviewArr.push(
        <TemplatePreview
          key={i}
          title={this.state.templates[i].title}
          desc={this.state.templates[i].description}
        />);
    }

    return (
      <div className='Templates'>
        {templatesPreviewArr}
      </div>
    );
  }
}

export default Templates;