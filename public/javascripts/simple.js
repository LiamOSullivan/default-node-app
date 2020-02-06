
(async () => {
  let count = () => {
    document.getElementById('myBtn').addEventListener('click', () => {
      count += 1
      myFunc(count)
    })
  }
  console.log(count)
})()
