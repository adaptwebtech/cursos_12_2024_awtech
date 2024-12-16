const app = Vue.createApp({

    name: 'Home',

    template: `
        <h1>{{ mensagem }}</h1>
        <hr>
        <div>

            <div class="text-end mb-2">

                <button v-on:click="exibirTabela = !exibirTabela" class="btn" v-bind:class="{'btn-success' : !exibirTabela, 'btn-danger' : exibirTabela}">
                <!-- <button @click="exibirTabela = !exibirTabela" class="btn" :class="{'btn-success' : !exibirTabela, 'btn-danger' : exibirTabela}"> -->
                    {{ (!exibirTabela) ? 'Exibir Tabela' : 'Esconder Tabela'}}
                </button>
            </div>

            <template v-if="exibirTabela">
                <table  class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="participante in participantes">
                            <td>{{participante.nome}}</td>
                            <td>{{participante.telefone}}</td>
                            <td>{{participante.email}}</td>
                        </tr>
                    </tbody>
                </table>
            </template>
            <template v-else>
                <div class="alert alert-warning" role="alert">
                    A tabela foi removida do DOM
                </div>
            </template>

            <hr>

            <button class="btn btn-success me-2" @click="contador++">Total de clicks: {{contador}}</button>
            <button v-once class="btn btn-warning" @click="contador++">Total de clicks: {{contador}}</button>

            <hr>

            <div v-html="html"></div>
            <div>{{html}}</div>
            <div v-pre>{{html}}</div>

            <hr>

            <input type="search" v-model="pesquisa" class="form-control" placeholder="Digite algo aqui..." />
            <span>Valor da pesquisa: {{pesquisa}}</span>
            
        </div>
    `,

    // A função data em um componente Vue é responsável por definir o estado reativo do componente.
    data() {
        return {
            mensagem: 'Hello World',
            exibirTabela: true,
            participantes: [
                {
                    nome: 'Miller',
                    email: 'miller@awtech.so',
                    telefone: '(35) 9999-9999'
                },
                {
                    nome: 'Chriffy',
                    email: 'chriffy@awtech.so',
                    telefone: '(35) 9999-9999'
                },
                {
                    nome: 'Vitinho',
                    email: 'vitinho@awtech.so',
                    telefone: '(35) 9999-9999'
                },
                {
                    nome: 'Nicolau',
                    email: 'nicolau@awtech.so',
                    telefone: '(35) 9999-9999'
                }
            ],
            contador: 0,
            html : `<p class="text-danger">Texto descritivo</p>`,
            pesquisa: ''
        };
    },

    // Methods é responsável por definir os métodos (funções) que podem ser utilizados dentro do componente
    methods: {
    },

    // Cada propriedade computada é uma função que retorna um valor calculado com base em outras propriedades reativas.
    computed:{
    },

    // Instalação de componentes externos/privados
    components:{
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

}).mount('#app');