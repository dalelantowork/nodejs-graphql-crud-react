## create new node js project

npm init

## install dependencies

### install apollo-server and graphql core package

npm install apollo-server graphql

### install nodemon

npm install

## update package.json

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon index.js"
},

## create index.js and server

const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
console.log(`API RUNNING AT ${url}`);
});

## create the schema folder

### create the type-defs and resolvers files

typedefs :

const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`;

module.exports = { typeDefs };

resolvers:

const { UserList } = require("../FakeData");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

module.exports = { resolvers };

### install Apollo GraphQL Extension in VS Code

### run the server
npm run start

## install lodash
npm install lodash --save

### query for get all users

query GetAllUsers {
  users {
    id
    name
    age
    username
    nationality
    friends {
      name
      age
    }
  }
}

### query for get user

query GetUser($userId: ID!) {
  user(id: $userId) {
    id
    name
    username
    age
    friends {
      name
    }
  }
}

variables: 
"userId": 3

### query for get movies

query GetAllMovies {
   movies {
    id
    name
    yearOfPublication
   }
}

### query for get movie

query GetMovie($name: String!) {
  movie(name: $name) {
    id
    name
    yearOfPublication
    isInTheaters
  }
}

variables:
"name": "Avengers Endgame"

## Mutations

### createUser

mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    age
  }
}

variables:
"input": {
    "name": "Dale",
    "username":"Daleski",
    "age": 20
  }
  
### updateUser

mutation UpdateUsername($input: UpdateUsernameInput!) {
  updateUsername(input: $input) {
    id
    username
  }
}

variables:
"input": {
    "id": "3",
    "newUsername":"Daleski"
  }

### deleteUser

mutation deleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    id
  }
}

variables:
"deleteUserId" : 5

# create new react project
create client folder
npx create-react-app .

## remove git
rm -rf .git

## start new git outside 
git init

## install apollo client
npm install @apollo/client