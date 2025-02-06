import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import styles from './Scoreboard.module.css';

function ScoreCounter({ score }) {
  const [displayScore, setDisplayScore] = useState(score);

  useEffect(() => {
    const controls = animate(displayScore, score, {
      duration: 0.5,
      onUpdate: (latest) => setDisplayScore(Math.round(latest)),
    });
    return () => controls.stop();
  }, [score]);

  return (
    <motion.p
      className={`${styles.score_value} ${styles.score_value_updated}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayScore}
    </motion.p>
  );
}

export default ScoreCounter;
