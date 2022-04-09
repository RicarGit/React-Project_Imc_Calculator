import { calculateImc, Level } from "../../helpers/imc"
import styles from './CalcInputs.module.css'

type Props = {
  toShow: Level | null
  height: number
  weight: number
  handleToShow: (level: Level | null) => void
  handleHeight: (height: number) => void
  handleWeight: (weight: number) => void
}

const CalcInputs = (
  { toShow, height, weight, handleToShow, handleHeight, handleWeight }: Props
) => {
  const calculateButton = () => {
    if (height && weight) {
      return handleToShow(calculateImc(height, weight))
    }

    return alert('Digite seu peso e sua altura para calcular o seu IMC.')
  }

  return (
    <>
      <input
        type="number"
        placeholder="Digite a sua altura: Ex: 1.5 (em metros)"
        value={height <= 0 ? '' : height}
        onChange={e => handleHeight(e.target.valueAsNumber)}
        disabled={toShow ? true : false}
      />

      <input
        type="number"
        placeholder="Digite o seu peso: Ex: 50 (em kg)"
        value={weight <= 0 ? '' : weight}
        onChange={e => handleWeight(e.target.valueAsNumber)}
        disabled={toShow ? true : false}
      />

      <button
        className={styles.arrowButton}
        disabled={toShow ? true : false}
        onClick={calculateButton}>Calcular
      </button>
    </>
  )
}

export default CalcInputs