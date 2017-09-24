/**
 * Scans the DOM and finds all CSS classes in use.
 * @return {Array} An array containing the CSS classes found in the DOM
 */
function getCssClassesOfDocument () {
  var iterator = document.createNodeIterator(document.body, window.NodeFilter.SHOW_ELEMENT)
  var classes = []
  var node = iterator.nextNode()
  while (node) {
    if (node.classList && node.classList.length) {
      for (var i = 0; i < node.classList.length; i++) {
        if (node.classList[i]) {
          classes.push(node.classList[i])
        }
      }
    }
    node = iterator.nextNode()
  }
  return classes
}

// Retrieve the CSS classes from the DOM
var cssClasses = getCssClassesOfDocument()

// Create random styling
var styleString = '<style id="prettify-style">'
for (var i = 0; i < cssClasses.length; i++) {
  styleString += window.generateCssForClass(cssClasses[i])
}
styleString += '</style>'

// Inject the style tag in the DOM head
var fragment = document.createElement('div')
fragment.innerHTML = styleString.replace(/(\r\n|\n|\r)/gm, '')
document.head.appendChild(fragment.firstChild)
