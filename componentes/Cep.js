import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Cep(props) {
  return (
  	<>
	  <text style={styles.texto}> CEP: {props.data.cep}</text> 
	  <text style={styles.texto}> Logradouro: {props.data.logradouro}</text> 
	  <text style={styles.texto}> Bairro: {props.data.bairro}</text> 
	  <text style={styles.texto}> Localidade: {props.data.localidade}</text> 
	  <text style={styles.texto}> UF: {props.data.uf}</text> 
	</>
  );
}

const styles = StyleSheet.create({
  text:{
	maginTop:20,
	fontSize:20,
  },
	
});