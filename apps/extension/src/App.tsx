import './App.css'
import { useState } from 'react'
import { Button, Dropdown, NativeBottomSheet } from '@repo/ui'
import { html, css } from 'react-strict-dom'

const styles = css.create({
  sheetContent: {
    padding: 16,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  sheetText: {
    color: '#333',
  }
})

function App() {
  const [isSheetOpen, setSheetOpen] = useState(false)

  return (
    <html.div data-layoutconformance="strict" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' } as any}>
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
          <html.div style={styles.sheetContent}>
            <html.span style={styles.sheetTitle}>
              Native Bottom Sheet
            </html.span>
            <html.span style={styles.sheetText}>
              This sheet is rendered using the shared UI component.
            </html.span>
            <Button text="Close Sheet" onPress={() => setSheetOpen(false)} />
          </html.div>
        </NativeBottomSheet>
      </div>
    </html.div>
  )
}

export default App
