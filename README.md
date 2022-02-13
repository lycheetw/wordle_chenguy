# 成語拼圖

本專案是來自於名為wordle的英文拼字遊戲，並基於[react-wordle](https://github.com/cwackerfuss/react-wordle)修改而成。

[遊戲網址](https://chengyu.lychee.page/)

## 資料來源

[教育部成語典](https://dict.idioms.moe.edu.tw/)

## FAQ

### 如何補充新的成語

- 在[src/constants/validGuesses.ts](src/constants/validGuesses.ts)可以增加合法可猜測的詞句。
- 如果想把該新增內容列為題目之一，請在[src/constants/wordlist.ts](src/constants/wordlist.ts)增加。

### 如何增加可猜測次數

- 更新[src/constants/settings.ts](src/constants/settings.ts)裡的`MAX_WORD_LENGTH`。

### 協作方式

- 請發PR或是Issue，中英文皆可。
