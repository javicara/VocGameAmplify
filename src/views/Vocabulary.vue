<template>
  <div>
    <div class="container">
      <b-card-group deck>
        <b-card
          v-if="selectedword.palabra"
          border-variant="primary"
          :header="selectedword.palabra"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <!--  <b-card-text>
            <b-button-group vertical>
              <b-button
                pill
                size="lg"
                variant="outline-primary"
                @click="checkAnswer(selectedOptions[0])"
                >{{ selectedOptions[0] }}
              </b-button>
              <br />
              <b-button
                pill
                size="lg"
                variant="outline-primary"
                @click="checkAnswer(selectedOptions[1])"
                >{{ selectedOptions[1] }}</b-button
              >
              <br />
              <b-button
                pill
                size="lg"
                variant="outline-primary"
                @click="checkAnswer(selectedOptions[2])"
                >{{ selectedOptions[2] }}</b-button
              >
              <br />
              <b-button
                pill
                size="lg"
                variant="outline-primary"
                @click="checkAnswer(selectedOptions[3])"
                >{{ selectedOptions[3] }}</b-button
              >
              <br />
            </b-button-group>
          </b-card-text>
           VIEJOOOOOOO viejo card text -->

          <!-- Nuevo b card text -->

          <b-card-text>
            <b-button-group vertical>
              <b-button
                style="border-top-width: 4px"
                v-for="(option, index) in selectedOptions"
                :key="index"
                pill
                size="lg"
                variant="outline-primary"
                @click="checkAnswer(option)"
              >
                {{ option }}
              </b-button>
            </b-button-group>
          </b-card-text>

          <b-button
            pill
            size="lg"
            variant="outline-danger"
            @click="selectWord()"
            >Otra palabra</b-button
          >
          <br />
          <br />
          <h3>Palabras Restantes {{ this.palabras.length }}</h3>
          <h4>Correctas:{{ this.corrects }}</h4>
          <h4>Incorrectas:{{ this.incorrects }}</h4>

          <div class="container">
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm"></div>
              <div class="col-sm">
                <div class="mt-2">Cantidad de opcines:</div>
                <b-form-input
                  class="mt-2"
                  style="text-align: center"
                  v-model="qtyOptions"
                  type="number"
                  placeholder="Quantity options"
                ></b-form-input>
                <br />
                <b-button class="primary" @click="selectOptions">OK</b-button>
              </div >
              <div class="col-sm"></div>
              <div class="col-sm"></div>
            </div>
          </div>
        </b-card>
        <div v-else>
        <h1 >No Hay mas palabras :(</h1>
        <b-button block variant="success" to="/Form">Cargar mas palabras</b-button>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      qtyOptions: 4,
      corrects: 0,
      incorrects: 0,
      options: [
        "Jerga",
        "Sentido, de que algo es sentido",
        "Ojala",
        "Incomodo",
        "vinculación",
        "desesperado",
        "levemente ,ligeramente",
        "locura",
        "Mientras, mientras que",
        "pestañas",
      ],
      selectedOptions: [],

      palabras: [
        {
          palabra: "Slang",
          traduccion: "Jerga",
        },
        {
          palabra: "Heartfelt",
          traduccion: "Sentido, de que algo es sentido",
        },
        {
          palabra: "Hopefully",
          traduccion: "Ojala",
        },
        {
          palabra: "Awkward",
          traduccion: "Incomodo",
        },
        {
          palabra: "Eyelashes",
          traduccion: "pestañas",
        },
        {
          palabra: "Lacking",
          traduccion: "carente",
        },
      ],
      selectedword: "",
    };
  },
  methods: {
    checkAnswer(rta) {
      if (rta == this.selectedword.traduccion) {
        //alert("Correcto Rey");
        this.corrects++;
        setTimeout(() => {
          this.selectWord();
        }, 400);
      } else {
        this.incorrects++;
        setTimeout(() => {
          this.selectWord();
        }, 250);
      }
    },
    async selectOptions() {
      this.selectedOptions = [];
      this.selectedOptions.push(this.selectedword.traduccion);

      let optionsaux = [...this.options];

      //saco la correcta de las opciones pq ya la agregue en las opciones seleccionadas
      for (var i = 0; i < optionsaux.length - 1; i++) {
        if (optionsaux[i] === this.selectedword.traduccion) {
          optionsaux.splice(i, 1);
        }
      }

      //console.log(optionsaux, 'no tiene que estar la correcta');
      //
      let index;

      for (let i = 0; i < this.qtyOptions - 1; i++) {
        let lengthOptions = optionsaux.length;
        index = await this.selectIndex(lengthOptions);
        this.selectedOptions.push(optionsaux[index]);
        optionsaux.splice(index, 1);
        this.selectedOptions = this.selectedOptions.sort(
          () => Math.random() - 0.5
        );
      }

      //console.log(lengthOptions);
      //console.log(this.selectedOptions, "qty", qty);
    },
    async selectIndex(lenghtArray) {
      var random = 0;
      //console.log('multi',lenghtArray)
      random = await Math.floor(Math.random() * lenghtArray);
      return random;
    },
    async selectWord() {
      this.selectedword = "";
      if (this.palabras.length > 0) {
        let index = await this.selectIndex(this.palabras.length);
        this.selectedword = this.palabras[index];
        this.selectOptions();
        //console.log('selected Word', this.selectedword.palabra);
        this.palabras.splice(index, 1);
        //console.log(this.palabras)
      } else {
        console.log("No hay mas palabras");
      }
      //console.log(this.palabras[index])
    },
  },
  mounted() {
    this.selectWord();
  },
};
</script>
