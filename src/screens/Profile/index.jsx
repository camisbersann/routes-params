import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Profile({ route }) {
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Title title={"Profile"}/>
      <Text>Nome: {user.name}</Text>
      <Text>E-mail: {user.email}</Text>
      <Text>Idade: {user.age}</Text>
    </View>
  )
}