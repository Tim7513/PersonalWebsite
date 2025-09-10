import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { skills } from '../data';

const Skills = () => {
  const iconMap = {
    FaReact: FaReact,
    FaJs: FaJs,
    SiTypescript: SiTypescript,
    FaHtml5: FaHtml5,
    SiTailwindcss: SiTailwindcss,
    SiNextdotjs: SiNextdotjs,
    FaNodeJs: FaNodeJs,
    FaPython: FaPython,
    FaGitAlt: FaGitAlt,
    FaDocker: FaDocker,
    FaAws: FaAws,
    FaFigma: FaFigma,
  };

  const skillCategories = [
    { 
      name: 'Frontend', 
      skills: skills.frontend.filter(skill => iconMap[skill.icon]), 
      colorClass: 'from-blue-500 to-cyan-500' 
    },
    { 
      name: 'Backend', 
      skills: skills.backend.filter(skill => iconMap[skill.icon]), 
      colorClass: 'from-green-500 to-emerald-500' 
    },
    { 
      name: 'Tools', 
      skills: skills.tools.filter(skill => iconMap[skill.icon]), 
      colorClass: 'from-purple-500 to-pink-500' 
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.colorClass} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <IconComponent className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.colorClass}`}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 