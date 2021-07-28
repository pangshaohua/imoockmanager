import React from 'react'
import './index.less';
import { Menu } from 'antd';
// import { MailOutlined } from '@ant-design/icons';
import menuConfig from "../../config/menuConfig.js";

const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}
export default class NavLeft extends React.Component{
  state = {
    menuTreeNode:[]
  }
  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuConfig)
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (data) => {
    console.log(data,'data');
    return data.map(item => {
      if (item.children) {
        return (<SubMenu title={item.title} key={item.key}>
          { this.renderMenu(item.children) }
        </SubMenu>)
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
            <img src="/assets/logo-ant.svg" alt=""/>
            <h1>Imooc MS</h1>
        </div>

        <Menu onClick={handleClick} mode="vertical" theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}