import React from "react";
import { motion } from "framer-motion";

const Enlarge = ({ selectedImg, setselectedImg }) => {
  const handleclick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setselectedImg(null);
    }
    // setselectedImg(null);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleclick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={selectedImg}
        alt="elarged-pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Enlarge;
