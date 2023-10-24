import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Login} from '../Actions/Login';
import {setToken} from '../Helper/Helper';
import PoiScreen from '../Screens/PoiScreen';
import QrReader from '../Screens/QrReader';

const {width, height} = Dimensions.get('window');
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = async () => {
    const {email, password} = this.state;
    if ((!email, !password)) {
      return;
    }
    Login({email, password})
      .then(async res => {
        console.log('res', res);
        if (res.error) {
          if (res.error.code === 400) {
            alert('Kullanici adi veya sifre yanlis');
            return;
          }
        } else {
          console.log('TOKEN: ', res.success.data.token);
          await setToken(res.success.data.token);
          //Go to the screen
          this.props.navigation.navigate('PoiScreen');
        }
      })
      .catch(err => console.log('Errror on Login', err));
  };
  render() {
    return (
      <SafeAreaView
        style={{
          borderWidth: 1,
          width,
          height,
          margin: 0,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#e10816',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: 10,
            margin: 10,
            borderRadius: 1,
          }}>
          <Text style={{fontSize: 32, color: 'white'}}>
            Istanbul Welcome Card
          </Text>
          <Text style={{fontSize: 32, color: 'white'}}>Karekod Uygulamasi</Text>
        </View>
        <View
          style={{
            width,
            flex: 1,
            margin: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: width * 0.7}}>
            <Text
              style={{
                color: '#000',
                fontSize: 18,
                fontWeight: '800',
                textAlign: 'left',
                marginVertical: 10,
              }}>
              E-mail
            </Text>
            <TextInput
              style={{
                width: width * 0.7,
                height: 50,
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
                fontSize: 18,
              }}
              textContentType="emailAddress"
              onChangeText={text => this.setState({email: text})}
            />
            <Text
              style={{
                color: '#000',
                fontSize: 18,
                fontWeight: '800',
                marginVertical: 10,
              }}>
              Password
            </Text>
            <TextInput
              style={{
                width: width * 0.7,
                height: 50,
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
                fontSize: 18,
              }}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              borderWidth: 0,
              width: width * 0.7,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              backgroundColor: '#00bfa5',
            }}
            onPress={this.login}>
            <Text style={{color: '#fff8e1', fontSize: 18, fontWeight: '800'}}>
              Giriş
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    PoiScreen: {
      screen: PoiScreen,
    },
    QrReaderScreen: {
      screen: QrReader,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
  },
);

export default createAppContainer(AppNavigator);
