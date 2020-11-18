import React, { Component } from "react";
import './sidebar.css';
import UserIcon from './user-solid.svg';



class Sidebar extends Component {

  changeView(newView) {
    console.log(newView);
    this.props.changeView(newView);
  }

  render() {
    return <div>
      <div className="SidebarHeader">
        <img src={UserIcon} alt="User Icon" width="30%" /><br/>
        <span className="CurrentUser">{this.props.currentUser?.longName}</span><br/>
        <span className="CurrentUser">{this.props.currentUser?.shortName}</span>
      </div>
      <ul>
          <a onClick={() => this.changeView("messages") } ><li>Channel Messages</li></a>
          <a onClick={() => this.changeView("users_list") } ><li>Channel Users List</li></a>
          <a onClick={() => this.changeView("users_map") } ><li>Channel Users Map</li></a>
          <a onClick={() => this.changeView("device_settings") } ><li>Device Settings</li></a>
          <a onClick={() => this.changeView("packet_log") } ><li>Packet Log</li></a>
      </ul>
    </div>;
          
  }
}
export default Sidebar;