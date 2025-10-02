let words = [" Machhli", "Pani Me Gayi", "Chappak !"]

function totalWords(duration, words) {
  let wordsArr = []
  for (let i = 1; i <= duration; i++) {
    words.forEach((word, index)=> {
      for (let j = 1; j <= i; j++) {
        if (index == 0) {
          wordsArr.push(i+word)
        } else {
          wordsArr.push(word)
        }
      }
    })
  }
  return wordsArr
}
function playersWord(players, duration, words) {
  let totalWord = totalWords(duration,
    words)

  let arr = []
  let playersWords = []
  totalWord.forEach((cValue, index)=> {

    if (((index+1)%players == 0) || totalWord.length == index+1) {
      arr.push(cValue)
      playersWords.push(arr)
      arr = []
    } else {
      arr.push(cValue)
    }
  })
  console.log(playersWords)
  return(playersWords)
}


function showData() {
  const btn = document.getElementById("playBtn")

  btn.addEventListener("click",
    ()=> {
      const players = document.getElementById("players").value
      const duration = document.getElementById("duration").value
      if (players != 0 && duration != 0) {
        const twords = playersWord(players, duration, words)
        let table = document.getElementsByTagName("table")[0]
        table.innerHTML = ""
        let trTH = document.createElement("tr")
        for (let i = 1; i <= players; i++) {
          let th = document.createElement("th")
          th.textContent = "Player "+i
          trTH.appendChild(th)
        }
        table.appendChild(trTH)
        twords.forEach((words)=> {
          let trTD = document.createElement("tr")
          words.forEach((word)=> {
            let td = document.createElement("td")
            td.textContent = word
            trTD.appendChild(td)
          })
          table.appendChild(trTD)
        })
      }
    })
}
showData()
const btn = document.getElementById("playBtn")
btn.click()