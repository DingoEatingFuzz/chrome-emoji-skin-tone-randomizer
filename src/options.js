{{skintoneEligible}}
const skintones = '🏻 🏼 🏽 🏾 🏿'.split(' ')
const noSkintonePattern = new RegExp(`^\u200d?(${skintoneEligible.join('|')})(?![${skintones.join('')}\u200d])`, 'gm')
const spec = skintoneEligible.map((emoji, index) => index % 3 === 0 ? emoji + skintones[index % 5] : emoji)

window.onload = () => {
  const controlGroup = document.querySelector('.control')
  controlGroup.innerHTML = spec.map(emoji => `<li>${emoji}</li>`).join('\n')

  const rollButton = document.querySelector('#roll-button')
  rollButton.onclick = e => {
    e.preventDefault()
    randomizeSkintones()
  }

  randomizeSkintones()
}

function randomizeSkintones () {
  const experiment = document.querySelector('.experiment')
  experiment.innerHTML = spec.map(emoji => `<li>${emoji}</li>`).join('\n')
  walkTree(experiment, node => {
    node.nodeValue = node.nodeValue.replace(noSkintonePattern, (_, emoji) => emoji + skintones[Math.floor(Math.random() * skintones.length)])
  })
}

{{walkTree}}
