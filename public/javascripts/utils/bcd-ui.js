const populateDropdown = (id, optionsArray) => {
  let dd = document.getElementById(id)
  optionsArray.forEach((optionContent, i) => {
    let o = document.createElement('option')
    o.textContent = optionContent
    o.value = optionContent
    dd.appendChild(o)
  })
}
