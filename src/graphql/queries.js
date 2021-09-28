/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustDB = /* GraphQL */ `
  query GetCustDB($id: ID!) {
    getCustDB(id: $id) {
      id
      firstName
      lastName
      email
      phone
      language
      memberLevel
      pin
      createdAt
      updatedAt
    }
  }
`;
export const listCustDBS = /* GraphQL */ `
  query ListCustDBS(
    $filter: ModelCustDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustDBS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phone
        language
        memberLevel
        pin
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrompt = /* GraphQL */ `
  query GetPrompt($id: ID!) {
    getPrompt(id: $id) {
      id
      title
      description
      language
      category
      filepath
      createdAt
      updatedAt
    }
  }
`;
export const listPrompts = /* GraphQL */ `
  query ListPrompts(
    $filter: ModelPromptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        language
        category
        filepath
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
