import { Button, Card, Divider } from 'antd';
import { motion } from 'framer-motion';
import ScoreCounter from './ScoreCounter';
import styles from './Scoreboard.module.css';

function Scoreboard({ playerScore, cpuScore, setPlayerScore, setCpuScore }) {
  const resetScores = () => {
    localStorage.removeItem('playerScore');
    localStorage.removeItem('cpuScore');
    setPlayerScore(0);
    setCpuScore(0);
  };

  return (
    <motion.div
      className={styles.scoreboard}
      key={playerScore + cpuScore}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.95, rotate: 2 }}
      transition={{ duration: 0.5 }}
    >
      <Card bordered={false} className={styles.scoreboard_card}>
        <div className={styles.score_container}>
          <div className={styles.score_section}>
            <h3 className={styles.score_heading}>Player</h3>
            <ScoreCounter score={playerScore} />
          </div>
          <Divider type="vertical" className={styles.divider} />
          <div className={styles.score_section}>
            <h3 className={styles.score_heading}>CPU</h3>
            <ScoreCounter score={cpuScore} />
          </div>
        </div>
      </Card>
      <Button
        type="primary"
        danger
        className={styles.reset_button}
        onClick={resetScores}
      >
        Reset Scores
      </Button>
    </motion.div>
  );
}

export default Scoreboard;
