import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Database, 
  Code2, 
  LineChart, 
  Bot, 
  Layout,
  Terminal,
  GitBranch
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "TensorFlow, PyTorch, Scikit-learn",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Python, Pandas, NumPy, SQL",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "React, TypeScript, Node.js",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Power BI, Plotly, Tableau",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Development",
      description: "NLP, Computer Vision, Deep Learning",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Frontend",
      description: "HTML5, CSS3, JavaScript",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Backend",
      description: "Express.js, FastAPI, Mongo DB",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Version Control",
      description: "Git, GitHub, CI/CD",
      color: "from-violet-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining data science and web development expertise to create
            intelligent and interactive solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                rotate: 3,
              }}
              className="relative bg-white p-6 rounded-xl shadow-lg overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-purple-600 mb-4"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
