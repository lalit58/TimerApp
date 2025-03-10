import AsyncStorage from '@react-native-async-storage/async-storage';

const setLocalStoreItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Failed to save timers:', error);
  }
};

const getLacStorageItem = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load timers:', error);
    return [];
  }
};

export {setLocalStoreItem, getLacStorageItem};
