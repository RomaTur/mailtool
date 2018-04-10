import * as React from 'react';

function reverse(element: any, html: any) {
  if (element.type === 'array') {
    
    html = reverse(element, html);
  } else {
    return html;
  }
}

export default (state: any) => {
  console.log(state);
  const options = state.options;
  let final: any = <div>finalHtml</div>;
  // options.forEach((element: any) => {
  final = reverse(options, final);  
  // });

  return final;
};