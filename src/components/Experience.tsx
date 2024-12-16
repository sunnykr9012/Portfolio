import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "IT Executive & Operations",
      company: "Drone Destination Ltd.",
      period: "2022 - 2024",
      description: "Leading Project Operations Management, Projects Management, Business Analysis, Data Analysis, Geographic Information Systems (GIS), Data Research and Data Management, MIS, Data Collections.",
      achievements: [
        "Designed and deployed the Chakbandi Web Application, a government project for land measurement, utilizing Machine Learning, Python, React.js, AWS, PostgreSQL, and Leaflet.",
        "Enhanced daily operations by organizing data mining, analysis, and reporting using Google Sheets and others."
      ]
    },
    {
      title: "Web Developer",
      company: "Vintron Informatics Ltd",
      period: "2022 - 2022",
      description: "Developed and maintained web applications using modern technologies and WordPress.",
      achievements: [
        "Created responsive web applications using React and Node.js",
        "Developed responsive and visually engaging WordPress websites tailored for client requirements.",
        "Maintained diverse websites, including blogs, business sites, portfolios, and e-commerce stores, ensuring responsive design and optimal performance.",
        "Built high-performing e-commerce and portfolio websites, including goflashservices.in."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Professional Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A track record of success in AI development, data science, and web development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="mb-12 relative pl-8 border-l-2 border-purple-300"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Briefcase className="w-3 h-3 text-white" />
                </motion.div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-purple-600 group-hover:text-indigo-600 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h4 className="text-lg font-medium text-gray-700 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {exp.company}
                </h4>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start group-hover:text-gray-900 transition-colors duration-300"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 group-hover:bg-indigo-500 transition-colors duration-300"></span>
                      <span className="text-gray-600 group-hover:text-gray-800">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
