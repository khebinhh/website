import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import picklepalImage from "@assets/IMG_3796_1749170881011.jpeg";
import ufoImage from "@assets/ufo.png";

const projects = [
  {
    title: "PicklePal",
    description: "A web-based pickleball community platform with matchmaking and tournament features. Connect with pickleball players, join tournaments, track achievements, and improve your game.",
    image: picklepalImage,
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "UFO Sightings Analysis & Prediction",
    description: "Machine learning application that analyzes UFO sighting patterns across the US. Features interactive maps, predictive models using Random Forest and Neural Networks, and natural language processing of sighting descriptions with geospatial encoding.",
    image: ufoImage,
    technologies: ["Python", "Streamlit", "TensorFlow", "Scikit-learn", "Plotly", "NLTK"],
    github: "#",
    demo: "#"
  }
];

const techColors: Record<string, string> = {
  React: "bg-blue-100 text-blue-800",
  "Node.js": "bg-orange-100 text-orange-800",
  TypeScript: "bg-blue-100 text-blue-800",
  PostgreSQL: "bg-orange-100 text-orange-800",
  Python: "bg-blue-100 text-blue-800",
  Streamlit: "bg-orange-100 text-orange-800",
  TensorFlow: "bg-blue-100 text-blue-800",
  "Scikit-learn": "bg-orange-100 text-orange-800",
  Plotly: "bg-blue-100 text-blue-800",
  NLTK: "bg-orange-100 text-orange-800",
  MongoDB: "bg-blue-100 text-blue-800",
  "React Native": "bg-blue-100 text-blue-800",
  Firebase: "bg-orange-100 text-orange-800",
  Redux: "bg-blue-100 text-blue-800",
  "D3.js": "bg-orange-100 text-orange-800",
  Flask: "bg-orange-100 text-orange-800"
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">A showcase of my recent work and technical capabilities</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden card-hover h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} className="text-primary hover:text-blue-700">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demo} className="text-primary hover:text-blue-700">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`text-sm ${techColors[tech] || "bg-gray-100 text-gray-800"}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="inline-flex items-center">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
