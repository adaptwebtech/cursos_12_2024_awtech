const card = {
    props: {
      card:{
        type: Object, // Valida que a prop deve ser um array
        required: true, // Torna obrigatório o recebimento da prop
      }
    },
    template: `
      <div class="p-2 bg-white rounded">
        <span class="text-success">{{card.nome}}</span>
        <br>
        <small>{{card.telefone}}</small>
        <br>
        <small>{{card.email}}</small>
        <br>
        <button class="btn btn-success btn-sm mt-2" @click="notificaPai(card)">Enviar mensagem</button>
      </div>
    `,
    methods: {
      notificaPai(card){
        this.$emit('notificaPai', card);
      }
    }
};

export default card