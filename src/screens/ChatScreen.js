import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Mensagem from '../components/Mensagem';
import mensagemService from '../services/MensagemService';

export default function ChatScreen({ route }) {
  const { id } = route.params;
  const [mensagens, setMensagens] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    carregarMensagens();
  }, [id]);

  const carregarMensagens = () => {
    const msgs = mensagemService.getMensagens(id);
    setMensagens([...msgs]);
  };

  const handleEnviar = () => {
    if (texto.trim().length > 0) {
      mensagemService.enviarMensagem(id, texto);
      setTexto('');
      carregarMensagens();
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FlatList
        data={mensagens}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Mensagem mensagem={item.texto} recebida={item.recebida} />}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={texto} onChangeText={setTexto} />
        <Button title="Enviar" onPress={handleEnviar} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DDD5',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
});
