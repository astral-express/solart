"use client";

import { motion } from "framer-motion";
import { IconWeatherSunny, IconInputCursorMove } from "./react-svg";

export const RotatingSunIcon = () => (
  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{ repeat: Infinity, duration: 30 }}
  >
    <IconWeatherSunny />
  </motion.div>
);
