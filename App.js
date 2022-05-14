import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
	const [cep, setCep] = useState();
	async function carregaCep(){
		const response = await Api.get('ws/'+cep+'/json/');
		setCep(response);
	}
  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
      		<Text style={styles.textoBloco}>
				Digite seu CEP:
			  </Text>
			  <TextInput
				  placeholder="Digite seu CEP ..."
				  style={styles.input}
				  onChangeText={(data)=>setCep(data)}/>
			  <TouchableOpacity 
				  style={styles.botao} 
				  onPress={carregaCep}
				  >
				  <Text
					  style={styles.textoB}>
					  Buscar
				  </Text>
			  </TouchableOpacity>
			  
				<Cep data={cep}/>
			  
		  </View>
		  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
