import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Wizard from './src/components/Wizard';
import Input from './src/components/Input';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Wizard
          initialValues={{
            username: '',
            email: '',
            avatar: '',
          }}
        >
          <Wizard.Step>
            {({ onChangeValue, values }) => (
              <View style={styles.container}>
                <Input
                  value={values.username}
                  name="username"
                  placeholder="Username here..."
                  onChangeValue={onChangeValue}
                />
              </View>
            )}
          </Wizard.Step>
          <Wizard.Step>
            {({ values, onChangeValue }) => (
              <View style={styles.container}>
                <Input
                  value={values.email}
                  name="email"
                  placeholder="Email here..."
                  onChangeValue={onChangeValue}
                />
              </View>
            )}
          </Wizard.Step>
          <Wizard.Step>
            {({ values, onChangeValue }) => (
              <View style={styles.container}>
                <Input
                  value={values.avatar}
                  name="avatar"
                  placeholder="Avatar here..."
                  onChangeValue={onChangeValue}
                />
              </View>
            )}
          </Wizard.Step>
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
