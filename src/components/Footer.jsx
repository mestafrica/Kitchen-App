import React from 'react';

class Footer extends React.Component {
    render() {

      let footerStyle = {
        containerStyle: {
            backgroundColor: 'yellow'
        }
      };
      return (
          <div className="container">
              <footer style={footerStyle.containerStyle} className="footer">
                  <h3><small> Copyright @MEST 2017</small></h3>
              </footer>
          </div>
      );
    }
}

export default Footer;
