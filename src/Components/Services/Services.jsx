// import { motion } from "framer-motion";
// import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

// const Services = () => {
//   return (
//     <div className="relative bg-[#424c6] text-white  ">
//       {/* Services Content */}
//       <div className="container mx-auto text-center relative z-10 pt-28">
//         <h3 className="text-3xl md:text-4xl text-center text-[#7E8083] font-bold">
//           M Y <span className="ml-3">S E R V I C E S</span>
//         </h3>
//         <div className=" w-11/12 mx-auto grid md:grid-cols-3 gap-6 pt-10">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#424c61] dark:bg-[#4e585b] p-6 rounded-xl shadow-md"
//           >
//             <FaCode className="text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">Web Development</h3>
//             <p className="mt-2">
//               Creating modern and responsive web applications.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#424c61] dark:bg-[#4e585b] p-6 rounded-xl shadow-md"
//           >
//             <FaPaintBrush className="text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">UI/UX Design</h3>
//             <p className="mt-2">
//               Designing user-friendly interfaces and experiences.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#424c61] dark:bg-[#4e585b] p-6 rounded-xl shadow-md"
//           >
//             <FaMobileAlt className="text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">Mobile Responsive</h3>
//             <p className="mt-2">Ensuring compatibility across all devices.</p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: FaCode,
      title: "Web Development",
      description: "Creating modern and responsive web applications.",
      features: ["React & Next.js", "Tailwind CSS", "Performance Optimization"]
    },
    {
      id: 2,
      icon: FaPaintBrush,
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces and experiences.",
      features: ["Wireframing", "Prototyping", "User Research"]
    },
    {
      id: 3,
      icon: FaMobileAlt,
      title: "Mobile Responsive",
      description: "Ensuring compatibility across all devices.",
      features: ["Cross-browser", "Mobile-first", "Adaptive Design"]
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-[#424c61] text-white pb-20">
      {/* Services Content */}
      <div className="container mx-auto text-center relative z-10 pt-28">
        {/* Title Section - Matching About Me Style */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl text-[#c4c7cd] font-bold tracking-widest">
            M Y <span className="ml-3">S E R V I C E S</span>
          </h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-[#c4c7cd] to-transparent mx-auto mt-4"
          />
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-11/12 mx-auto grid md:grid-cols-3 gap-8 pt-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.08,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-[#2E3440] dark:bg-[#384143] p-8 rounded-2xl shadow-2xl relative overflow-hidden group cursor-pointer"
              >
                {/* Animated Background Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === service.id ? 0.3 : 0,
                    scale: hoveredCard === service.id ? 1.5 : 1
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#424c61] via-[#2E3440] to-transparent blur-2xl"
                />

                {/* Icon Container */}
                <motion.div
                  animate={{
                    rotateY: hoveredCard === service.id ? 360 : 0,
                    scale: hoveredCard === service.id ? 1.2 : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#424c61] rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="text-4xl text-[#c4c7cd]" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#dce3e3] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredCard === service.id ? "auto" : 0,
                      opacity: hoveredCard === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-[#424c61]">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{
                            x: hoveredCard === service.id ? 0 : -20,
                            opacity: hoveredCard === service.id ? 1 : 0
                          }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          className="flex items-center gap-2 mb-2"
                        >
                          <span className="w-2 h-2 bg-[#c4c7cd] rounded-full"></span>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Decorative Corner Element */}
                  <motion.div
                    animate={{
                      scale: hoveredCard === service.id ? 1 : 0,
                      rotate: hoveredCard === service.id ? 45 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-4 right-4 w-8 h-8 border-2 border-[#c4c7cd] opacity-20"
                  />
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredCard === service.id ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#424c61] via-[#c4c7cd] to-[#424c61]"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center gap-2"
        >
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: dot * 0.3
              }}
              className="w-3 h-3 bg-[#c4c7cd] rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
