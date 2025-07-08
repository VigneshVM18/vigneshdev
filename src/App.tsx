
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/LoadingScreen'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <main>
              <section id="home">
                <Hero />
              </section>
              <Portfolio />
              <Skills />
              <Contact />
            </main>
            
            {/* Footer */}
            <footer className="py-8 px-6 border-t border-border/50 bg-card/30">
              <div className="container mx-auto text-center">
                <p className="text-muted-foreground">
                  © 2024 3D Artist Portfolio. Crafted with passion and precision.
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
