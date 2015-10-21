require("./style.css")
import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './content'

ReactDOM.render(
  <Greeting name="Mick!!"/>,
  document.getElementById('hola')
)
