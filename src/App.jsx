import { motion } from "framer-motion";

export default function App() {
  const titleVariant = {
    hidden: { y: 180, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="main">
      <motion.section>
        <motion.div className="max-w-4xl mx-auto px-4 py-20">
          <motion.h1
            className="text-9xl font-bold text-center"
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span>Spark</span><span className="text-[#EFBF04]">Up</span>
          </motion.h1>

          <motion.h1
            className="text-9xl font-bold text-center mt-12"
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          >
            Summit
          </motion.h1>

          <motion.p
            className="text-center mt-4 text-2xl"
            initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Sparking <span className="text-[#ebbf04]">Innovation</span>, Fueling Growth
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}