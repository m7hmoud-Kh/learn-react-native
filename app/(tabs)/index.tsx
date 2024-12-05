import TabComponent from '@/components/TabComponent';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <View style={style.card}>
      {/* <TabComponent text={"hello"}/>
      <TabComponent text={"welcome"}/>
      <TabComponent text={"Hi"}/>
      <TabComponent text={"Mahmoud Khairy"}/>
      <TabComponent text={"i love react Native"}/> */}
      <Pressable onPress={() => {alert("This is Price")}}>
        <Text>
          2000 $
        </Text>
      </Pressable>
      <Image source={require('../../assets/images/react-logo.png')}
      style={style.imageStyle}/>
      <Text style={style.titleStyle}>Logo</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit assumenda fugiat cum, autem saepe.</Text>
      <Pressable>
        <Text style={style.buttonStyle}>Learn More</Text>
      </Pressable>
    </View>

    <View style={style.card}>
      {/* <TabComponent text={"hello"}/>
      <TabComponent text={"welcome"}/>
      <TabComponent text={"Hi"}/>
      <TabComponent text={"Mahmoud Khairy"}/>
      <TabComponent text={"i love react Native"}/> */}
      <Pressable onPress={() => {alert("This is Price")}}>
        <Text>
          2000 $
        </Text>
      </Pressable>
      <Image source={require('../../assets/images/react-logo.png')}  style={style.imageStyle}/>
      <Text style={style.titleStyle}>Logo</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit assumenda fugiat cum, autem saepe.</Text>
      <Pressable >
        <Text style={style.buttonStyle}>Learn More</Text>
      </Pressable>
    </View>

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
    textAlign:"center"
  },
  buttonStyle: {
    backgroundColor: 'black',
    color: 'white',
    padding:5,
    textAlign:'center',
    marginTop:10
  }

})