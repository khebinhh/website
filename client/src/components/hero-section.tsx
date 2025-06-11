import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center gradient-bg text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-300">Kevin Ramirez</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Full Stack Developer & Computer Science Student passionate about creating innovative web applications and bringing ideas to life through code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border-gray-200 transition-all duration-300 transform hover:scale-105 shadow-sm"
              size="lg"
              style={{ color: 'white', borderColor: 'white' }}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="mx-auto text-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
