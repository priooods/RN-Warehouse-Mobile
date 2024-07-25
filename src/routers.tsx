import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './layout/home/index.tsx';
import History from './layout/history/index.tsx';
import Form from './layout/form/index.tsx';
import SplashScreen from './layout/splashscreen.tsx';
import Barcode from './layout/barcode/bacode.tsx';
const Stack = createNativeStackNavigator();
function Router() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen navigationKey="SplashScreen" name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        navigationKey="Home"
        options={{ animation: 'fade' }}
        name="Home"
        component={Home}
      />
      <Stack.Screen navigationKey="History" name="History" component={History} />
      <Stack.Screen
        navigationKey="Form"
        name="Form"
        options={{ animation: 'fade' }}
        component={Form}
      />
      <Stack.Screen
        navigationKey="Barcode"
        name="Barcode"
        options={{ animation: 'fade' }}
        component={Barcode}
      />
    </Stack.Navigator>
  );
}

export default Router;
