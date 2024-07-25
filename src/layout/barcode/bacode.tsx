import React, { Component } from 'react';
import { View } from 'react-native';
import { CustomRoute, RouterInterface } from '../../utils/router_component';
import { Camera, CameraDevice, getCameraDevice } from 'react-native-vision-camera';
import { Contextdata } from '../../utils/context_provider';

class Barcode extends Component<RouterInterface> {
  static contextType = Contextdata;
  context: React.ContextType<typeof Contextdata>;
  state: Readonly<{
    code: any;
    device: CameraDevice | undefined;
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      code: '',
      device: getCameraDevice(Camera.getAvailableCameraDevices(), 'back'),
    };
  }

  componentDidMount(): void {
    if (this.state.device == null) {
      this.props.navigasi.goBack();
    }
  }

  render() {
    const { setCode } = this.context!;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <Camera
          style={{
            flex: 1,
          }}
          isActive
          device={this.state.device!}
          codeScanner={{
            codeTypes: ['code-39', 'qr'],
            onCodeScanned(codes, frame) {
              for (const code of codes) {
                console.log(code.type, code.value);
              }
            },
          }}
        />
      </View>
    );
  }
}

export default CustomRoute(Barcode);
