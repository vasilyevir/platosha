import Image, { StaticImageData } from "next/image";
import styles from './Row.module.css'

interface RowProps {
  align?: 'left' | 'right'
  nameHero: string;
  src: StaticImageData;
  isBan?: boolean;
  id: number
}

export default function Row ({align = 'left', isBan = false, src, nameHero, id}: RowProps) {
  return (
    <div className={styles.row}>
        {align === 'left' ? (
          <div className={styles.card}>
            <Image className={styles.image} src={src} alt={nameHero}/>
            <p>{nameHero}</p>
          </div>
        ) : <div />}
        <div>
          <p className={styles.text}>{isBan ? 'Pick ' + id: 'Ban' + id}</p>
        </div>
        {align === 'right' ? (
          <div className={styles.cardReverce}>
            <Image className={styles.image} src={src} alt={nameHero}/>
            <p>{nameHero}</p>
          </div>
        ) : <div />}
    </div>
  )
}