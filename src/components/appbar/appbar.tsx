import { Component, ReactNode } from 'react';
import { Image, Pressable, Text, View, ViewStyle } from 'react-native';
import { AppbarModel } from './model';

class Appbar extends Component<AppbarModel> {
  constructor(props: AppbarModel) {
    super(props);
  }
  render(): ReactNode {
    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          flexDirection: 'row',
          ...(this.props.style as ViewStyle),
        }}
      >
        <Pressable
          onPress={() => this.props.router_interface.navigasi.goBack()}
          style={{
            marginTop: 'auto',
            marginRight: 15,
            marginBottom: 'auto',
          }}
        >
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=100&id=7811&format=png&color=000000',
            }}
            width={25}
            height={25}
          />
        </Pressable>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: 'black',
          }}
        >
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default Appbar;
