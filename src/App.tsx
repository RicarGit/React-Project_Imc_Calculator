import { useState } from 'react';
import { levels, calculateImc, Level } from './helpers/imc'
import styles from './App.module.css'
import logo from './assets/powered.png'
import { GridItem } from './components/GridItem/GridItem';

function App() {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleHeight = (height: number) => setHeightField(height)
  const handleWeight = (weight: number) => setWeightField(weight)
  const handleToShow = (level: Level | null) => setToShow(level)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      return setToShow(calculateImc(heightField, weightField))
    }

    return alert('Digite seu peso e sua altura para calcular o seu IMC.')
  }

  return (
    <div>

      <header className={styles.headerContainer}>
        <img className={styles.logo} src={logo} alt="imc_powered_by_b7web" />
      </header>

      <main className={styles.mainContainer}>
        <section className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro
            adotado pela Organização Mundial de Saúde para
            calcular o peso ideal de cada pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura: Ex: 1.5 (em metros)"
            value={heightField <= 0 ? '' : heightField}
            onChange={e => setHeightField(e.target.valueAsNumber)}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso: Ex: 50 (em kg)"
            value={weightField <= 0 ? '' : weightField}
            onChange={e => setWeightField(e.target.valueAsNumber)}
            disabled={toShow ? true : false}
          />
          <button disabled={toShow ? true : false} onClick={handleCalculateButton}>Calcular</button>
        </section>

        <section className={!toShow ? styles.rightSide : styles.rightSideBig}>
          {!toShow && levels.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
          {toShow && <GridItem item={toShow} toShow={handleToShow} height={handleHeight} weight={handleWeight} />}
        </section>

      </main >
    </div >
  )
}

export default App;