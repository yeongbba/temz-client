import styles from './BasicButton.module.css';

type Props = {
  text: string;
  onClick: () => void;
  white?: boolean;
  disabled?: boolean;
};

export default function BasicButton({
  text,
  onClick,
  white,
  disabled = false,
}: Props) {
  return (
    <button
      className={`${styles.btn} ${disabled && styles.disabled} ${white ? styles.white : styles.gray}`}
      onClick={() => onClick()}
      disabled={disabled}>
      {text}
    </button>
  );
}
