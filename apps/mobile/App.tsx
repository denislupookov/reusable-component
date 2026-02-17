import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Dropdown, Button, NativeBottomSheet } from '@repo/ui';

export default function App() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#14180e' } as any}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button text="Hello from Mobile!" onPress={() => alert('Mobile Clicked!')} />

          <View style={{ width: '100%', marginTop: 20 }}>
            <Dropdown
              label="Mobile Dropdown"
              items={['Mobile 1', 'Mobile 2', 'Mobile 3']}
              onSelect={(item) => console.log('Selected:', item)}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Button text="Open Native Sheet" onPress={() => setSheetOpen(true)} />
          </View>

          <NativeBottomSheet
            isOpen={isSheetOpen}
            onOpenChange={setSheetOpen}
          >
            <View style={styles.sheetContent}>
              <Text style={styles.sheetTitle}>Native Bottom Sheet</Text>
              <Text style={styles.sheetText}>
                This sheet has some description text to show how it can handle dynamic content and adjust its height accordingly.
              </Text>
            </View>
          </NativeBottomSheet>

          <StatusBar style="auto" />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14180e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetContent: {
    padding: 24,
    alignItems: 'center',
    gap: 16,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sheetText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});
