import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import { user } from "../../data/Profile";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"Home"}/>

       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile", { user })}>
        <Text style={styles.text}>Go to profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Category")}>
        <Text style={styles.text}>Go to category</Text>
      </TouchableOpacity>
     
    </View>
  )
}