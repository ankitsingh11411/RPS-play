import styles from './ChoiceButtons.module.css';

function ChoiceButtons({ playRound }) {
  const choices = [
    { name: 'rock', img: '/rock.png' },
    { name: 'paper', img: '/paper.png' },
    { name: 'scissors', img: '/scissors.png' },
  ];

  return (
    <div className={styles.button_container}>
      {choices.map((choice) => (
        <button
          key={choice.name}
          className={styles.choice_button}
          onClick={() => playRound(choice.name)}
        >
          <img
            src={choice.img}
            alt={choice.name}
            className={styles.choice_image}
          />
        </button>
      ))}
    </div>
  );
}

export default ChoiceButtons;
