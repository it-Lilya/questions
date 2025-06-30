import type { ReactNode } from "react";

import { motion, AnimatePresence } from "framer-motion";

interface ContentTransitionProps {
  children: ReactNode;
  keyProp: string | number;
}

const ContentTransition = ({
  children,
  keyProp,
}: ContentTransitionProps) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={keyProp}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default ContentTransition;