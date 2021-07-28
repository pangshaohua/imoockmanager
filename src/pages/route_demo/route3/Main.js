import React from 'react'
import {Link} from 'react-router-dom'

export default class Main extends React.Component{
  render() {
    return (
      <div>
        this is main page.
        <br/>
        <Link to="/main/test-id">/main/test-id</Link>
        <br/>
        <Link to="/main/123">/main/123</Link>
        <br/>
        {this.props.children}
      </div>
    )
  }
}