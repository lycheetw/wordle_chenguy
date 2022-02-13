import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'
import { getGuessStatuses } from './statuses'
import { FIRST_HINT_SHOW_TIME, SECOND_HINT_SHOW_TIME } from '../../src/constants/settings'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  const knownLetterSet = new Set<string>()
  for (const guess of guesses) {
    const statuses = getGuessStatuses(guess)

    for (let i = 0; i < guess.length; i++) {
      if (statuses[i] === 'correct' || statuses[i] === 'present') {
        knownLetterSet.add(guess[i])
      }
      if (statuses[i] === 'correct' && word[i] !== guess[i]) {
        return `Must use ${guess[i]} in position ${i + 1}`
      }
    }
  }

  for (const letter of Array.from(knownLetterSet.values())) {
    // fail fast, always return first failed letter if applicable
    if (!word.includes(letter)) {
      return `Guess must contain ${letter}`
    }
  }
  return false
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: WORDS[index % WORDS.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}
const characterFrequncy = {} as any
VALID_GUESSES.forEach(it => {
  new Set(it.split('')).forEach(char => {
    if (characterFrequncy[char] === undefined) {
      characterFrequncy[char] = 1
    } else {
      characterFrequncy[char] = characterFrequncy[char] + 1
    }
  })
})

export const getCharacterHint = (guesses: string[]): string[] => {

  const ret = [] as string[]
  const charSet = new Set(guesses.flatMap(it => it.split('')))
  const solutionCharacters = solution.split('')
  solutionCharacters.forEach(it => {
    if (charSet.has(it)) {
      ret.push(it)
    }
  })

  const hintCharacters = solutionCharacters.map(it => [it, characterFrequncy[it]]).sort((a, b) => b[1] - a[1]).map(it => it[0])
  if (guesses.length < FIRST_HINT_SHOW_TIME) {
    // Do nothing
  } else if (guesses.length < SECOND_HINT_SHOW_TIME) {
    if (!ret.includes(hintCharacters[0])) {
      ret.push(hintCharacters[0])
    }
  } else {
    if (!ret.includes(hintCharacters[1])) {
      ret.push(hintCharacters[1])
    }
  }
  return ret
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
