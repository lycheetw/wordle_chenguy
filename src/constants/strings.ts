export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['做得好！', '太棒了！', '你成功了！']
export const GAME_COPIED_MESSAGE = '遊戲結果已經複製'
export const ABOUT_GAME_MESSAGE = '關於此遊戲'
export const NOT_ENOUGH_LETTERS_MESSAGE = '字數不足'
export const WORD_NOT_FOUND_MESSAGE = '找不到這句成語'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const ENTER_TEXT = '輸入'
export const DELETE_TEXT = '刪除'
export const STATISTICS_TITLE = '統計資訊'
export const GUESS_DISTRIBUTION_TEXT = '花費次數分佈'
export const NEW_WORD_TEXT = '距離下一題還有'
export const SHARE_TEXT = '分享'
export const TOTAL_TRIES_TEXT = '遊玩次數'
export const SUCCESS_RATE_TEXT = '完成率'
export const CURRENT_STREAK_TEXT = '連勝次數'
export const BEST_STREAK_TEXT = '最佳連勝次數'
export const HINT_TEXT = '答案包含'
