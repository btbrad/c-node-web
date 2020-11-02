import React from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'

export default function RouterList(props) {
  return <div>
    <Switch>
      {routes.map((item, index) => <Route path={item.path} exact={item.exact} render={item.render} key={index} />)}
    </Switch>
  </div>
}