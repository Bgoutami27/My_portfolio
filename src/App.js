import React from "react";
import Portfolio from "./components/Portfolio";
import { motion } from "framer-motion";

function App() {
    return (
        <div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio 🚀
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              background: "white",
              color: "#ff7e5f",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            
            <Portfolio />
          </motion.button>
        </div>
      );
    }

export default App;
