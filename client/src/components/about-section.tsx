import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import professionalPhoto from "@assets/638839682170237023_1749169635374.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Computer Science student with a focus on full-stack web development and modern technologies
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-gray-600">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-gray-500">California State University, Fullerton • Graduated May 2025</p>
                <p className="text-sm text-primary font-medium">GPA: 3.17</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Trophy className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Achievements</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dean's List for Spring 2025</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img
              src={professionalPhoto}
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto object-cover object-top h-80"
            />
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                Started coding in community college after returning from University of California, Irvine as a Biomedical Engineering major and switched to Computer Science.
                Currently pursuing advanced coursework in machine learning, distributed systems, and software engineering 
                while building projects that can align with my interests and future career goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
