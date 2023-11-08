import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { Icon } from "react-native-vector-icons/icon";

function Screen1() {
    var [data, setData] = useState([]);
    const [text, setText] = useState("");
    const navigation = useNavigation();
    var url = "https://654ad47d5b38a59f28ee4431.mockapi.io/shop";
    var lastItem;
  
    var fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    };
  
    useEffect(fetchData, []);
  
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontWeight:'bold',fontSize:18}}>
            Welcome to Cafe world
          </Text>
        </View>
        {data.map((item) => {
          
          return (
            <View key={item.id}>
              <View>            
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100px", height: "100px", resizeMode: "contain" }}
                />
              </View>
            </View>
          );
        })}
        <View>
          <Pressable 
            style={{width:250,height:40, alignItems:'center',backgroundColor:'#00BDD6'}} 
            onPress={() => navigation.navigate("Shops Near Me",  {items:data} )}
          >
            <Text style={{color:"white"}}>GET STARTED</Text>
          </Pressable>
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    color: "gray",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default Screen1;