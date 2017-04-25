import React from 'react';

class Footer extends React.Component {
    render() {

      let footerStyle = {
        containerStyle: {
          width: '50%',
          margin: '0 auto'
        }
      }
        return (
            <div style={footerStyle.containerStyle}>
                <h6> Copyright @MEST 2017</h6>
            </div>
        );
    }
}

export default Footer;
