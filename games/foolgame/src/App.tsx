import { useContext } from 'react';
import styles from './App.module.scss';
import { Board } from './components/Board';
import { Hand } from './components/Hand';
import { FoolGameContext } from './context';

function App(): JSX.Element {
	const { game } = useContext(FoolGameContext);
	const [john, sam] = game.getPlayers();

	return (
		<div className={styles.game}>
			<div className={styles.p2}>
				<Hand player={sam} />
			</div>
			<div className={styles.board}>
				<Board />
			</div>
			<div className={styles.deck} />
			<div className={styles.p1}>
				<Hand player={john} />
			</div>
		</div>
	);
}

export default App;
