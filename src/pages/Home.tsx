import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/cardSkill';

interface SkillData {
  id: string;
  name: string;
  data?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldSkill => oldSkill.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('bom dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('boa tarde');
    } else {
      setGretting('boa noite');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="welcome">
        Bem vindo, Erivaldo
      </Text>

      <Text style={{color: '#fff'}}>{gretting}</Text>

      <TextInput
        testID="input-new"
        style={styles.input}
        placeholder="new skill"
        placeholderTextColor={'#555'}
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button title="Add" testID="add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>my skills</Text>

      {mySkills && (
        <FlatList
          data={mySkills}
          testID="skills-list"
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="never"
          renderItem={({item}) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
