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
