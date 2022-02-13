import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { MAX_CHALLENGES } from '../../constants/settings'
import { VALID_GUESSES } from '../../constants/validGuesses'
import { solution } from '../../lib/words'

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

  if(guesses.length === MAX_CHALLENGES) {
    return solution.split('')
  }

  const ret = [] as string[]
  const charSet = new Set(guesses.flatMap(it => it.split('')))
  const solutionCharacters = solution.split('')
  solutionCharacters.forEach(it => {
    if (charSet.has(it)) {
      ret.push(it)
    }
  })

  const hintCharacters = solutionCharacters.map(it => [it, characterFrequncy[it]]).sort((a, b) => b[1] - a[1]).map(it => it[0])
  return hintCharacters
}

type Props = {
  isOpen: boolean
  handleClose: () => void
  hint: string[]
}

export const HintModal = ({ isOpen, handleClose, hint }: Props) => {
  return (
    <BaseModal title="提示" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        這是一個包含「{hint.join('、')}」的成語
      </p>
      <div className="flex justify-center mb-2 mt-4 ml-10 mr-10">
        {
          hint.map(it => <Cell key={it} value={it} status="present" />)
        }
      </div>
    </BaseModal>
  )
}
