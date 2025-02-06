import { useState } from 'react';
import ChoiceButtons from '../components/ChoiceButtons';
import Scoreboard from '../components/Scoreboard';
import ResultModal from '../components/ResultModal';
import styles from './Game.module.css';

function Game() {
  const [playerScore, setPlayerScore] = useState(
    parseInt(localStorage.getItem('playerScore')) || 0
  );
  const [cpuScore, setCpuScore] = useState(
    parseInt(localStorage.getItem('cpuScore')) || 0
  );
  const [playerChoice, setPlayerChoice] = useState('');
  const [cpuChoice, setCpuChoice] = useState('');
  const [result, setResult] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const choices = ['rock', 'paper', 'scissors'];

  function playRound(playerSelection) {
    const cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(playerSelection);
    setCpuChoice(cpuSelection);

    let roundResult = '';
    if (playerSelection === cpuSelection) {
      roundResult = "It's a Draw!";
    } else if (
      (playerSelection === 'rock' && cpuSelection === 'scissors') ||
      (playerSelection === 'paper' && cpuSelection === 'rock') ||
      (playerSelection === 'scissors' && cpuSelection === 'paper')
    ) {
      roundResult = 'You Win!';
      setPlayerScore((prev) => {
        const newScore = prev + 1;
        localStorage.setItem('playerScore', newScore);
        return newScore;
      });
    } else {
      roundResult = 'CPU Wins!';
      setCpuScore((prev) => {
        const newScore = prev + 1;
        localStorage.setItem('cpuScore', newScore);
        return newScore;
      });
    }

    setResult(roundResult);
    setIsModalOpen(true);
  }

  return (
    <div className={styles.game_container}>
      <div className={styles.game_box}>
        <h1 className={styles.title}>Rock Paper Scissors</h1>
        <Scoreboard
          playerScore={playerScore}
          cpuScore={cpuScore}
          setPlayerScore={setPlayerScore}
          setCpuScore={setCpuScore}
        />
        <ChoiceButtons playRound={playRound} />
        <ResultModal
          result={result}
          playerChoice={playerChoice}
          cpuChoice={cpuChoice}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
}

export default Game;
