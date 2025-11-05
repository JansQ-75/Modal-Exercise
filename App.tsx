import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [longPress, setLongPress] = useState<boolean>(false)
  const handlePress = () => setModalVisible(true)
  const handleLongPress = () => {
    setLongPress(true)
    setModalVisible(true)
  }
  const handleClose = () => {
    setModalVisible(false)
    setLongPress(false)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleClose}
        >
        <View style={styles.container}>
          <View style={styles.modalView}>
            {!longPress ? (
              <Text style={styles.modalText}>This is modal...</Text>
            ) : (
              <>
                <Text style={styles.modalText}>Congratulations!</Text>
                <Text style={styles.modalText}>You have pressed long enough!</Text>
              </>
            )}
            <Pressable onPress={handleClose}>
              <Text style={styles.modalClose}>Close</Text>
            </Pressable>
          </View>
        </View>
        </Modal>
        <Pressable onPress={handlePress}>
          <Text style={styles.appText}>Show modal message</Text>
        </Pressable>
        <Pressable 
        onLongPress={handleLongPress}
        delayLongPress={1000}>
          <Text style={styles.appText}>Hold your press!</Text>
        </Pressable>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3f6fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#abd7eeff',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    padding: 10,
  },
  modalClose: {
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold'
  },
  appText: {
    fontSize: 18,
    marginBottom: 30,
    color: '#fff'
  }

});
