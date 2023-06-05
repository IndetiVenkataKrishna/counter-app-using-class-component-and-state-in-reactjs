import {Component} from 'react'

// Function Component
// const Welcome = () => <h1>Hello, User</h1>

// Class Component
class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}</h1>
  }
}

export default Welcome
