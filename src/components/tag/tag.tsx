import { Component } from 'react';
import { Image, Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';

export default class Tags extends Component<{
  style?: StyleProp<ViewStyle>;
  title: string | number;
  deleteTags: () => void;
}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#005180',
          backgroundColor: '#B7E5FF',
          ...(this.props.style as any),
        }}
      >
        <Text
          style={{
            color: '#005180',
            fontWeight: 'bold',
            marginRight: 10,
            fontSize: 16,
          }}
        >
          {this.props.title}
        </Text>
        <Pressable onPress={this.props.deleteTags}>
          <Image
            style={{
              width: 12,
              height: 12,
              tintColor: 'black',
            }}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=95867&format=png&color=000000',
            }}
          />
        </Pressable>
      </View>
    );
  }
}
