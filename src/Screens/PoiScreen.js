import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {getPois} from '../Actions/Poi';

export default class PoiScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {pois: []};
  }
  componentDidMount() {
    getPois()
      .then(res => {
        this.setState({pois: res.success.data.pois});
        console.log('poi response', res);
      })
      .catch(err => console.log('error on poi', err));
  }
  render() {
    const {pois} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text> Yer Sec </Text>
        {pois.map(poi => (
          <TouchableOpacity
            style={styles.pois}
            key={poi._id}
            onPress={() => {
              this.props.navigation.navigate('QrReaderScreen', {poi: poi});
            }}>
            <Text style={{textAlign: 'center'}}>{poi.name}</Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pois: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
