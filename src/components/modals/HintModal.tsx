import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { FIRST_HINT_SHOW_TIME, SECOND_HINT_SHOW_TIME } from '../../constants/settings'
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

type Props = {
  isOpen: boolean
  handleClose: () => void
  hint: string[]
}

export const HintModal = ({ isOpen, handleClose, hint }: Props) => {
  return (
    <BaseModal title="新的提示來啦！" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex justify-center mb-2 mt-4 ml-10 mr-10">
        {
          hint.map(it => <Cell value={it} status="present" />)
        }
      </div>
    </BaseModal>
  )
}
