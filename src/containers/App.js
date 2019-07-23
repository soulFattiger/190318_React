//import React, {Component} from 'react'

import {connect} from 'react-redux'
import Counter from '../components/counter'
import {increment,decrement,incrementAsync} from '../redux/actions'
/*
应用根组件
 */

export default connect (
  state => ({count:state}),
  {increment,decrement,incrementAsync}
)(Counter)