import React from 'react'
import {Link} from 'react-router-dom'

export default class Main extends React.Component{
  render() {
    return (
      <div>
        this is main page.
        <Link to="/main/a">main/a</Link>
        {this.props.children}
      </div>
    )
  }
}