import { listPalabras} from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";


export async function fetchPalabras({ commit }) {
    try {
      const response = await API.graphql(graphqlOperation(listPalabras));
      const items = await response.data.listPalabras.items;
  
      console.log(items);
  
      commit("setPalabras", items);
    } catch (error) {
      console.log("error loading raceres... ", error);
    } finally {
      console.log("finalizo la Petecion de graphql para obtener las Palabras");
    }
  }