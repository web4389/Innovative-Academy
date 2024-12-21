import { FiLogOut } from "react-icons/fi";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav className="w-full overflow-x-hidden font-poppins_Regular">
        <ul className="flex w-full justify-between items-center py-5">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: 0.3,
              },
            }}
            className="text-xl font-semibold font-Montserrat_Regular
            text-gray-800 cursor-pointer"
          >
            InnovativeEDU
          </motion.h1>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: 0.8,
              },
            }}
          >
            <FiLogOut className="w-[22px] h-[22px] cursor-pointer hover:scale-110 transition duration-200" />
          </motion.div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
