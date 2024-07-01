import { Component } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CustomRoute, RouterInterface } from '../../utils/router_component';

class Home extends Component<RouterInterface> {
  state: Readonly<{
    grid: Array<any>;
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      grid: [
        {
          title: 'Tabung Masuk',
          category: 'Oksigen',
          count: 20,
          id: 1,
        },
        {
          title: 'Tabung Masuk',
          category: 'Oksigen',
          count: 20,
          id: 2,
        },
      ],
    };
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
          <Text
            style={{
              fontSize: 25,
              marginBottom: 30,
              marginTop: 15,
              fontWeight: 700,
              color: '#FC4100',
            }}
          >
            Home Screen
          </Text>
          <FlatList
            nestedScrollEnabled
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={{ gap: 16 }}
            data={this.state.grid}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 8,
                  padding: 15,
                  flex: 1,
                  backgroundColor: item.id == 1 ? 'yellow' : 'green',
                }}
              >
                <Text style={{ color: 'red' }}>{item.title}</Text>
              </View>
            )}
          />
          <Text style={{ fontSize: 25, marginBottom: 10, color: 'red' }}>Home Screen</Text>
        </ScrollView>
        <Pressable
          onPress={() => this.props.navigasi.navigate('Form')}
          style={{
            borderColor: 'rgba(0,0,0,2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            bottom: 40,
            backgroundColor: '#0F67B1',
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
