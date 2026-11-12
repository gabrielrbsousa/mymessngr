import mensagemRepository from '../repositories/MensagemRepository';

class MensagemService {
  getMensagens(contatoId) {
    return mensagemRepository.getMensagens(contatoId);
  }

  enviarMensagem(contatoId, texto) {
    if (!texto || texto.trim() === '') {
      return null;
    }
    const novaMensagem = {
      id: Date.now().toString() + Math.random().toString(),
      contatoId: contatoId,
      texto: texto.trim(),
      recebida: false
    };
    mensagemRepository.adicionarMensagem(novaMensagem);
    return novaMensagem;
  }
}

const mensagemService = new MensagemService();
export default mensagemService;
