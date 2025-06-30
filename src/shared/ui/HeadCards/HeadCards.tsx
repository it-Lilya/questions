import styles from './HeadCards.module.scss';

interface HeadCardProps {
  title: string;
  onButtonClick?: () => void;
  btn: boolean
}

const HeadCards = ({ title, onButtonClick, btn = true }: HeadCardProps) => {
  return (
    <div className={styles.header_container}>
			<h3 className={styles.head}>{title}</h3>
			{btn && <button
        type='button'
        className={styles.btn_frame}
        onClick={onButtonClick}
      ></button>}
		</div>
  )
}

export default HeadCards;