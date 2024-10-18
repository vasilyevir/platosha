import Row from '@/components/Row';
import styles from './main.module.css';
import Clock from '@/assets/clockwerk.jpg'

const Picks = [
  {
    id: 1,
    src: Clock,
    nameHero: 'Clockwerk',
  },
  {
    id: 2,
    src: Clock,
    nameHero: 'Clockwerk',
    isBan: true,
    align: 'right'
  }
] as const;

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <p>Team Spirit</p>
        <p>Team Spirit</p>
      </header>
      <main className='main'>
        {Picks.map((props, id) => <Row key={id} {...props} />)}
      </main>
    </>
  );
}
