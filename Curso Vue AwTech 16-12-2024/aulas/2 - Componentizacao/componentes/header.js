const HeaderComponente = {
    template: `
      <div>
        <h5>Usuario Logado: {{usuario_logado}}</h5>
        <slot name="area_noticias"></slot>
        <hr>
      </div>
    `,
    data() {
      return {
        usuario_logado: 'Rodrigo'
      };
    }
};