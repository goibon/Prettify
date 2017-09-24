let tabsWithInjectedCss = []

window.chrome.browserAction.onClicked.addListener(function (tab) {
  const index = tabsWithInjectedCss.findIndex((element) => {
    return element.id === tab.id
  })
  if (index === -1) {
    window.chrome.tabs.executeScript(null, {
      file: 'js/cssInjecter.js'
    }, () => {
      tabsWithInjectedCss.push(tab)
    })
  } else {
    window.chrome.tabs.executeScript(null, {
      file: 'js/cssRemover.js'
    }, () => {
      tabsWithInjectedCss.splice(index, 1)
    })
  }
})
