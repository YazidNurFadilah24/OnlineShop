import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'John Doe',
    email: 'john@email.com',
    isAdmin: true,
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane 8',
    email: 'jane@mama.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users