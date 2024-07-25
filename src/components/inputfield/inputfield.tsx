import { Component, ReactNode } from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import { ModelInput } from './model';

class InputField extends Component<ModelInput> {
  render(): ReactNode {
    return (
      <View
        style={{
          ...(this.props.styleContainer as ViewStyle),
        }}
      >
        <Text style={{ fontSize: 17, color: '#0e0e0e', fontWeight: 'bold', marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>{this.props.isRequired ? '* ' : ''}</Text>
          {this.props.label}
        </Text>
        <TextInput
          defaultValue={this.props.value}
          inputMode={this.props.inputMode ?? 'text'}
          onChangeText={this.props.changeValue}
          style={{
            height: 50,
            borderWidth: 1,
            borderColor: 'gray',
            color: 'black',
            borderRadius: 6,
            paddingLeft: 12,
            fontSize: 17,
            ...(this.props.styleInput as ViewStyle),
          }}
          placeholderTextColor={'gray'}
          placeholder={this.props.placeholder ?? 'Masukan informasi disini ...'}
        />
      </View>
    );
  }
}

export default InputField;
