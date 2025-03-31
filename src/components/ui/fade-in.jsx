import { motion } from "framer-motion";

export function FadeIn({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ children, className }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
