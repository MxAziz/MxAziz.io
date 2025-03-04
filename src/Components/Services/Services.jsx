import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import "./Service.css";

const Services = () => {
  return (
    <div className="relative bg-[#424c6] text-white  py- overflow-hidden">
      {/* Water Wave Background */}
      {/* <div className="absolute inset-0 w-full h-32 overflow-hidden leading-none z-0">
        <svg
          className="absolute top-0 left-0 w-full min-w-[1440px] h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#424c61"
            fillOpacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,96C640,117,800,203,960,202.7C1120,203,1280,117,1360,74.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div> */}

      {/* water wave animation youtube */}
      <section className="bg-[#424c61] dark:bg-[#4e585b]">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>

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
