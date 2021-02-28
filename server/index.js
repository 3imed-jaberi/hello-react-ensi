const faker = require('faker')

function generateUsers () {
  let users = []

  for (let id = 0; id < 50; id++) {
    const user = {
      firstName: faker.name.findName(),
      lastName: faker.name.lastName()
    }
    
    users.push(user)
  }

  return {
    users,
    todos: {
      title: 'hello'
    }
  }
}

module.exports = generateUsers
