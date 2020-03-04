import React ,{ Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom'

class Tab extends Component {
  constructor(props) {
    super(props)
    this.to = this.to.bind(this)
  }

  to(tab) {
    this.props.history.push(`/${tab}`)
  }

  render() {
    return (
      <div>
        <div onClick={() => (this.handleClick('discount'))}>全部优惠</div>
        <div onClick={() => (this.handleClick('used'))}>已使用</div>
        <div onClick={() => (this.handleClick('use'))}>未使用</div>
        <div onClick={() => (this.handleClick('overdue'))}>已过期</div>
        <Router>
          <Switch>
            <Route path='/discount' component={Discount}/>
            <Route exact path='/used' component={used}/>
            <Route path='/use' component={use}/>
            <Route path='/overdue' component={Overdue}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default withRouter(Tab)
