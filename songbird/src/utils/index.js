const audioWrong = new Audio("../../assets/audio/wrong.mp3")
const audioCorrect = new Audio("../../assets/audio/correct.mp3")
const audioVictory = new Audio("../../assets/audio/victory.mp3")

export const stopPlay = () => {
  audioWrong.pause()
  audioCorrect.pause()
  audioVictory.pause()
  audioWrong.currentTime = 0
  audioCorrect.currentTime = 0
  audioVictory.currentTime = 0
}

export const playError = () => {
  stopPlay()
  audioWrong.play()
}

export const playCorrect = () => {
  stopPlay()
  audioCorrect.play()
}

export const playVictory = () => {
  stopPlay()
  audioVictory.play()
}

export const calculateTotalValue = length => {
  const minutes = Math.floor(length / 60)
  const secondsInt = length - minutes * 60
  const secondsStr = secondsInt.toString()
  const seconds = secondsStr.substr(0, 2)

  return `${minutes}:${seconds}`
}

export const calculateCurrentValue = currentTime => {
  const currentMinute = parseInt(currentTime / 60, 10) % 60
  const currentSecondsLong = currentTime % 60
  const currentSeconds = currentSecondsLong.toFixed()

  return `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
    currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
  }`
}
