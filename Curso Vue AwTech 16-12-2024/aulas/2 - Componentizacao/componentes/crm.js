import Card from './card.js';

const CRMComponente = {
    props: {
        cards: {
          type: Array, // Valida que a prop deve ser um array
          required: true, // Torna obrigatório o recebimento da prop
        },
    },
    template: `
      <div v-show="exibirCRM">
        <p>CRM ({{cards.length}})</p>
        <div class="d-flex bg-light p-2 flex-column gap-2">
            <card @notificaPai="enviarMensagem" v-for="card in cards" :card="card"></card>
        </div>
      </div>
    `,
    data() {
      return {
        exibirCRM: true
      };
    },
    methods:{
        esconderCrm(){
            this.exibirCRM = false
        },
        enviarMensagem(card){
            alert(`Enviando mensagem para ${card.nome}`)
        }
    },
    components:{
        "card" : Card
    }
};

export default CRMComponente