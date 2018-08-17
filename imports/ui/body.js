import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players, calculatePlayerPositions } from '../api/players'

import App from './components/App'

import './body.html'

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find(
      {},
      {
        sort: {
          score: -1,
        },
      }
    ).fetch()
    const positionedPlayers = calculatePlayerPositions(players)
    const title = 'Score Keep'
    ReactDOM.render(
      <App players={positionedPlayers} title={title} />,
      document.getElementById('app')
    )
  })
})
