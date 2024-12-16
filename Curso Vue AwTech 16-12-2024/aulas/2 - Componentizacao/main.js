import CRMComponente from './componentes/crm.js';

const app = Vue.createApp({

    name: 'Projeto de Teste',
    // A função data em um componente Vue é responsável por definir o estado reativo do componente.
    data() {
        return {
            message: 'Hello World',
            cards: [
                {nome: 'Karen', email: 'karen@awtech.so', telefone: '(35) 9999-9999'},
                {nome: 'Marcos', email: 'marcos@awtech.so', telefone: '(35) 9999-9999'},
                {nome: 'José', email: 'jose@awtech.so', telefone: '(35) 9999-9999'},
                {nome: 'Janiele', email: 'janiele@awtech.so', telefone: '(35) 9999-9999'}
            ]
        };
    },

    // Methods é responsável por definir os métodos (funções) que podem ser utilizados dentro do componente
    methods: {
        esconderCRM(){
            this.$refs.CRM.esconderCrm();
        },
    },

    // Cada propriedade computada é uma função que retorna um valor calculado com base em outras propriedades reativas.
    computed:{
    },

    // Instalação de componentes externos/privados
    components:{
        "Cabecalho" : HeaderComponente,
        "crm" : CRMComponente,
    },

    // Eventos de escuta de propriedades
    watch:{
        // Observando uma propriedade
        nomeDaPropriedade(newValue, oldValue) {
            // Ação a ser executada quando `nomeDaPropriedade` mudar
        },
    },

    // LifeCycle Hooks (Ciclos de Vida)
    beforeCreate() {
        console.log('beforeCreate: O componente está sendo instanciado!');
    },
    created() {
        console.log('created: O componente foi criado!');
    },
    beforeMount() {
        console.log('beforeMount: O componente será montado no DOM!');
    },
    mounted() {
        console.log('mounted: O componente foi montado no DOM!');
    },
    beforeUpdate() {
        console.log('beforeUpdate: O componente está prestes a ser atualizado!');
    },
    updated() {
        console.log('updated: O componente foi atualizado!');
    },
    beforeUnmount() {
        console.log('beforeUnmount: O componente está prestes a ser desmontado!');
    },
    unmounted() {
        console.log('unmounted: O componente foi desmontado!');
    },

}).mount('#app');;