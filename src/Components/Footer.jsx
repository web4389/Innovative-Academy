import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center text-center overflow-hidden pt-5 font-poppins_Regular">
        <motion.p
          style={{ color: "rgb(31, 41, 55)" }}
          className={`text-xl font-semibold py-[16px] text-center font-Montserrat_Regular`}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          InnovativeEDU
        </motion.p>
        <div
          className={`w-full h-[1px] bg-[#c2c2c2] px-10 opacity-50 rounded`}
        ></div>

        <motion.p
          className="text-gray-800 max-sm:text-[14px] text-[15px] py-[16px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
            delay: 0.4,
          }}
          style={{ color: "rgb(75, 85, 99)" }}
        >
          © 2024 | Find News™ | Shilok kumar
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
