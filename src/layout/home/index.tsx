import { Component } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CustomRoute, RouterInterface } from '../../utils/router_component';
import { Camera } from 'react-native-vision-camera';

class Home extends Component<RouterInterface> {
  state: Readonly<{
    grid: Array<any>;
    history: Array<any>;
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      history: [
        {
          title: 'Tabung Masuk',
          category: 'Oksigen',
          count: 20,
          id: 1,
        },
        {
          title: 'Tabung Keluar',
          category: 'Oksigen',
          count: 5,
          id: 2,
        },
        {
          title: 'Tabung Masuk',
          category: 'Acetylenen',
          count: 14,
          id: 3,
        },
        {
          title: 'Tabung Keluar',
          category: 'Acetylenen',
          count: 7,
          id: 4,
        },
        {
          title: 'Tabung Masuk',
          category: 'Butanol',
          count: 8,
          id: 5,
        },
        {
          title: 'Tabung Keluar',
          category: 'Butanol',
          count: 3,
          id: 6,
        },
      ],
      grid: [
        {
          title: 'Stok Tabung Oksigen',
          count: 20,
          backgroundColor: '#FFF6E9',
          titleColor: '#FC4100',
          subtitleColor: '#000',
          id: 1,
        },
        {
          title: 'Stok Tabung Acetylenen',
          count: 14,
          backgroundColor: '#FC4100',
          titleColor: '#FFF6E9',
          subtitleColor: '#fff',
          id: 2,
        },
      ],
    };
  }
  async componentDidMount() {
    const permission = Camera.getCameraPermissionStatus();
    if (permission == 'granted') {
      await Camera.requestCameraPermission();
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              marginBottom: 20,
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: 'black',
              }}
            >
              {'Prio Dwi Sembodo'}
            </Text>
          </View>
          <FlatList
            nestedScrollEnabled
            scrollEnabled={false}
            numColumns={2}
            contentContainerStyle={{ gap: 10 }}
            columnWrapperStyle={{ gap: 10 }}
            data={this.state.grid}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 8,
                  padding: 15,
                  flex: 1,
                  backgroundColor: item.backgroundColor,
                }}
              >
                <Text style={{ color: item.titleColor, fontWeight: 700, fontSize: 17 }}>
                  {item.title}
                </Text>
                <Text style={{ color: item.subtitleColor, fontSize: 11 }}>
                  Stok yang tersedia di Gudang
                </Text>
                <View
                  style={{
                    marginTop: 5,
                    flexDirection: 'row',
                  }}
                >
                  <Text
                    style={{
                      color: item.titleColor,
                      fontSize: 30,
                      fontWeight: 700,
                    }}
                  >
                    {item.count}
                  </Text>
                  <Text
                    style={{
                      color: item.subtitleColor,
                      fontSize: 14,
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      marginLeft: 5,
                    }}
                  >
                    (Unit)
                  </Text>
                </View>
              </View>
            )}
          />
          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              marginBottom: 12,
              color: '#010101',
              fontWeight: 600,
            }}
          >
            Aktivitas Pelayanan Tabung
          </Text>
          <FlatList
            nestedScrollEnabled
            scrollEnabled={false}
            contentContainerStyle={{ gap: 10 }}
            data={this.state.history}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 8,
                  flex: 1,
                }}
              >
                <Text style={{ color: item.title, fontWeight: 700, fontSize: 17 }}>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </ScrollView>
        <Pressable
          onPress={() => this.props.navigasi.navigate('Form')}
          style={{
            borderColor: 'rgba(0,0,0,2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            bottom: 40,
            backgroundColor: '#FC4100',
            right: 25,
            height: 65,
            borderRadius: 100,
            position: 'absolute',
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
            }}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=4299&format=png&color=000000',
            }}
          />
        </Pressable>
      </SafeAreaView>
    );
  }
}
export default CustomRoute(Home);
