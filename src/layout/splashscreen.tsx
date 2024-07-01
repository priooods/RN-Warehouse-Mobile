import { Component } from 'react';
import { Text, View } from 'react-native';
import { RouterInterface, CustomRoute } from '../utils/router_component';

class SplashScreen extends Component<RouterInterface> {
  constructor(props: RouterInterface) {
    super(props);
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.props.navigasi.navigate('Home');
    }, 2000);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            color: 'gray',
            textAlign: 'center',
            fontSize: 26,
            fontWeight: 'bold',
          }}
        >
          Management Tabung
        </Text>
      </View>
    );
  }
}

export default CustomRoute(SplashScreen);
