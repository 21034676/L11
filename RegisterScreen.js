import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (username && email && phone) {
      const userData = {
        username,
        email,
        phone,
      };

      fetch('https://610cd7f2a2e343b990a1ea45c07d8ae1.api.mockbin.io/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Registration Success:', data);
          navigation.navigate('Success'); // Navigate to success screen on success
        })
        .catch((error) => {
          console.error('Registration Error:', error);
          Alert.alert('Error', 'Something went wrong, try again.');
        });
    } else {
      Alert.alert('Validation Error', 'Please fill all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register for the Contest</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default RegisterScreen;


