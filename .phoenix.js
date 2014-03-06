// HELPERS
// save as .phoenix.js in the home folder

 
// Sometimes it's easier to work with edges instead of point + size
// {x, y, height, width} => {top, bottom, left right}

var BORDER_OFFSET = 20;

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
function toLeft(x_ratio) {
  var win = Window.focusedWindow()
  var rect = frameToRect(win.frame())
  var screenFrame = win.screen().frameWithoutDockOrMenu()

  rect.left = 0
  rect.right = screenFrame.width * x_ratio
  rect.top = 0 + BORDER_OFFSET
  rect.bottom = screenFrame.height + BORDER_OFFSET

  win.setFrame(rectToFrame(rect), win.screen())
}

function toTopLeft(x_ratio) {
  // Done
  var win = Window.focusedWindow()
  
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()

  var rect = frameToRect(winFrame)
  rect.left = 0
  rect.right = screenFrame.width * x_ratio

  rect.top = 0 + BORDER_OFFSET
  rect.bottom = screenFrame.height * 0.5 + BORDER_OFFSET
  
  winFrame = rectToFrame(rect)

  win.setFrame(winFrame, win.screen())
}

function toBottomLeft(x_ratio) {
  // DONE
  var win = Window.focusedWindow()
  var winFrame = win.frame()

  var screenFrame = win.screen().frameWithoutDockOrMenu()
  
  var rect = frameToRect(winFrame)
  rect.left = 0
  rect.right = screenFrame.width * x_ratio

  rect.top = screenFrame.height * 0.5 + BORDER_OFFSET
  rect.bottom = screenFrame.height  + BORDER_OFFSET  

  win.setFrame(rectToFrame(rect) , win.screen())
}
 
function toRight(x_ratio) {
  var win = Window.focusedWindow()
  var rect = frameToRect(win.frame())
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width - screenFrame.width * x_ratio
  rect.right = screenFrame.width
  rect.top = 0 + BORDER_OFFSET
  rect.bottom = screenFrame.height + BORDER_OFFSET
  win.setFrame(rectToFrame(rect), win.screen())
}

function toTopRight(x_ratio) {
  // DONE
  var win = Window.focusedWindow()
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()

  var rect = frameToRect(winFrame)
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width - screenFrame.width * x_ratio
  rect.right = screenFrame.width

  rect.top = 0 + BORDER_OFFSET
  rect.bottom = screenFrame.height * 0.5 + BORDER_OFFSET

  winFrame = rectToFrame(rect)

  win.setFrame(winFrame, win.screen())
}

function toBottomRight(x_ratio) {
  // DONE
  var win = Window.focusedWindow()
  var winFrame = win.frame()
  
  var rect = frameToRect(winFrame)
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width * (1 - x_ratio)
  rect.right = screenFrame.width 
  rect.top = screenFrame.height * 0.5 + BORDER_OFFSET
  rect.bottom = screenFrame.height + BORDER_OFFSET
 
  win.setFrame(rectToFrame(rect), win.screen())
}
 
function toTop(x_ratio) {
  //DONE 
  var win = Window.focusedWindow()
  var rect = frameToRect(win.frame())
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width * (1 - x_ratio)
  rect.right = screenFrame.width * (x_ratio)
  
  rect.top = + BORDER_OFFSET
  rect.bottom = screenFrame.height + BORDER_OFFSET
  win.setFrame(rectToFrame(rect), win.screen())
}
 
function toBottom(x_ratio) {
  // DONE 
  var win = Window.focusedWindow()
  var rect = frameToRect(win.frame())
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width * (1 - x_ratio)
  rect.right = screenFrame.width * (x_ratio)
  
  rect.top = screenFrame.height * 0.5 + BORDER_OFFSET
  rect.bottom = screenFrame.height + BORDER_OFFSET
  
  win.setFrame(rectToFrame(rect), win.screen())
}

function toMiddle(x_ratio) {
  // DONE 
  var win = Window.focusedWindow()
  var rect = frameToRect(win.frame())
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  rect.left = screenFrame.width * (1 - x_ratio)
  rect.right = screenFrame.width * (x_ratio)
  
  rect.top = 0
  rect.bottom = screenFrame.height
  win.setFrame(rectToFrame(rect), win.screen())
}

 
// BINDS
var opts = ["ctrl", "alt"]
api.bind('h', opts, cycleCalls(
  toLeft,
  [
    [0.5],
    [0.333333],
    [0.666667]
  ]
))

api.bind('y', opts, cycleCalls(
  toTopLeft,
  [
    [0.5],
    [0.333333],
    [0.666667]
  ]
))

api.bind('n', opts, cycleCalls(
  toBottomLeft,
  [
    [0.5],
    [0.333333],
    [0.666667]
  ]
))

api.bind('k', opts, cycleCalls(
  toRight,
  [
    [0.5],
    [0.333333],
    [0.666667]
  ]
))

api.bind('i', opts, cycleCalls(
  toTopRight,
  [
    [0.5],
    [0.333333],
    [0.666667]
  ]
))

api.bind(',', opts, cycleCalls(
  toBottomRight,
  [  
    [0.5],
    [0.333333],
    [0.666667]
  ]
))

api.bind('u', opts, cycleCalls(
  toTop,
  [
    [0.666667],
    [1-0.166667],
    [1]
  ]
))

api.bind('m', opts, cycleCalls(
  toBottom,
  [
    [0.666667],
    [1-0.166667],
    [1]
  ]
))

api.bind('j', opts, cycleCalls(
  toMiddle,
  [
    [0.666667],
    [1-0.166667],
    [1]
  ]
))
