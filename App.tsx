import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { StyleSheet } from 'react-native-unistyles'
import { Card } from './components/Card/Card';
import { CardTitle } from './components/Card/CardTitle';
import { CardBody } from './components/Card/CardBody';
import { CardActions } from './components/Card/CardActions';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Card>
        <CardTitle text='Je suis la' />
        <CardBody text='asdad' />
        <CardActions>
          <Text>asdasda</Text>
        </CardActions>
      </Card>
    </View>
   
  );
}

const styles = StyleSheet.create((theme, rt) => ({
   container: {
    flex: 1,
    backgroundColor: theme.colors.base100,
    paddingTop: rt.insets.top,
    paddingInline: 10
   }
}))

export default App;
