import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router'


import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Class from '../components/class/Class'
import Teacher from '../components/teacher/Teacher'
import Calendar from '../components/calendar/Calendar'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={UserCrud} />
        <Route exact path='/teacher' component={Teacher} />
        <Route exact path='/class' component={Class} />
        <Route exact path='/calendar' component={Calendar} />
        <Redirect from='*' to='/'/>
    </Switch>