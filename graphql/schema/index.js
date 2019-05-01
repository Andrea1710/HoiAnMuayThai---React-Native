const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type User {
      _id: ID!
      name: String!
      email: String!
      password: String!
      birthday: String!
    }

    type Class {
      _id: ID!
      title: String!
      description: String!
      date: String!
      time: String!
    }

    input UserInput {
      name: String!
      email: String!
      password: String!
      birthday: String!
    }

    type AuthData {
      userId: ID!
      email: String!
      name: String!
      birthday: String!
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
    }

    type RootMutation {
      createUser(userInput: UserInput): User
      createClass(classInput: ClassInput): Class
      deleteClass(classId: ID!): Class
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `);
