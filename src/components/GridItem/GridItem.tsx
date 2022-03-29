import up from '../../assets/up.png'
import down from '../../assets/down.png'
import styles from './GridItem.module.css'
import { Level } from '../../helpers/imc'

type Props = {
  item: Level
}

function GridItem({ item }: Props) {
  const { title, color, icon, imc } = item
  const [minImcValue, maxImcValue] = imc

  return (
    <div className={styles.boxItem} style={{ backgroundColor: color }}>
      <figure className={styles.boxThumbIcon}>
        <img className={styles.thumbIcon} src={icon === 'up' ? up : down} alt="thumbs_image" />
      </figure>
      <h2 className={styles.boxTitle}>{title}</h2>
      <p className={styles.boxText}>IMC está entre <strong>{minImcValue}</strong> e <strong>{maxImcValue}</strong></p>
    </div>
  )
}

export default GridItem