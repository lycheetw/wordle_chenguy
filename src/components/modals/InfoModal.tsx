import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { MAX_CHALLENGES } from '../../constants/settings'
import { getCharacterHint } from './HintModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const hintChar = getCharacterHint([])[0]
  return (
    <BaseModal title="遊戲方法" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
        這是一個包含「{hintChar}」的成語。請在 {MAX_CHALLENGES} 次以內猜到它。
      </p>
      <div className="flex justify-center mb-2 mt-4 ml-10 mr-10">
        <Cell value={hintChar} status="present" />
      </div>
      <p className="text-gray-900 dark:text-gray-100 mt-6">
        <b>顏色說明</b>
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="一" status="correct" />
        <Cell value="馬" />
        <Cell value="當" />
        <Cell value="先" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        答案包含「一」且位置正確
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="胸" />
        <Cell value="有" />
        <Cell value="成" status="present" />
        <Cell value="竹" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        答案包含「成」但是位置不正確
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="學" />
        <Cell value="富" />
        <Cell value="五" />
        <Cell value="車" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        答案不包含「車」
      </p>
    </BaseModal>
  )
}
