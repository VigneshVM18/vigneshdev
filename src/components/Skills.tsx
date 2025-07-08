import { motion } from 'framer-motion'
import { 
  Layers, 
  Palette, 
  Zap, 
  Eye, 
  Cpu, 
  Globe,
  Box,
  Lightbulb
} from 'lucide-react'

const skills = [
  { name: "Blender", icon: Box, level: 95 },
  { name: "Maya", icon: Layers, level: 90 },
  { name: "ZBrush", icon: Palette, level: 85 },
  { name: "Substance Painter", icon: Eye, level: 92 },
  { name: "Cinema 4D", icon: Globe, level: 88 },
  { name: "Unreal Engine", icon: Zap, level: 83 },
  { name: "3ds Max", icon: Cpu, level: 87 },
  { name: "V-Ray", icon: Lightbulb, level: 91 }
]

export function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-secondary/20" id="skills">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mastery in industry-standard tools and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-card border border-border/50 rounded-xl p-6 text-center transition-all duration-300 hover:glow-subtle hover:border-primary/30">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-4 group-hover:glow-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                
                <div className="relative">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 block">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-card border border-border/50 rounded-xl px-8 py-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-lg">
              <span className="font-bold text-primary">5+</span> years of professional experience
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}