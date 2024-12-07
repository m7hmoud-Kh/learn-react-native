import FlatListComponent from '@/components/FlatListComponent';
import LocationComponent from '@/components/LocationComponent';
import TabComponent from '@/components/TabComponent';
import { Button, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  return (
    <View>
      {/* <FlatListComponent /> */}
      {/* <LocationComponent /> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width:'100%',
    marginTop:10,
    padding:10,
    backgroundColor:'black',
    flex:1,
  },
  card:{
    marginBottom:20,
    backgroundColor: 'white',
    padding:10,
    borderRadius:10
  },
  imageStyle:{
    height:100,
    width:100,
  },
  titleStyle: {
    fontSize:20,
    marginVertical:5,
    textAlign:"center",
    backgroundColor: 'black',
    color: 'white',
    padding: 10
  },
  buttonStyle: {
    backgroundColor: 'black',
    color: 'white',
    padding:5,
    textAlign:'center',
    marginTop:10
  }

})