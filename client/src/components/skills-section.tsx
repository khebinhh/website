import { motion } from "framer-motion";
import { Code, Server, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "bg-blue-100 text-blue-600",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "bg-orange-100 text-orange-600",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 92 },
      { name: "Express.js", level: 85 }
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "bg-blue-100 text-blue-600",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 70 }
    ]
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "bg-orange-100 text-orange-600",
    skills: [
      { name: "AWS", level: 78 },
      { name: "Docker", level: 82 },
      { name: "Git", level: 90 }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${category.color}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ 
                          backgroundColor: category.color.includes('blue') ? '#2563eb' :
                                          category.color.includes('orange') ? '#f97316' :
                                          '#2563eb'
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
