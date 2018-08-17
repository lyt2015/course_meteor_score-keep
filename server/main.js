import { Meteor } from 'meteor/meteor'

import { Players } from '../imports/api/players'

console.log('Log from /server/main.js')

Meteor.startup(() => {
  /*
  let obj = {
    name: 'Lisa',
    printName() {
      console.log(`Name: ${this.name}`)
    },
  }

  obj.printName()
  setTimeout(obj.printName, 1000)
  setTimeout(obj.printName.bind(obj), 2000)
  */
})
