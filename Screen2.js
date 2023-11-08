import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Screen2 = ({ route }) => {
    const navigation = useNavigation();
    const { items } = route.params;
    return (
        <View style={{ alignItems: "center", marginVertical: 30 }}>
            {items.map((item, index) => (
                <View key={index} style={{ marginBottom: 20 }}>
                    <Pressable onPress={() => navigation.navigate("Drinks",  {item:item} )}>

                    <Image
                        source={{ uri: item.image }}
                        style={{ width: "100px", height: 100, resizeMode: "contain" }}
                    />
                    <View style={styles.a}>

                        <Text>{item.name}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View>
                        <Text>{item.position}</Text>
                    </View>
                    </Pressable>
                </View>
            ))}
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    a:{
        flexDirection:'row',
    }
})