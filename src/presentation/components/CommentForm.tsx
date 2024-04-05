import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert, Pressable } from 'react-native';

import { appColors } from '~/config/theme/app-theme';

interface Comment {
  id: string;
  name: string;
  email: string;
  text: string;
}

export function CommentForm() {
  const [comment, setComment] = useState<Comment>({
    id: '',
    name: '',
    email: '',
    text: '',
  });

  const handleFormSubmit = () => {
    if (!comment.name.trim()) {
      Alert.alert('Error', 'Name is a required field');
      return;
    }

    if (!comment.email.trim()) {
      Alert.alert('Error', 'Email is a required field');
      return;
    }

    if (comment.text.length > 500) {
      Alert.alert('Error', 'Comments must have a maximum of 500 characters');
      return;
    }

    console.warn(comment);

    setComment({ id: '', name: '', email: '', text: '' });
  };

  const handleInputChange = (name: keyof Comment, value: string) => {
    setComment({ ...comment, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>

      <TextInput
        style={styles.input}
        value={comment.name}
        onChangeText={(value) => handleInputChange('name', value)}
        placeholder="Name"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        value={comment.email}
        onChangeText={(value) => handleInputChange('email', value)}
        placeholder="Email"
        autoCorrect={false}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        value={comment.text}
        onChangeText={(value) => handleInputChange('text', value)}
        placeholder="Comment (max 500 characters)"
        multiline
        autoCorrect={false}
      />

      <Pressable onPress={handleFormSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },

  input: {
    borderColor: appColors.darkGrayText,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    textAlignVertical: 'center',
  },

  textArea: {
    height: 100,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    textAlignVertical: 'center',
  },

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    borderRadius: 6,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
    width: 120,
  },

  buttonText: {
    color: appColors.whiteText,
    fontSize: 20,
  },
});
