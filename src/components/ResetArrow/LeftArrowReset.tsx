import styles from './LeftArrowReset.module.css'
import leftArrow from '../../assets/leftarrow.png'
import { Props } from '../GridItem/GridItem'

function LeftArrowReset({ item, toShow, height, weight }: Props) {
  return (
    <button onClick={() => {
      item.imcResult = undefined
      height(0)
      weight(0)
      toShow(null)
    }} className={styles.leftArrowContainer}>
      <img className={styles.leftArrow} src={leftArrow} alt="" />
    </button>
  )
}

export default LeftArrowReset