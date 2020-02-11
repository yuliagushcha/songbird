const audioWrong = new Audio()
const audioCorrect = new Audio()

export function playError() {
  audioCorrect.pause()
  audioCorrect.currentTime = 0
  audioWrong.play()
}

export function playCorrect() {
  audioWrong.pause()
  audioWrong.currentTime = 0
  audioCorrect.play()
}

export function calculateTotalValue (length) {
  const minutes = Math.floor(length / 60);
    const secondsInt = length - minutes * 60;
    const secondsStr = secondsInt.toString();
    const seconds = secondsStr.substr(0, 2);
    const time = `${minutes  }:${  seconds}`

  return time
}

export function calculateCurrentValue (currentTime) {
  const currentMinute = parseInt(currentTime / 60, 10) % 60;
  const currentSecondsLong = currentTime % 60;
  const currentSeconds = currentSecondsLong.toFixed();
  const currentTimes = `${currentMinute < 10 ? `0${  currentMinute}` : currentMinute }:${ currentSeconds < 10 ? `0${  currentSeconds}` : currentSeconds}`

  return currentTimes
}
