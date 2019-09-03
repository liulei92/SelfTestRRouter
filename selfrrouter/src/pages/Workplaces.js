import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import Money from './workplaces/Money'
import WakeUp from './workplaces/WakeUp'

function Videos () {
  return(
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplaces/money">Money教程</Link></li>
          <li><Link to="/workplaces/wakeUp">WakeUp教程</Link></li>
        </ul>
      </div>
      <hr/>
      <div className="videoContent">
        <h3>视频教程</h3>
        <Switch>
          <Route exact path="/workplaces" component={Money}></Route>
          <Route path="/workplaces/money" component={Money}></Route>
          <Route path="/workplaces/wakeUp" component={WakeUp}></Route>
          <Route component={() => <Redirect to="/workplaces" />}></Route>
        </Switch>
      </div>
    </div>
  )
}

export default Videos
