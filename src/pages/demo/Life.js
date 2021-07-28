import React from 'react'
import Child from './Child'
import {Button} from 'antd'
import './Life.less'

export default class Life extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }

  handleAdd = () => {
    let {count} = this.state
    this.setState({
      count:count+1
    })
  }
  handleClick() {
    let {count} = this.state
    this.setState({
      count:count+1
    })
  }

  render() {
    /* let style = {
      padding:'50px'
    } */
    return <div className="contentWrap">
      <p>React生命周期介绍</p>
      <Button onClick={this.handleAdd}>antd 点击一下</Button>
      <button onClick={this.handleAdd}>点击一下</button>
      <button onClick={this.handleClick.bind(this)}>点击一下</button>
      <p>{this.state.count}</p>
      <Child name={this.state.count}/>
    </div>
  }
}