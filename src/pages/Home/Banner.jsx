import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50,}}
            animate={{ opacity: 1, y: 0,}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-5xl font-bold"
          >
            Latest <motion.span animate={{
                color: ['#ff5733','#db0bec','#0b18ec','#0becb9','#45ec0b','#a3798c'],
                transition: {duration: 4, repeat: Infinity}
                }}>job</motion.span> For You
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
