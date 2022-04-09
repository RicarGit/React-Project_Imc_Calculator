import { useState } from 'react';
import { levels, Level } from './helpers/imc'
import styles from './App.module.css'
import logo from './assets/powered.png'
import { GridItem } from './components/GridItem'
import { CalcInputs } from './components/CalcInputs'

function App() {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleHeight = (height: number) => setHeightField(height)
  const handleWeight = (weight: number) => setWeightField(weight)
  const handleToShow = (level: Level | null) => setToShow(level)

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

          <CalcInputs
            toShow={toShow}
            height={heightField}
            weight={weightField}
            handleToShow={handleToShow}
            handleHeight={handleHeight}
            handleWeight={handleWeight} />
        </section>

        <section className={!toShow ? styles.rightSide : styles.rightSideBig}>
          {!toShow && levels.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              toShow={handleToShow}
              height={handleHeight}
              weight={handleWeight} />
          ))}

          {toShow &&
            <GridItem
              item={toShow}
              toShow={handleToShow}
              height={handleHeight}
              weight={handleWeight} />
          }
        </section>

      </main >
    </div >
  )
}

export default App;