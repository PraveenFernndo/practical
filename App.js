import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {

  const repeatArray = Array.from({ length: 11 }, (_, i) => i);
  const [getNumber, setNumber] = useState();
  const [bgColor, setBgColor] = useState('#ccc');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, }}>
        <Text style={styles.mainHeading}>How likely are you to recommend Halsa to a {"\n"}friend?</Text>
        <View style={styles.textContainerTop}>
          <Text>Very Like</Text>
        </View>

        <View style={styles.ratingContainer}>
          {repeatArray.map((item, index) => (
            <TouchableOpacity  style={styles.rating}>
              <Text>{index}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.textContainerBottom}>
          <Text>Not Likely</Text>
        </View>

        <View style={styles.messageBoxContainer}>
          <Text style={styles.messageHeading}>Share your thoughts</Text>
          <View>
            <TextInput placeholder='Any suggestion to make Helsa even better ?' multiline={true} style={styles.messageInput} />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send Feedback</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 70,
    textAlign: 'center',
    color: '#c48ff1',
  },
  textContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 100,
  },
  textContainerBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    gap: 10,
  },
  rating: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#d0a7f3',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  messageBoxContainer: {
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  messageHeading: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 100,
    color: 'gray',
    fontWeight: 'bold',
  },
  messageInput: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    fontSize: 20,
    color: '#f1f1f1',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#a452e9',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '70%',
  },
  buttonText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
