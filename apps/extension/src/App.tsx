import './App.css'
import { Button, Dropdown } from '@repo/ui'

function App() {
  return (
    <div className="card">
      <h1>Extension App</h1>
      <Button
        text="Hello from Extension!"
        onClick={() => alert('Extension Clicked!')}
      />
      <div style={{ marginTop: 20 }}>
        <Dropdown
          label="Choose Extension Option"
          items={['Option A', 'Option B', 'Option C']}
          onSelect={(item) => console.log('Selected:', item)}
        />
      </div>
    </div>
  )
}

export default App
