import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, FlatList, Alert} from 'react-native';

import {Button} from '../../components/Button';
import {SkyllCard, ISkill} from '../../components/SkyllCard';

import {styles} from './styles';

export const Home: React.FC = () => {
  const [skyll, setSkyll] = useState('');
  const [skylls, setSkylls] = useState<ISkill[]>([]);
  console.log(skylls);
  const [boaVindas, setBoaVindas] = useState('');

  function handleAddSkyll() {
    const nameSkillExists = skylls.find(skill => skill.name === skyll);
    if (nameSkillExists) {
      Alert.alert(
        'Skill já cadastrada',
        'Você não pode cadastrar uma skill com mesmo nome',
        [
          {
            text: 'cancel',
            onPress: () => console.log('Cancel Pressed'),
          },
        ],
      );
    } else {
      const data = {
        id: String(new Date().getTime()),
        name: skyll,
      };

      setSkylls([...skylls, data]);
    }
  }

  function handleRemoveSkill(id: string) {
    const skillsNew = skylls.filter(skill => skill.id !== id);
    setSkylls(skillsNew);
    /* setSkylls(oldState => oldState.filter(skill => skill.id !== id)) */
  }

  function handleEditSkill(skill: ISkill) {
    const skillsCopied = skylls.map(item => ({...item}));
    const skillEncontred = skillsCopied.find(item => item.id === skill.id);
    if (skillEncontred) {
      skillEncontred.name = skill.name;
      setSkylls(skillsCopied);
    } else {
      return;
    }
  }
  function handleBoaVindas() {
    const horaAtual = new Date().getHours();
    if (horaAtual < 12) {
      setBoaVindas('Manhã');
    } else if (horaAtual >= 12 && horaAtual < 18) {
      setBoaVindas('Tarde');
    } else {
      setBoaVindas('Noite');
    }
    console.log(horaAtual);
  }
  useEffect(handleBoaVindas, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo Fábio</Text>

      <Text style={styles.title}>Ao turno da {boaVindas}</Text>

      <TextInput
        placeholder="add skyll"
        onChangeText={text => setSkyll(text)}
        style={styles.input}
      />

      <Button title="Adicionar" onPress={handleAddSkyll} />

      <FlatList
        data={skylls}
        contentContainerStyle={{paddingBottom: 24}}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkyllCard
            skill={item}
            removeSkill={handleRemoveSkill}
            editSkill={handleEditSkill}
          />
        )}
      />
    </View>
  );
};
