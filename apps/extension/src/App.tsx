import './App.css'
import { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Dropdown, NativeBottomSheet } from '@repo/ui'

function App() {
  const [isSheetOpen, setSheetOpen] = useState(false)

  return (
    <div className="card">
      <h1>Extension App</h1>
      <Button
        text="Hello from Extension!"
        onPress={() => alert('Extension Clicked!')}
      />
      <div style={{ marginTop: 20 }}>
        <Dropdown
          label="Choose Extension Option"
          items={['Option A', 'Option B', 'Option C']}
          onSelect={(item) => console.log('Selected:', item)}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <Button text="Open Native Sheet" onPress={() => setSheetOpen(true)} />
      </div>
      <NativeBottomSheet isOpen={isSheetOpen} onOpenChange={setSheetOpen}>
        <View style={{ padding: 16, alignItems: 'center', gap: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#111' }}>
            Native Bottom Sheet
          </Text>
          <Text style={{ color: '#333' }}>
            This sheet is rendered using the shared UI component.
          </Text>
          <Button text="Close Sheet" onPress={() => setSheetOpen(false)} />
        </View>
      </NativeBottomSheet>
    </div>
  )
}

export default App
