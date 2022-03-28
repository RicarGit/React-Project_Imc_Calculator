import { useState } from 'react';
import styles from './App.module.css'
import logo from './assets/powered.png'
import { levels, calculateImc } from './helpers/imc'
import up from './assets/up.png'
import down from './assets/down.png'
// import leftArrow from './assets/leftarrow.png'

function App() {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      return console.log(calculateImc(heightField, weightField))
    }

    alert('Algo deu errado...')
    return
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
          />
          <input
            type="number"
            placeholder="Digite o seu peso: Ex: 50 (em kg)"
            value={weightField <= 0 ? '' : weightField}
            onChange={e => setWeightField(e.target.valueAsNumber)}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </section>

        <section className={styles.rightSide}>
          {levels.map(({ title, color, icon, imc }, index) => {
            const [minImcValue, maxImcValue] = imc

            return (
              <div key={index} style={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "bolder",
                fontSize: "27px",
                backgroundColor: color,
                color: "#fff",
                borderRadius: "10px",
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img src={icon === 'up' ? up : down} style={{
                  width: "60px",
                  height: "60px",
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "20%"
                }} alt="" />
                <h5 style={{ marginBottom: "15px" }}>{title}</h5>
                <p style={{ fontSize: "13px" }}>
                  {`IMC está entre ${minImcValue} e ${maxImcValue}`}
                </p>
              </div>)
          })}
        </section>

      </main >
    </div >
  );
}

export default App;