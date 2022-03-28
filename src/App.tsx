import { useState } from 'react';
import styles from './App.module.css'
import logo from './assets/powered.png'

function App() {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      return
    }

    alert('Algo deu errado...')
  }

  return (
    <div>

      <header className={styles.headerContainer}>
        <img className={styles.logo} src={logo} alt="imc_powered_by_b7web" />
      </header>

      <main className={styles.mainContainer}>
        <div className={styles.leftSide}>
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
          />
          <input
            type="number"
            placeholder="Digite o seu peso: Ex: 50 (em kg)"
            value={weightField <= 0 ? '' : weightField}
            onChange={e => setWeightField(e.target.valueAsNumber)}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          Content 2
        </div>

      </main >
    </div >
  );
}

export default App;