import { motion } from "framer-motion";

import { styles } from "../constants/styles";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    return (
      <motion.section
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
        className={`${styles.padding} relative z-0 mx-auto max-w-content`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
