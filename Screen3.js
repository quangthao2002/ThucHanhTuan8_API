import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Screen3 = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})