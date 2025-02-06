import { Modal } from 'antd';
import styles from './ResultModal.module.css';

function ResultModal({ result, playerChoice, cpuChoice, isOpen, setIsOpen }) {
  return (
    <Modal
      title="Game Result"
      open={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
    >
      <div className={styles.result_content}>
        {result === 'You Win!' && (
          <>
            <img
              src="/Group 5.png"
              alt="Confetti"
              className={styles.confetti}
            />
            <img src="/Vector (1).png" alt="Trophy" className={styles.trophy} />
          </>
        )}
        <p>
          You chose: <strong>{playerChoice}</strong>
        </p>
        <p>
          CPU chose: <strong>{cpuChoice}</strong>
        </p>
        <h2>{result}</h2>
      </div>
    </Modal>
  );
}

export default ResultModal;
