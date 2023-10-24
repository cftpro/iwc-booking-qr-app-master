import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera as Camera} from 'react-native-camera';

export default class QrReader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poi: this.props.navigation.state.params.poi,
    };
  }

  render() {
    const {poi} = this.state;
    console.log(poi);
    return (
      <SafeAreaView>
        {/* <View>
          <Text style={{fontSize: 32, textAlign: 'center'}}>{poi.name}</Text>
        </View> */}
        <View>
          <QRCodeScanner
            onRead={this.onSuccess}
            flashMode={Camera.Constants.FlashMode.torch}
            topContent={<Text style={styles.centerText}>{poi.name}</Text>}
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    padding: 32,
    color: '#777',
    fontSize: 32,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
