/** @type {HTMLInputElement[]} */
const multiplierElms = document.querySelectorAll('.multiplier-value')
const viewingRadiusResult = document.getElementById('viewing-radius-result')

multiplierElms.forEach(elm => {
  elm.onchange = updateResult
})
updateResult()


function updateResult() {
  let viewingRadius = 180

  multiplierElms.forEach(elm => {
    switch (elm.tagName) {
      case 'INPUT':
        switch (elm.type) {
          case 'checkbox':
            if (elm.checked) {
              viewingRadius *= Number(elm.dataset.value)
            }
            break
        }
        break
      case 'SELECT':
        viewingRadius *= Number(elm.value)
        break
    }
  })

  viewingRadiusResult.textContent = viewingRadius ^ 0
}
