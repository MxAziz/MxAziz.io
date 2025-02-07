// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const skillsData = [
//   { name: "HTML", level: 95 },
//   { name: "CSS", level: 90 },
//   { name: "JavaScript", level: 85 },
//   { name: "Node.js", level: 80 },
//   { name: "MongoDB", level: 75 },
//   { name: "TailwindCSS", level: 90 },
//   { name: "Express.js", level: 80 },
//   { name: "Next.js", level: 45 },
//   { name: "Firebase", level: 70 },
//   { name: "Git", level: 85 },
//   { name: "Git", level: 85 },
// ];

// const Skills = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6  rounded-xl shadow-lg mt-10 text-center">
//       <h3 className=" text-3xl  mt-12 text-[#7E8083] font-bold">
//           S K I L L S
//         </h3>
//       <ResponsiveContainer width="100%" height={400}>
//         <BarChart data={skillsData} layout="vertical" margin={{ left: 30 }}>
//           <XAxis type="number" domain={[0, 100]} hide />
//           <YAxis
//             type="category"
//             dataKey="name"
//             width={100}
//             tick={{ fontSize: 14 }}
//           />
//           <Tooltip cursor={{ fill: "#f0f0f0" }} />
//           <Bar dataKey="level" fill="#4F46E5" radius={[0, 10, 10, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Skills;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const skillRef = useRef();
  const isInView = useInView(skillRef, { once: true });

  return (
    <motion.div
      ref={skillRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className=" text-white lg:p-20 max-w-6xl mx-auto p-6  mt-10 "
    >
      <h3 className=" text-3xl md:text-4xl text-center  text-[#7E8083] font-bold">
        M Y <span className=" ml-3">S K I L L S</span>
      </h3>
      <div className="flex lg:flex-row flex-col gap-10 justify-center items-center">
        {/* Technical Skills */}
        <motion.div
          className="pt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-3xl bold pb-5">Technical Skills:</p>
          {[
            { skill: "HTML", value: 85 },
            { skill: "CSS", value: 70 },
            { skill: "Tailwind CSS", value: 90 },
            { skill: "JavaScript", value: 72 },
            { skill: "React js", value: 85 },
            { skill: "Firebase", value: 75 },
            { skill: "Node js", value: 50 },
            { skill: "Express js", value: 66 },
            { skill: "MongoDB", value: 60 },
            { skill: "Next js", value: 30 },
            { skill: "Git", value: 80 },
            { skill: "Github", value: 85 },
            { skill: "Microsoft Office", value: 86 },
          ].map((item, index) => (
            <motion.p
              key={index}
              className="text-[18px] flex gap-2 justify-start items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {index + 1}. {item.skill}{" "}
              <progress
                className="progress text-[#55828c] bg-gray-700 w-56"
                value={item.value}
                max="100"
              ></progress>
            </motion.p>
          ))}
        </motion.div>

        {/* Interpersonal Skills */}
        <motion.div
          className="pt-10"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-3xl bold pb-5">Interpersonal Skills:</p>
          {[
            { skill: "Active Listener", value: 80 },
            { skill: "Fast Learning Attitude", value: 80 },
            { skill: "Problem-solving Attitude", value: 50 },
          ].map((item, index) => (
            <motion.p
              key={index}
              className="text-[18px]"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              {index + 1}. {item.skill}{" "}
              <progress
                className="progress text-[#55828c] bg-gray-700 w-56"
                value={item.value}
                max="100"
              ></progress>
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
