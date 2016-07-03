{{skintoneEligible}}
const skintones = '🏻 🏼 🏽 🏾 🏿'.split(' ')
const noSkintonePattern = new RegExp(`^\u200d?(${skintoneEligible.join('|')})(?![${skintones.join('')}\u200d])`, 'gm')

randomizeSkintones(document.body)

function randomizeSkintones (el) {
  walkTree(el, node => {
    node.nodeValue = node.nodeValue.replace(noSkintonePattern, (_, emoji) => emoji + skintones[Math.floor(Math.random() * skintones.length)])
  })
}

{{walkTree}}
