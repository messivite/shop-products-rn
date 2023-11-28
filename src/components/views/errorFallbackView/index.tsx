import { Button, Text, View } from 'react-native';

export const ErrorFallbackView = (props: {
  error: Error;
  resetError: Function;
}) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button onPress={() => props.resetError()} title={'Try again'} />
  </View>
);
