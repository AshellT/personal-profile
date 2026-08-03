import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";

interface IHeader {
  useMotion?: boolean;
  p: string;
  h2: string;
}

export const Header: React.FC<IHeader> = ({ useMotion = true, p, h2 }) => {
  const content = (
    <div className="max-w-3xl">
      <p className={styles.sectionLabel}>{p}</p>
      <h2 className={`${styles.sectionHead} mt-3`}>{h2}</h2>
    </div>
  );

  if (!useMotion) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
};
