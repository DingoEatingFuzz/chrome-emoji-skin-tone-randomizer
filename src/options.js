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

function walkTree (node, mutator) {
  // Adapted from Cloud to Butt: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
  let child, next

  if (node.tagName && node.classList && (
    node.tagName.toLowerCase() === 'input' ||
    node.tagName.toLowerCase() === 'textarea' ||
    node.classList.contains('ace_editor')
  )) { return }

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild
      while (child) {
        next = child.nextSibling
        walkTree(child, mutator)
        child = next
      }
      break
    case 3: // Text node
      mutator(node)
  }
}
