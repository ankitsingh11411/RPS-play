import { Button } from 'antd';
import styles from './Scoreboard.module.css';

function Scoreboard({ playerScore, cpuScore, setPlayerScore, setCpuScore }) {
  const resetScores = () => {
    localStorage.removeItem('playerScore');
    localStorage.removeItem('cpuScore');
    setPlayerScore(0);
    setCpuScore(0);
  };

  return (
    <div className={styles.scoreboard}>
      <h2>Scoreboard</h2>
      <p>
        Player: <strong>{playerScore}</strong>
      </p>
      <p>
        CPU: <strong>{cpuScore}</strong>
      </p>
      <Button
        type="primary"
        danger
        className={styles.reset_button}
        onClick={resetScores}
      >
        Reset Scores
      </Button>
    </div>
  );
}

export default Scoreboard;
