import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="relative bg-[#424c6] text-white  ">
      {/* Services Content */}
      <div className="container mx-auto text-center relative z-10 pt-28">
        <h3 className="text-3xl md:text-4xl text-center text-[#7E8083] font-bold">
          M Y <span className="ml-3">S E R V I C E S</span>
        </h3>
        <div className=" w-11/12 mx-auto grid md:grid-cols-3 gap-6 pt-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#424c61] p-6 rounded-xl shadow-md"
          >
            <FaCode className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="mt-2">
              Creating modern and responsive web applications.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#424c61] p-6 rounded-xl shadow-md"
          >
            <FaPaintBrush className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="mt-2">
              Designing user-friendly interfaces and experiences.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#424c61] p-6 rounded-xl shadow-md"
          >
            <FaMobileAlt className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Mobile Responsive</h3>
            <p className="mt-2">Ensuring compatibility across all devices.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
