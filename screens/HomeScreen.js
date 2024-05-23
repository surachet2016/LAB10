import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; 
import styles from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation(); 

  const handleLoginPress = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
     
        <Text style={styles.logo}>Home</Text>
        <Text style={styles.inputText}>Place Home data.</Text>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.inputText}>Login</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default HomeScreen;
