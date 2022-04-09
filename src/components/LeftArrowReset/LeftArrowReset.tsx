import styles from './LeftArrowReset.module.css'
import leftArrow from '../../assets/leftarrow.png'
import { Props } from '../GridItem'

function LeftArrowReset({ item, toShow, height, weight }: Props) {
  return (
    <button
      className={styles.leftArrowContainer}
      onClick={() => {
        item.imcResult = undefined
        height(0)
        weight(0)
        toShow(null)
      }}>

      <img className={styles.leftArrow} src={leftArrow} alt="" />
    </button>
  )
}

export { LeftArrowReset }