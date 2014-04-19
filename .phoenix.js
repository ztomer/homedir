// HELPERS
// save as .phoenix.js in the home folder

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
  var screenFrame = win.screen().frameWithoutDockOrMenu();
  var winFrame = win.frame();

  winFrame.x = screenFrame.x
  winFrame.y = screenFrame.y
  winFrame.width = screenFrame.width * x_ratio
  winFrame.height = screenFrame.height
  
  win.setFrame(winFrame)
}

function toTopLeft(x_ratio) {
  var win = Window.focusedWindow()
  var screenFrame = win.screen().frameWithoutDockOrMenu();
  var winFrame = win.frame();

  winFrame.x = screenFrame.x
  winFrame.y = screenFrame.y
  winFrame.width = screenFrame.width * x_ratio
  winFrame.height = screenFrame.height * 0.5
  
  win.setFrame(winFrame)
}

function toBottomLeft(x_ratio) {
  var win = Window.focusedWindow()
  var screenFrame = win.screen().frameWithoutDockOrMenu();
  var winFrame = win.frame();

  winFrame.x = screenFrame.x
  winFrame.y = screenFrame.y + screenFrame.height * 0.5
  winFrame.width = screenFrame.width * x_ratio
  winFrame.height = screenFrame.height * 0.5
  
  win.setFrame(winFrame)
}
 
function toRight(x_ratio) {
  var win = Window.focusedWindow()
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  var winFrame = win.frame()

  winFrame.x = screenFrame.x + screenFrame.width * (1 - x_ratio)
  winFrame.y = screenFrame.y
  winFrame.width = screenFrame.width * x_ratio
  winFrame.height = screenFrame.height
  
  win.setFrame(winFrame)

}

function toTopRight(x_ratio) {
  var win = Window.focusedWindow()
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  var winFrame = win.frame()

  winFrame.x = screenFrame.x + screenFrame.width * (1 - x_ratio)
  winFrame.y = screenFrame.y
  winFrame.width = screenFrame.width * x_ratio
  winFrame.height = screenFrame.height * 0.5
  
  win.setFrame(winFrame)
}

function toBottomRight(x_ratio) {
  var win = Window.focusedWindow()
  var screenFrame = win.screen().frameWithoutDockOrMenu()
  var winFrame = win.frame();

  winFrame.x = screenFrame.x + screenFrame.width * (1 - x_ratio)
  winFrame.y = screenFrame.y + screenFrame.height * 0.5
  winFrame.width = screenFrame.width * x_ratio
  winFrame.height = screenFrame.height * 0.5
  
  win.setFrame(winFrame)

}
 
 
function toTop(x_ratio) {
  var win = Window.focusedWindow()
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()

  winFrame.x = screenFrame.x + screenFrame.width * (1 - x_ratio) * 0.5
  winFrame.y = screenFrame.y 
  winFrame.height = screenFrame.height * 0.5
  winFrame.width = screenFrame.width * x_ratio
  
  win.setFrame(winFrame)
}
 
function toBottom(x_ratio) {

  var win = Window.focusedWindow()
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()

  winFrame.x = screenFrame.x + screenFrame.width * (1 - x_ratio) * 0.5
  winFrame.y = screenFrame.y + screenFrame.height * 0.5
  winFrame.height = screenFrame.height * 0.5
  winFrame.width = screenFrame.width * x_ratio
  
  win.setFrame(winFrame)
}

function toMiddle(x_ratio) {
  var win = Window.focusedWindow()
  var winFrame = win.frame()
  var screenFrame = win.screen().frameWithoutDockOrMenu()

  winFrame.x = screenFrame.x + screenFrame.width * (1 - x_ratio) * 0.5
  winFrame.y = screenFrame.y
  winFrame.height = screenFrame.height
  winFrame.width = screenFrame.width * x_ratio
  
  win.setFrame(winFrame)
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
    [0.333337],
    [1 - 0.333337],
    [1]
  ]
))

api.bind('m', opts, cycleCalls(
  toBottom,
  [
    [0.333337],
    [1 - 0.333337],
    [1]
  ]
))

api.bind('j', opts, cycleCalls(
  toMiddle,
  [
    [0.333337],
    [1 - 0.333337],
    [1]
  ]
))
