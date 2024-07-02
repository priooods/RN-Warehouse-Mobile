import { Component } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { CustomRoute, RouterInterface } from '../../utils/router_component';

class Form extends Component<RouterInterface> {
  state: Readonly<{
    form: any;
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      form: {
        nama: '',
        alamat: '',
        kelurahan: '',
        kecamatan: '',
        kabupaten: '',
        provinsi: '',
        kodePos: '',
        noTelp: '',
        email: '',
        noRek: '',
        atasNamaRek: '',
      },
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            flexDirection: 'row',
          }}
        >
          <Pressable
            onPress={() => this.props.navigasi.goBack()}
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
            Form Permintaan
          </Text>
        </View>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 15,
          }}
        >
          <TextInput
            value={this.state.form.nama}
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 6,
              paddingLeft: 12,
              fontSize: 17,
            }}
            placeholderTextColor={'gray'}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
          <Text style={{ color: 'red' }}>Hallo</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CustomRoute(Form);
