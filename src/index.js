import * as React from 'react'
import { render } from 'react-dom'
import readystate from 'readystate'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'
import App from './app'

const rootEl = document.getElementById('root')
const rootTree = (
  <App />
)

function startApplication () {
  readystate.loading(() => {
    console.log('*** Application: init firebase')
    firebase.initializeApp()
  })
  readystate.interactive(() => {
    console.log('*** Application: init react')
    render(rootTree, rootEl)
  })
  readystate.complete(() => {
    console.log('*** Application: loaded')
  })
}

function stopApplication () {
  readystate.removeAllListeners()
  DOM.unmountComponentAtNode(rootEl)
  console.log('*** Application: stopped')
}

try {
  startApplication()
} catch (err) {
  stopApplication()
  console.error('*** Application: error loading')
}
