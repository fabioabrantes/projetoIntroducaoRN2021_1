import React, {useState} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';

import {Button} from '../../components/Button';
import {SkyllCard} from '../../components/SkyllCard';

import {styles} from './styles';

interface ISkyll {
  id: string;
  name: string;
}

export const Home: React.FC = () => {
  //const skylls = ['reactnative', 'flutter', 'php', 'flutter'];
  const [skyll, setSkyll] = useState('');
  const [skylls, setSkylls] = useState<ISkyll[]>([]);

  function handleAddSkyll() {
    const data = {
      id: String(new Date().getTime()),
      name: skyll,
    };
    setSkylls([...skylls, data]);
    console.log(skylls);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo Fábio</Text>
      <TextInput
        placeholder="add skyll"
        onChangeText={text => setSkyll(text)}
        style={styles.input}
      />
      <Button title="Adicionar" onPress={handleAddSkyll} />
      {/* <Button title="Editar" onPress={handleAddSkyll} />
      <Button title="Remover" remove onPress={handleAddSkyll} /> */}

      {/*  {skylls.map((skill, index) => (
        <View key={index}>
          <Text style={styles.title}>{skill}</Text>
        </View>
      ))} */}
      <FlatList
        data={skylls}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SkyllCard name={item.name} />}
      />
    </View>
  );
};
