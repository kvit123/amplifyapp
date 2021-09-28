/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createCustDB = /* GraphQL */ `
  mutation CreateCustDB(
    $input: CreateCustDBInput!
    $condition: ModelCustDBConditionInput
  ) {
    createCustDB(input: $input, condition: $condition) {
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
export const updateCustDB = /* GraphQL */ `
  mutation UpdateCustDB(
    $input: UpdateCustDBInput!
    $condition: ModelCustDBConditionInput
  ) {
    updateCustDB(input: $input, condition: $condition) {
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
export const deleteCustDB = /* GraphQL */ `
  mutation DeleteCustDB(
    $input: DeleteCustDBInput!
    $condition: ModelCustDBConditionInput
  ) {
    deleteCustDB(input: $input, condition: $condition) {
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
export const createPrompt = /* GraphQL */ `
  mutation CreatePrompt(
    $input: CreatePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    createPrompt(input: $input, condition: $condition) {
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
export const updatePrompt = /* GraphQL */ `
  mutation UpdatePrompt(
    $input: UpdatePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    updatePrompt(input: $input, condition: $condition) {
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
export const deletePrompt = /* GraphQL */ `
  mutation DeletePrompt(
    $input: DeletePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    deletePrompt(input: $input, condition: $condition) {
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
