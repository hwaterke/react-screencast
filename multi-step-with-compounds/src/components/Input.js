import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends PureComponent {
  state = {};
  _onChangeText = value => {
    this.props.onChangeValue(this.props.name, value);
  };
  render() {
    const { onChangeValue, name, ...rest } = this.props;
    return (
      <TextInput
        {...rest}
        style={styles.root}
        onChangeText={this._onChangeText}
      />
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f4f9f4',
    width: '90%',
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 6
  },
});

export default Input;
