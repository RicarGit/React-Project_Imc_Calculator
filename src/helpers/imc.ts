type Level = {
  title: string,
  backgroundColor: string,
  icon: 'up' | 'down',
  imc: [number, number],
  imcResult?: number
}

const levels: Level[] = [
  { title: 'Magreza', backgroundColor: '#96A3AB', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', backgroundColor: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', backgroundColor: '#E2B039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', backgroundColor: '#C3423F', icon: 'down', imc: [30.1, 99] }
]

const calculateImc = (height: number, weight: number) => {
  const imcCalcResult = parseFloat((weight / (height * 2)).toFixed(1))

  const [result] = levels.filter(level => {
    const [minValue, maxValue] = level.imc

    if (imcCalcResult >= minValue && imcCalcResult < maxValue) {
      level.imcResult = imcCalcResult
      return true
    }

    return null
  })

  return result
}

export { levels, calculateImc, type Level }