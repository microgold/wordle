import { AccuracyEnum } from "../component/Letter"
import { evaluateWordScore } from "../utilities/Evaluation"

test('evaluate wordle all correct', () => {
  const result = evaluateWordScore('react', 'react')
  expect(result[0]).toBe(AccuracyEnum.correct)
  expect(result[1]).toBe(AccuracyEnum.correct)
  expect(result[2]).toBe(AccuracyEnum.correct)
  expect(result[3]).toBe(AccuracyEnum.correct)
  expect(result[4]).toBe(AccuracyEnum.correct)
})

test('evaluate wordle all incorrect', () => {
  const result = evaluateWordScore('react', 'mound')
  expect(result[0]).toBe(AccuracyEnum.doesNotExist)
  expect(result[1]).toBe(AccuracyEnum.doesNotExist)
  expect(result[2]).toBe(AccuracyEnum.doesNotExist)
  expect(result[3]).toBe(AccuracyEnum.doesNotExist)
  expect(result[4]).toBe(AccuracyEnum.doesNotExist)
})

test('evaluate wordle wrong position', () => {
    const result = evaluateWordScore('react', 'house')
    expect(result[0]).toBe(AccuracyEnum.doesNotExist)
    expect(result[1]).toBe(AccuracyEnum.wrongPosition)
    expect(result[2]).toBe(AccuracyEnum.doesNotExist)
    expect(result[3]).toBe(AccuracyEnum.doesNotExist)
    expect(result[4]).toBe(AccuracyEnum.doesNotExist)
  })

test('evaluate one letter in right position, one in wrong position', () => {
    const result = evaluateWordScore('oboes', 'moons')
    expect(result[0]).toBe(AccuracyEnum.wrongPosition)
    expect(result[1]).toBe(AccuracyEnum.doesNotExist)
    expect(result[2]).toBe(AccuracyEnum.correct)
    expect(result[3]).toBe(AccuracyEnum.doesNotExist)
    expect(result[4]).toBe(AccuracyEnum.correct)
  })

  test('evaluate one letter in right position, with two of the same letter in the guess, and one in wrong position', () => {
    const result = evaluateWordScore('roomy', 'tombs')
    expect(result[0]).toBe(AccuracyEnum.doesNotExist)
    expect(result[1]).toBe(AccuracyEnum.correct)
    expect(result[2]).toBe(AccuracyEnum.doesNotExist)
    expect(result[3]).toBe(AccuracyEnum.wrongPosition)
    expect(result[4]).toBe(AccuracyEnum.doesNotExist)
  })
