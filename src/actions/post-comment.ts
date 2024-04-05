import axios from 'axios';
import { Alert } from 'react-native';

import type { Comment } from '~/presentation/components/CommentForm';

export const postComment = async (comment: Comment) => {
  try {
    const { data } = await axios.post<Comment>(
      'https://jsonplaceholder.typicode.com/posts',
      comment
    );
    console.log('POST Response:', data);
    Alert.alert('Success', 'POST request was successful');
  } catch (error) {
    console.error('POST Request error:', error);
    Alert.alert('Error', 'There was an error in the POST request');
  }
};
