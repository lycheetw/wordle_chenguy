import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { MAX_CHALLENGES, FIRST_HINT_SHOW_TIME, SECOND_HINT_SHOW_TIME } from '../../constants/settings'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="遊戲方法" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        在 {MAX_CHALLENGES} 次以內猜到成語。每次猜測後，格子會藉由變色，作為讓目前猜測狀況的提示。
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
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
        在第 {FIRST_HINT_SHOW_TIME} 次猜測後，會給予一個字的提示。
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        在第 {SECOND_HINT_SHOW_TIME} 次猜測後，會給予二個字的提示。
      </p>
    </BaseModal>
  )
}
