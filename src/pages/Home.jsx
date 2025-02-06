import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={styles.home_container}>
      <motion.h1
        className={styles.game_title}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Rock Paper Scissors
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          type="primary"
          className={styles.play_button}
          onClick={() => navigate('/game')}
        >
          Play
        </Button>
      </motion.div>
    </div>
  );
}

export default Home;
