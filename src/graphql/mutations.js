/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPalabra = /* GraphQL */ `
  mutation CreatePalabra(
    $input: CreatePalabraInput!
    $condition: ModelPalabraConditionInput
  ) {
    createPalabra(input: $input, condition: $condition) {
      id
      palabra
      traduccion
      definicion
      createdAt
      updatedAt
    }
  }
`;
export const updatePalabra = /* GraphQL */ `
  mutation UpdatePalabra(
    $input: UpdatePalabraInput!
    $condition: ModelPalabraConditionInput
  ) {
    updatePalabra(input: $input, condition: $condition) {
      id
      palabra
      traduccion
      definicion
      createdAt
      updatedAt
    }
  }
`;
export const deletePalabra = /* GraphQL */ `
  mutation DeletePalabra(
    $input: DeletePalabraInput!
    $condition: ModelPalabraConditionInput
  ) {
    deletePalabra(input: $input, condition: $condition) {
      id
      palabra
      traduccion
      definicion
      createdAt
      updatedAt
    }
  }
`;
