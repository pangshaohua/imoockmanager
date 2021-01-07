import React from 'react'

export default class Child extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }


  componentDidMount() {
    console.log('did mount');
  }


  shouldComponentUpdate() {
    console.log('should update');
    return true
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillUnmount() {
    console.log('will unmount1');
  }

  render() {
    return <div>
      <p>这里是子组件，测试子组件的生命周期</p>
      <p>{this.props.name}</p>
    </div>
  }
}