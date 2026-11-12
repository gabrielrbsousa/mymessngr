# MyMessngr

Aplicativo simples de mensagens feito com React Native e Expo. O app apresenta uma lista de contatos e permite abrir conversas e enviar mensagens locais.

## Pré-requisitos

- Node.js e npm instalados
- Expo Go no celular, ou um emulador Android/iOS configurado

## Instalação

Na pasta do projeto, instale as dependências:

```bash
npm install
```

## Executar o projeto

Inicie o servidor de desenvolvimento:

```bash
npx expo start
```

Quando o Expo iniciar:

- **Celular:** escaneie o QR code com o Expo Go. O celular e o computador devem estar na mesma rede.
- **Emulador Android:** pressione `a` no terminal do Expo para abrir o app no emulador.
- **Simulador iOS:** pressione `i` no terminal do Expo (requer macOS e Xcode).

## Uso

Na tela inicial, selecione um dos contatos para abrir a conversa. Digite uma mensagem e toque em **Enviar**; a mensagem aparecerá na conversa e o campo de texto será limpo.

As mensagens são armazenadas apenas em memória durante a execução do app. Elas não são persistidas e podem desaparecer ao recarregar ou reiniciar o aplicativo.
