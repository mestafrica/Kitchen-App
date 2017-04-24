import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component {
    render() {

      let headerStyle = {
        containerStyle: {
          width: '50%',
          margin: '0 auto'
        }
      }
        return (

            <div style={headerStyle.containerStyle}>
                <h3>MEST Kitchen App</h3>
            </div>
        );
    }
}

export default Header;
