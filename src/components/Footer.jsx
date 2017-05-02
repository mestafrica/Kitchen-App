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
                  <p className="text-center"><small> Copyright @MEST 2017</small></p>
              </footer>
          </div>
      );
    }
}

export default Footer;
