import { Modal } from 'antd';
import { motion } from 'framer-motion';
import styles from './ResultModal.module.css';

function ResultModal({ result, playerChoice, cpuChoice, isOpen, setIsOpen }) {
  const getResultColor = () => {
    if (result === 'You Win!') return styles.win;
    if (result === 'You Lose!') return styles.lose;
    return styles.draw;
  };

  return (
    <Modal
      title="Game Result"
      open={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
      className={styles.modal}
    >
      <motion.div
        className={styles.result_content}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {result === 'You Win!' && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src="/Group 5.png"
              alt="Confetti"
              className={styles.confetti}
            />
            <img src="/Vector (1).png" alt="Trophy" className={styles.trophy} />
          </motion.div>
        )}
        <p>
          You chose: <strong className={styles.choice}>{playerChoice}</strong>
        </p>
        <p>
          CPU chose: <strong className={styles.choice}>{cpuChoice}</strong>
        </p>
        <h2 className={`${styles.result_text} ${getResultColor()}`}>
          {result}
        </h2>
      </motion.div>
    </Modal>
  );
}

export default ResultModal;
