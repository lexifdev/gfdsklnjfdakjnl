import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'
import App from './App'

const HotApp = hot(App)

render(<HotApp />, document.getElementById('app'))
