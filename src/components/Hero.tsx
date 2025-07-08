import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-primary p-1 glow-primary animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-card overflow-hidden">
                  <div className="w-full h-full bg-muted/50 flex items-center justify-center text-4xl font-bold">
                    JS
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -inset-4 rounded-full border border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                3D Artist
              </span>
            </motion.h1>
            
            <motion.h2
              className="text-xl lg:text-2xl text-muted-foreground font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Creating Immersive Digital Experiences
            </motion.h2>
            
            <motion.p
              className="text-lg leading-relaxed text-foreground/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Passionate 3D artist specializing in character modeling, environmental design, 
              and photorealistic rendering. I transform concepts into stunning visual experiences 
              using cutting-edge technology and artistic vision.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:glow-primary transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300">
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}