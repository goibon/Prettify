/**
 * Scans the DOM and finds all id attributes and CSS classes in use.
 * @return {Array} An array containing the ids and CSS classes found in the DOM
 */
function getIdsAndCssClassesOfDocument () {
  var iterator = document.createNodeIterator(document.body, window.NodeFilter.SHOW_ELEMENT)
  var ids = []
  var classes = []
  var node = iterator.nextNode()
  while (node) {
    if (node.id) {
      ids.push(node.id)
    } else if (node.classList && node.classList.length) {
      for (var i = 0; i < node.classList.length; i++) {
        if (node.classList[i]) {
          classes.push(node.classList[i])
        }
      }
    }
    node = iterator.nextNode()
  }
  return {
    ids: ids,
    classes: classes
  }
}

// Retrieve the CSS classes from the DOM
var idsAndCssClasses = getIdsAndCssClassesOfDocument()

// Create random styling
var styleString = '<style id="prettify-style">'
for (var id of idsAndCssClasses.ids) {
  styleString += window.generateCssForId(id)
}
for (var cssClass of idsAndCssClasses.classes) {
  styleString += window.generateCssForClass(cssClass)
}
styleString += '</style>'

// Inject the style tag in the DOM head
var fragment = document.createElement('div')
fragment.innerHTML = styleString.replace(/(\r\n|\n|\r)/gm, '')
document.head.appendChild(fragment.firstChild)
