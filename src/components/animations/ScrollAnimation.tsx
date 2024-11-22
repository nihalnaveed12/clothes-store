"use client";
import { motion} from "framer-motion";


export default function BlogAnimation(
  { children }: { children: React.ReactNode }
) {
  return (
    <motion.div
      initial={{ opacity: 0, y:-20 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1.5, delay:0.2 }}
      exit={{ opacity: 2, y:20 }}
    >
      {children}
    </motion.div>
  );
}