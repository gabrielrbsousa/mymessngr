class MensagemRepository {
  constructor() {
    this.mensagens = [];
  }

  getMensagens(contatoId) {
    return this.mensagens.filter(m => m.contatoId === contatoId);
  }

  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }
}

const mensagemRepository = new MensagemRepository();
export default mensagemRepository;
