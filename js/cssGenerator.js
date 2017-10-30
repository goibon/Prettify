const maxBorderWidth = 10
const borderStyles = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset'
]

const propertyFunctions = [
  /**
   * Creates a string containing a CSS 'color' property with a random value.
   * @return {String} A random CSS 'color' property
   */
  function getRandomColor () {
    return `color: ${getRandomRgbString()};`
  },

  /**
   * Creates a string containing a CSS 'background-color' property with a random value.
   * @return {String} A random CSS 'background-color' property
   */
  function getRandomBackgroundColor () {
    return `background-color: ${getRandomRgbString()};`
  },

  /**
   * Creates a string containing a CSS 'border' property with a random value.
   * @return {String} A random CSS 'border' property.
   */
  function getRandomBorder () {
    var borderWidth = Math.floor(Math.random() * maxBorderWidth)
    var borderStyle = getRandomItemFromArray(borderStyles)
    var borderColor = getRandomRgbString()
    return `border: ${borderStyle} ${borderWidth}px ${borderColor};`
  }
]

/**
 * Creates a string containing a random 6 digit hexadecimal RGB value, e.g. #c9f2d0.
 * @return {String} A random 6 digit hexadecimal string
 */
function getRandomRgbString () {
  var red = getRandomHexString()
  var green = getRandomHexString()
  var blue = getRandomHexString()
  return `#${red}${green}${blue}`
}

/**
 * Creates a string containing a random 2 digit hexadecimal value, e.g. #c9.
 * @return {String} A random 2 digit hexadecimal string
 */
function getRandomHexString () {
  var result = Math.floor(Math.random() * 255).toString(16)
  return result.repeat(3 - result.length)
}

/**
 * Creates a string containing a random CSS property, e.g. 'color: #c9f2d0;'.
 * @return {String} A random CSS property
 */
function getRandomCssProperty () {
  return getRandomItemFromArray(propertyFunctions)()
}

/**
 * Retrieves a random entry from an array.
 * @param  {Array} array The array to select from
 * @return {Any}         A random entry from the provided array
 */
function getRandomItemFromArray (array) {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Creates a string containing CSS for a given class name, e.g. '.myClass{color: #c9f2d0;}'.
 * @param  {String} className Class name to generate CSS for
 * @return {String}           A string containing CSS for a given class name
 */
function generateCssForClass (className) { // eslint-disable-line no-unused-vars
  if (!className) {
    console.error('className not provided')
    return
  }
  if (typeof className !== 'string') {
    console.error('className must be a string')
    return
  }

  var result = `.${className} {`
  result += getRandomCssProperty()
  return result + '}'
}

/**
 * Creates a string containing CSS for a given id, e.g. '#myId{color: #c9f2d0;}'.
 * @param  {String} id Id to generate CSS for
 * @return {String}    A string containing CSS for a given id
 */
function generateCssForId (id) { // eslint-disable-line no-unused-vars
  if (!id) {
    console.error('id not provided')
    return
  }
  if (typeof id !== 'string') {
    console.error('id must be a string')
    return
  }

  var result = `#${id} {`
  result += getRandomCssProperty()
  return result + '}'
}
