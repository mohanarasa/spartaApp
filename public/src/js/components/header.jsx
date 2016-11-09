var React = require('react');
var MainDispatcher = require('../dispatchers/mainDispatcher.js');
var MainConstant = require('../constants/mainConstant.js');
var UserStore = require('../stores/user.js');

var Link = require('react-router').Link;

import { TopBar, TopBarItem, TopBarTitle } from '../../../node_modules/react-foundation-components/lib/top-bar';
import {
  TopBar as FlexTopBar,
  TopBarItem as FlexTopBarItem,
  TopBarTitle as FlexTopBarTitle,
} from '../../../node_modules/react-foundation-components/lib/top-bar-flex'; // eslint-disable-line import/no-unresolved
import { Menu, MenuItem } from '../../../node_modules/react-foundation-components/lib/menu';
import {
  Menu as FlexMenu,
  MenuItem as FlexMenuItem,
} from '../../../node_modules/react-foundation-components/lib/menu-flex'; // eslint-disable-line import/no-unresolved
import { Button } from '../../../node_modules/react-foundation-components/lib/button';
import { MenuIcon } from '../../../node_modules/react-foundation-components/lib/menu-icon';
import { ShowForScreenSize, HideForScreenSize } from '../../../node_modules/react-foundation-components/lib/visibility';

var Header = React.createClass({
  getInitialState: function() {
    return {
      show: false,
      user: UserStore.getUser()
    }
  },

  handleToggle: function() {
    this.setState({ show: !this.state.show });
  },

  handleLogout: function() {
    MainDispatcher.dispatch({
      action: MainConstant.USER.LOGOUT
    })
  },

  render: function() {
    var url = "/profile/"+this.state.user._id;
    return (
      <TopBar stack="medium">
        <TopBarTitle>
          <Menu>
            <HideForScreenSize screenSize="large" componentClass={MenuItem}>
              <MenuIcon dark onClick={this.handleToggle} />
            </HideForScreenSize>
            <div className="nav_logo">
              <a href="/"><img src="http://spartaglobal.com/wp-content/uploads/2014/09/promotion-to-sparta-consulting.png" alt="logo" /></a>
            </div>
          </Menu>
        </TopBarTitle>
        <ShowForScreenSize screenSize={this.state.show ? 'small' : 'large'}>
          <TopBarItem position="left">
            <Menu vertical horizontal="large">
              <MenuItem><Link to="/">Dashboard</Link></MenuItem>
              <MenuItem><Link to={url}>Profile</Link></MenuItem>
              <MenuItem><a onClick={this.handleLogout}>Logout</a></MenuItem>
            </Menu>
          </TopBarItem>
        </ShowForScreenSize>
      </TopBar>
    );
  }
});

module.exports = Header;

        