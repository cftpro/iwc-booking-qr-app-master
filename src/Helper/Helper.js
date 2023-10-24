import AsyncStorage from '@react-native-community/async-storage';

export const setToken = async token => {
  await AsyncStorage.setItem('iwc_token', token);
  return;
};

export const getToken = async () => {
  return await AsyncStorage.getItem('iwc_token');
};

export const removeToken = async () => {
  return await AsyncStorage.clear();
  // return AsyncStorage.removeItem('otoparlat_token');
};

export const setLocalValue = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const getLocalValue = async key => {
  return await AsyncStorage.getItem(key);
};

export const removeLocalValue = async key => {
  return await AsyncStorage.removeItem(key);
};
