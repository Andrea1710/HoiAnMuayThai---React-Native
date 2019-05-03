const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type User {
      _id: ID!
      userId: String!
      name: String!
      email: String!
    }

    type Class {
      _id: ID!
      title: String!
      description: String!
      date: String!
      time: String!
    }

    type Joining {
      _id: ID!
      mtclass: Class!
      userId: String!
      userEmail: String!
    }

    input UserInput {
      userId: String!
      name: String!
      email: String!
    }

    type AuthData {
      userId: ID!
      email: String!
      name: String!
    }

    input ClassInput {
      title: String!
      description: String!
      date: String!
      time: String!
    }

    type RootQuery {
      login(email: String!, password: String!): AuthData!
      classes: [Class!]!
      joinings(userId: String!, userEmail: String!): [Joining!]!
    }

    type RootMutation {
      createUser(userInput: UserInput): User
      createClass(classInput: ClassInput): Class
      deleteClass(classId: ID!): Class
      joinClass(classId: ID!, userId: String!, userEmail: String!): Joining!
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `);
