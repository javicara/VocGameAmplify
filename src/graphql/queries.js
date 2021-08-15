/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPalabra = /* GraphQL */ `
  query GetPalabra($id: ID!) {
    getPalabra(id: $id) {
      id
      palabra
      traduccion
      definicion
      tipo
      createdAt
      updatedAt
    }
  }
`;
export const listPalabras = /* GraphQL */ `
  query ListPalabras(
    $filter: ModelPalabraFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPalabras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        palabra
        traduccion
        definicion
        tipo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
