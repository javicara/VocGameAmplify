<template>
  <div align-h="center">
    <h3>Agregar</h3>
    <b-row>
      <b-col offset-md="5" cols="2">
        <label for="name-event">Palabra:</label>
        <b-form-input
          v-model="word.word"
          placeholder="Ingresa la palabra"
          trim
        ></b-form-input>
      </b-col>
      <b-col offset-md="4" cols="4">
        <label for="name-event">Traduccion:</label>
        <b-form-input
          id="input-live"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Ingresa su traduccion"
          trim
          v-model="word.translation"
        >
        </b-form-input>
      </b-col>
    </b-row>
    <br />
    <div class="container">
      <b-button
        block
        variant="success"
        :disabled="isDisabled"
        v-on:click="createPalabra"
        >Agregar Palabra</b-button
      >
    </div>
  </div>
</template> 

<script>
import { API } from "aws-amplify";
import { createPalabra } from "../graphql/mutations";
import { listPalabras } from "../graphql/queries";

export default {
  data() {
    return {
      word: {
        word: "",
        translation: "",
      },
    };
  },
  computed: {
    isDisabled() {
      //agregar una validacion en serio dsp
      if (this.word.word <= 3 || this.word.translation <= 4) {
        return true
      } else {
        return false
      }
    
    },
  },
  
  methods: {
    async createPalabra() {
      const palabra = this.word.word;
      const traduccion = this.word.translation;
      //console.log(word, 'word', translation, 'translation')
      if (!palabra || !traduccion) return;
      const input = { palabra, traduccion };
      await API.graphql({
        query: createPalabra,
        variables: { input: input },
      });
      this.word = "";
      this.translation = "";
    },
    async fetchWords(){
      const data = await API.graphql({
        query:listPalabras ,

      });
      const arrayPalabras = data.data.listPalabras.items
      console.log('Palabras en dynamo',arrayPalabras)
    }
  },
  mounted() {
    this.fetchWords();
  },
};
</script>
