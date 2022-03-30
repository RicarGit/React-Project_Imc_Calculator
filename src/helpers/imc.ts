type Level = {
  title: string,
  color: string,
  icon: 'up' | 'down',
  imc: [number, number]
}

const levels: Level[] = [
  { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] }
]

const calculateImc = (height: number, weight: number) => {
  const imcLevel = parseFloat((weight / (height * 2)).toFixed(1))

  const [result] = levels.filter(level => {
    const [minValue, maxValue] = level.imc

    if (imcLevel >= minValue && imcLevel < maxValue) {
      return true
    }

    return false
  })

  return result
}

export { levels, calculateImc, type Level }