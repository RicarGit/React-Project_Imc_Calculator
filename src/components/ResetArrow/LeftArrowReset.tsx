import styles from './LeftArrowReset.module.css'
import leftArrow from '../../assets/leftarrow.png'
import { Level } from '../../helpers/imc'

type States = {
  item: Level,
  setToShow: any,
  setHeight: any,
  setWeight: any
}

function LeftArrowReset({ item, setToShow, setHeight, setWeight }: States) {
  return (
    <button onClick={() => {
      item.imcResult = undefined
      setHeight(0)
      setWeight(0)
      setToShow(null)
    }} className={styles.leftArrowContainer}>
      <img className={styles.leftArrow} src={leftArrow} alt="" />
    </button>
  )
}

export default LeftArrowReset