
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome to Lovable
          </h1>
          <p className="text-muted-foreground">
            Your modern React + TypeScript + Tailwind CSS starter
          </p>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-lg font-medium">Count: {count}</p>
              <Button 
                onClick={() => setCount((count) => count + 1)}
                className="w-full"
              >
                Click me
              </Button>
              <p className="text-sm text-muted-foreground">
                Edit <code className="bg-muted px-1 py-0.5 rounded">src/App.tsx</code> and save to see changes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
