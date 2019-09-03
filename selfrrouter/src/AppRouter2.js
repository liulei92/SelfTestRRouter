// 啥玩意是嵌套路由
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link, Prompt } from 'react-router-dom'
// import Deep from './pages/Deep'
// import Videos from './pages/Videos'
// import Workplaces from './pages/Workplaces'
import './assets/css/AppRouter2.css'

const routes = [
  // { path: '/', component: lazy(() => import(/* webpackChunkName: "Deep" */ './pages/Deep')) },
  { path: '/deep', component: lazy(() => import(/* webpackChunkName: "Deep" */ './pages/Deep')) },
  { path: '/videos', component: lazy(() => import(/* webpackChunkName: "Videos" */ './pages/Videos')) },
  { path: '/workplaces', component: lazy(() => import(/* webpackChunkName: "Workplaces" */ './pages/Workplaces')) }
]

// const getConfirmation = (message, callback) => {
//   console.log(message, callback)
//   callback(true)
// }

function AppRouter2 () {
  return (
    /* getUserConfirmation={getConfirmation} */
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h1>一级导航</h1>
          <ul>
            <li><Link to="/deep">博客首页</Link></li>
            <li><Link to="/videos">视频教程</Link></li>
            <li><Link to="/workplaces">职场技能</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Suspense fallback={null}>
            <Switch>
              {/* <Prompt message="Are you sure you want to leave?" /> */}
              <Route exact path="/" component={() => <Redirect to="/deep" />} />
              {
                routes.map(item => (
                  <Route key={item.path} {...item}></Route>
                ))
              }
              <Route component={() => <Redirect to="/" />}></Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter2
