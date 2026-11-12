import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Mensagem({ mensagem, recebida }) {
  return (
    <View style={[styles.container, recebida ? styles.recebida : styles.enviada]}>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  enviada: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  recebida: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  texto: {
    fontSize: 16,
    color: '#000',
  },
});
