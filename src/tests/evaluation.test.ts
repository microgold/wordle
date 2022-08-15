import { AccuracyEnum } from "../component/Letter"
import { evaluateWordScore } from "../utilities/Evaluation"

test('evaluate wordle all correct', () => {
  const result = evaluateWordScore('react', 'react')
  expect(result[0]).toBe(AccuracyEnum.correct)
})

test('evaluate wordle all incorrect', () => {
  const result = evaluateWordScore('react', 'mound')
  expect(result[0]).toBe(AccuracyEnum.doesNotExist)
})

test('evaluate wordle wrong position', () => {
    const result = evaluateWordScore('react', 'house')
    expect(result[1]).toBe(AccuracyEnum.wrongPosition)
  })
