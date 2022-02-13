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
        這是一個包含「{hintChar}」的成語，<br/>請在 {MAX_CHALLENGES} 次以內猜到它。
      </p>
      <div className="flex justify-center mb-2 mt-4 ml-10 mr-10">
        <Cell value={hintChar} status="present" />
      </div>
      <p className="text-gray-900 dark:text-gray-100 mt-6">
        <b>顏色說明</b>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300  mt-6">
        假設正確的答案為
      </p>
      <div className="flex justify-center mb-1 mt-2">
        <Cell value="杯" />
        <Cell value="水" />
        <Cell value="車" />
        <Cell value="薪" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300  mt-4">
        猜測為
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="車" status="present"/>
        <Cell value="水" status="correct"/>
        <Cell value="馬" status="absent"/>
        <Cell value="龍" status="absent"/>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
        黃色代表答案包含「車」但位置不正確
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
        綠色代表答案包含「水」且位置正確
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
        灰色代表答案不包含「馬、龍」
      </p>
    </BaseModal>
  )
}
