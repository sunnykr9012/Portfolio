import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Global-Infrastructure-Networks.",
      description: "Global-Infrastructure-Networks",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Vite", "Bolt AI", "TypeScript","Next.js", "React", "Three.js", "neural network", "Algorithm", "DSA", "TailWind CSS","Motion Effect","Licuid-react effect","framer-motion",],
      github: "https://github.com/sunnykr9012/Global-Infrastructure-Networks.git",
      demo: "https://global-infrastructure-networks.vercel.app/"
    },
    {
      title: "Real-Time Data Analytics Dashboard Power BI",
      description: "Real-time data visualization platform with predictive analytics streamline drone operations, achieving 100% reporting accuracy Delivered executive-level MIS reports to the COO, and CEO enhancing strategic decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["Power BI ", "Google Sheet", "SQL",],
      github: "https://github.com/sunnykr9012/Real-time-interactive-Power-BI-dashboards-for-drone-operations.git",
      demo: "#"
    },
    
    {
      title: "Create the Chakbandi Web Application.",
      description: "government project for land measurement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Machine Learning", "AWS", "React","PostgreSQL","Leaflet"],
      github: "https://github.com/sunnykr9012/Chakbandi-Project-.git",
      demo: "#"
    },
    {
      title: "AI Startup Landing Page.",
      description: "Transform Your Business with Advanced AI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Vite", "Bolt AI", "TypeScript", "React", "TailWind CSS","Motion Effect","Licuid effect"],
      github: "https://github.com/sunnykr9012/Modern-AI-Startup-Website.git",
      demo: "https://modern-ai-startup-website.vercel.app/"
    },
    {
      title: "AI-Based Lead SaaS Web Application: Transform Business Data into Actionable Leads.",
      description: "AI-driven Lead SaaS Web Application that transforms business data into actionable insights",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
      tags: ["Vite", "Bolt AI", "TypeScript", "React"],
      github: "https://github.com/sunnykr9012/AI-Based-Lead-Generation-SAAS-Web-Application.git",
      demo: "https://ai-based-lead-generation-saas-web-application.vercel.app/"
    },
    
    {
      title: "Build SaaS Web Application Automatic-Data cleaning-modeling-and-quality-enhancement Excel Data.",
      description: "web application for automatic data cleaning, modeling, and quality enhancement of Excel files",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Vite", "Bolt AI", "TypeScript", "React"],
      github: "https://github.com/sunnykr9012/Automatic-cleaning-modeling-and-quality-enhancement.git",
      demo: "https://automatic-cleaning-modeling-and-quality-enhancement.vercel.app/"
    },
    {
      title: "neural-network-visualization.",
      description: "Interactive 3D visualization of a neural network architecture",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Vite", "Bolt AI", "TypeScript", "React","Algorithm","neural network"],
      github: "https://github.com/sunnykr9012/Neural-Network-Visualization.git",
      demo: "https://neural-network-visualization-mu.vercel.app/"

    },
    
    {
      title: "Build high-performing e-commerce and portfolio websites.",
      description: "maintained diverse websites, including blogs, business sites, portfolios, and e-commerce stores, ensuring responsive design and optimal performances",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["WordPress",],
      github: "#",
      demo: "#"
    },
    
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my expertise in AI, data analysis, and web development
            through real-world applications.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;