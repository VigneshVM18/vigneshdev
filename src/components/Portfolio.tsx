import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'

const projects = [
  {
    id: 1,
    title: "Cyberpunk Character",
    description: "Futuristic character design with advanced texturing and lighting techniques.",
    image: "https://images.unsplash.com/photo-1551792355-40b70eedc851?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Ancient Temple",
    description: "Photorealistic environmental modeling with atmospheric effects.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Mechanical Robot",
    description: "Complex mechanical design with procedural materials and animations.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac1?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Fantasy Landscape",
    description: "Magical environment with dynamic lighting and particle effects.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Space Station",
    description: "Sci-fi architecture with detailed materials and atmospheric rendering.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Vehicle Design",
    description: "Concept vehicle with advanced surfacing and realistic materials.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  }
]

export function Portfolio() {
  return (
    <section className="py-20 px-6" id="portfolio">
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
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest 3D projects, each crafted with precision and artistic vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gradient-card border-border/50 overflow-hidden transition-all duration-300 hover:glow-subtle">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full px-4 py-2 bg-primary/90 text-primary-foreground rounded-lg font-medium backdrop-blur-sm">
                      View Details
                    </button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}