import './App.css'
import { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Dropdown, NativeBottomSheet } from '@repo/ui'

function App() {
  const [isSheetOpen, setSheetOpen] = useState(false)

  return (
    <div className="card">
      <div className="buttonRow">
        <Button
          text="Hello from Extension!"
          onPress={() => alert('Extension Clicked!')}
        />
      </div>
      <div className="dropdownRow">
        <Dropdown
          label="Choose Extension Option"
          items={['Option A', 'Option B', 'Option C']}
          onSelect={(item) => console.log('Selected:', item)}
        />
      </div>
      <div className="buttonRow">
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
