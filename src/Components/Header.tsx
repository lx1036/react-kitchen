import React from 'react';
import {connect} from "react-redux";
import {transmit} from "../redux/store";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
        
        </div>
      </div>
    );
  }
}

export default connect(state => ({keyword: state}), {transmit})(Header);
