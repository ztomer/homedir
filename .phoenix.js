// HELPERS
// save as .phoenix.js in the home folder

 
// Sometimes it's easier to work with edges instead of point + size
// {x, y, height, width} => {top, bottom, left right}
function frameToRect(frame) {
  return {
    left: frame.x,
    right: frame.x + frame.width,
    top: frame.y,
    bottom: frame.y + frame.height
  }
}
 
// {top, bottom, left right} => {x, y, height, width}
function rectToFrame(rect) {
  return {
    x: rect.left,
    y: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }
}
 
// Cycle args for the function, if called repeatedly
// cycleCalls(fn, [ [args1...], [args2...], ... ])
var lastCall = null
function cycleCalls(fn, argsList) {
  var argIndex = 0, identifier = {}
  return function () {
    if (lastCall !== identifier || ++argIndex >= argsList.length) argIndex = 0
    lastCall = identifier
    fn.apply(this, argsList[argIndex])
  }
}
 
 
// ACTIONS
 
// toAnything(a,b). Sets the focusWindow size to screensize * a/b
function toLeft(fillCols, maxCols) {
  var win = Window.focusedWindow()
  var rect = frameToRect(win.frame())
  var screenFrame = win.screen().frameWithoutDockOrMenu()

  rect.left = 0
  rect.right = screenFrame.width / maxCols * fillCols
  rect.top = 0
  rect.bottom = screenFrame.height

  win.setFrame(rectToFrame(rect), win.screen())
}

function toTopLeft(fillCols, maxCols) {
  // Done
  var win = Window.focusedWindow()
  
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()

  var rect = frameToRect(winFrame)
  rect.left = 0
  rect.right = screenFrame.width / maxCols * fillCols

  rect.top = 0
  rect.bottom = screenFrame.height / 2
  
  winFrame = rectToFrame(rect)

  win.setFrame(winFrame, win.screen())
}

function toBottomLeft(fillCols, maxCols) {
  // DONE
  var win = Window.focusedWindow()
  var winFrame = win.frame()

  var screenFrame = win.screen().frameWithoutDockOrMenu()

  var rect = frameToRect(winFrame)
  rect.left = 0
  rect.right = screenFrame.width / maxCols * fillCols

  rect.top = screenFrame.height / 2
  rect.bottom = screenFrame.height

  winFrame = rectToFrame(rect)

  win.setFrame(winFrame, win.screen())
}
 
function toRight(fillCols, maxCols) {
  var win = Window.focusedWindow()
  var rect = frameToRect(win.frame())
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width - screenFrame.width / maxCols * fillCols
  rect.right = screenFrame.width
  rect.top = 0
  rect.bottom = screenFrame.height
  win.setFrame(rectToFrame(rect), win.screen())
}

function toTopRight(fillCols, maxCols) {
  // DONE
  var win = Window.focusedWindow()
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  var targetHeight = screenFrame.height / 2 // hardcoded to half height

  var rect = frameToRect(winFrame)
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width - screenFrame.width / maxCols * fillCols
  rect.right = screenFrame.width

  rect.top = 0
  rect.bottom = screenFrame.height / 2

  winFrame = rectToFrame(rect)

  win.setFrame(winFrame, win.screen())
}

function toBottomRight(fillCols, maxCols) {
  // DONE
  var win = Window.focusedWindow()
  var winFrame = win.frame()

  var screenFrame = win.screen().frameWithoutDockOrMenu()
  var targetHeight = screenFrame.height / 2 // hardcoded to half height

  var rect = frameToRect(winFrame)
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width - screenFrame.width / maxCols * fillCols
  rect.right = screenFrame.width
  rect.top = screenFrame.height / 2
  rect.bottom = screenFrame.height
  winFrame = rectToFrame(rect)
 
  win.setFrame(winFrame, win.screen())
}
 
function toTop(fillRows, maxRows) {
  var win = Window.focusedWindow()
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  var targetHeight = screenFrame.height / maxRows * fillRows
  winFrame.y = screenFrame.y
  winFrame.height = targetHeight
  winFrame.x = screenFrame.x
  winFrame.width = screenFrame.width
  win.setFrame(winFrame, win.screen())
}
 
function toBottom(fillRows, maxRows) {
  var win = Window.focusedWindow()
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  var targetHeight = screenFrame.height / maxRows * fillRows
  winFrame.y = screenFrame.y + screenFrame.height - targetHeight
  winFrame.height = targetHeight

  winFrame.x = screenFrame.x
  winFrame.width = screenFrame.width

  win.setFrame(winFrame, win.screen())
}

function toMiddle(fillRows, maxCols) {
  // DONE 
  var win = Window.focusedWindow()
  var rect = frameToRect(win.frame())
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width / maxCols * fillRows
  rect.right = screenFrame.width - screenFrame.width / maxCols * fillRows
  
  rect.top = 0
  rect.bottom = screenFrame.height
  win.setFrame(rectToFrame(rect), win.screen())
}

 
// BINDS
var opts = ["ctrl", "alt"]
api.bind('h', opts, cycleCalls(
  toLeft,
  [
    [1,2],
    [1,3],
    [2,3]
  ]
))

api.bind('y', opts, cycleCalls(
  toTopLeft,
  [
    [1,2],
    [1,3],
    [2,3]
  ]
))

api.bind('n', opts, cycleCalls(
  toBottomLeft,
  [
    [1,2],
    [1,3],
    [2,3]
  ]
))

api.bind('k', opts, cycleCalls(
  toRight,
  [
    [1,2],
    [1,3],
    [2,3]
  ]
))

api.bind('i', opts, cycleCalls(
  toTopRight,
  [
    [1,2],
    [1,3],
    [2,3]
  ]
))

api.bind(',', opts, cycleCalls(
  toBottomRight,
  [
    [1,2],
    [1,3],
    [2,3]
  ]
))

api.bind('u', opts, cycleCalls(
  toTop,
  [
    [1,2],
    [1,1],
    [2,3]
  ]
))

api.bind('m', opts, cycleCalls(
  toBottom,
  [
    [1,2],
    [1,1],
    [1,3]
  ]
))

api.bind('j', opts, cycleCalls(
  toMiddle,
  [
    [2,6],
    [1,6],
    [0,1]
  ]
))
