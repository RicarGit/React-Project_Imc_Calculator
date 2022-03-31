import up from '../../assets/up.png'
import down from '../../assets/down.png'
import styles from './GridItem.module.css'
import { Level } from '../../helpers/imc'

type Props = {
  item: Level
  children?: number
}

function GridItem({ item, children }: Props) {
  const { title, backgroundColor, icon, imc } = item
  const [minImcValue, maxImcValue] = imc

  return (
    <div className={styles.boxItem} style={{ backgroundColor }}>
      <figure className={children ? styles.boxThumbIconBigger : styles.boxThumbIcon}>
        <img className={children ? styles.thumbIconBigger : styles.thumbIcon} src={icon === 'up' ? up : down} alt="thumbs_image" />
      </figure>
      <h2 className={children ? styles.boxTitleBigger : styles.boxTitle}>{title}</h2>
      {children
        ? <p className={styles.boxTextBigger}>O valor do seu IMC é: <strong>{children} Kg/m²</strong></p>
        : <p className={styles.boxText}>IMC está entre <strong>{minImcValue}</strong> e <strong>{maxImcValue}</strong></p>
      }
    </div>
  )
}

export default GridItem