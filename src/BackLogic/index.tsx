import * as React from 'react';

function reverse(element: any, html: any) {
  if (element.type === 'array') {
    if (element.key === 'template1__products') {
      html = (
      <table className={element.key}>
        <tbody>
          {/* {
            function() { return (
            <tr>
            <td>
                2
              </td>
            </tr>
            ); }
          } */}
          <tr>
            <td>
              2
            </td>
          </tr>
        </tbody>
      </table> );
    }
    // html = reverse(element, html);
    return html;
  } else {
    return html;
  }
}

export default (state: any) => {
  const options = state.params.options;
  let final: any = <div>finalHtml</div>;
  let htmlArr: any = [];
  options.forEach((element: any) => {
    final = reverse(element, final);
    htmlArr.push(final);
  });
  return final;
};