import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Dropdown, Button } from '@repo/ui';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#14180e' } as any}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button text="Hello from Mobile!" onClick={() => alert('Mobile Clicked!')} />

          <View style={{ width: '100%', marginTop: 20 }}>
            <Dropdown
              label="Mobile Dropdown (Bottom Sheet)"
              items={['Mobile 1', 'Mobile 2', 'Mobile 3']}
              onSelect={(item) => console.log('Selected:', item)}
            />
          </View>

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
});
