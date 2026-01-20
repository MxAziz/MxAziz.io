import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="pt-8 md:pt-16 pb-14 md:pb-24 lg:pb-28 mt-28 md:mt-36 bg-[#424c61] dark:bg-[#4e585b] rounded-[50px] md:rounded-[100px] lg:rounded-[120px] overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h3 className="text-3xl md:text-4xl pt-12 text-[#c4c7cd] font-bold tracking-widest">
          A B O U T <span className="ml-3">M E</span>
        </h3>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-transparent via-[#c4c7cd] to-transparent mx-auto mt-4"
        />
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center gap-4 mt-12 px-4"
      >
        {['about', 'education', 'experience'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'bg-[#2E3440] text-[#c4c7cd] shadow-lg scale-105'
                : 'bg-transparent text-gray-300 hover:bg-[#2E3440]/50'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="mt-10 px-4"
      >
        {/* About Tab */}
        {activeTab === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#2E3440] dark:bg-[#384143] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#424c61] rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#424c61] rounded-full blur-3xl opacity-30 -ml-16 -mb-16"></div>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-200 leading-relaxed relative z-10"
              >
                Hello, I'm <span className="font-bold text-[#c4c7cd]">Muhammad Aziz</span>, a
                first-year student at Pabna University of Science and Technology
                (PUST), pursuing a degree in{' '}
                <span className="font-bold text-[#c4c7cd]">
                  Information and Communication Engineering (ICE)
                </span>
                .
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-200 leading-relaxed mt-6 relative z-10"
              >
                I'm a passionate Frontend Developer dedicated to crafting seamless and
                interactive web experiences. My journey into programming started
                with curiosity and has evolved into a deep passion for building
                dynamic, user-friendly applications.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-4 mt-8 relative z-10"
              >
                <div className="bg-[#424c61] p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <h5 className="font-bold text-[#c4c7cd] mb-2">🎨 Specialization</h5>
                  <p className="text-gray-300 text-sm">
                    React, Tailwind CSS, and modern web technologies
                  </p>
                </div>
                <div className="bg-[#424c61] p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <h5 className="font-bold text-[#c4c7cd] mb-2">💡 Philosophy</h5>
                  <p className="text-gray-300 text-sm">
                    Clean code, continuous learning, and exceptional UX
                  </p>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-200 leading-relaxed mt-6 relative z-10"
              >
                Let's build something amazing together! 🚀
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-[#2E3440] dark:bg-[#384143] p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#424c61]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#424c61] rounded-full flex items-center justify-center text-3xl">
                    🎓
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-[#dce3e3]">
                      Education
                    </h4>
                    <div className="w-20 h-1 bg-[#c4c7cd] mt-2"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-xl font-bold text-[#c4c7cd]">
                    Pabna University of Science and Technology
                  </h5>
                  <p className="text-gray-300 text-lg">
                    B.Sc. in Information and Communication Engineering (ICE)
                  </p>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 bg-[#c4c7cd] rounded-full"></span>
                    <span className="text-sm">2024 - Present</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-[#2E3440] dark:bg-[#384143] p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#424c61]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#424c61] rounded-full flex items-center justify-center text-3xl">
                    💼
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-[#dce3e3]">
                      Experience
                    </h4>
                    <div className="w-20 h-1 bg-[#c4c7cd] mt-2"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-xl font-bold text-[#c4c7cd]">
                    Frontend Developer
                  </h5>
                  <p className="text-gray-300 text-lg">
                    __________________ | Internship
                  </p>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 bg-[#c4c7cd] rounded-full"></span>
                    <span className="text-sm">February 2025 - Present</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default About;