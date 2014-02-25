// This is my configuration for Phoenix <https://github.com/sdegutis/Phoenix>, an awesome
// and super-lightweight OS X window manager that can be configured and scripted through
// the insanity that is Javascript. Heavily recommended. :)
//
// With my admittedly limited Javascript skills, I'm extending the built-in Phoenix classes
// a little to allow for slightly more expressive window configuration (most importantly,
// by being able to pass screen ratios instead of pixel rects, and controlling specific
// apps just a little bit easier.)
//
// Feedback/forks/improvements highly appreciated!
//
// -- hendrik@mans.de
//    twitter.com/hmans
//

var mash = ["cmd", "alt", "ctrl"];
var padding = 4;

api.bind('space', mash, function() {
  Window.focusedWindow().toFullScreen();
});

api.bind('up', mash, function() {
  Window.focusedWindow().toTopHalf();
});

api.bind('down', mash, function() {
  Window.focusedWindow().toBottomHalf();
});

api.bind('left', mash, function() {
  Window.focusedWindow().toLeftHalf();
});

api.bind('right', mash, function() {
  Window.focusedWindow().toRightHalf();
});

api.bind('escape', mash, function() {
  Window.focusedWindow().toLastFrame();
});

api.bind('1', mash, function() {
  api.alert("Layout 1", 0.5);
  App.byTitle("Google Chrome").firstWindow().toRightHalf();
  App.byTitle("Terminal").firstWindow().toGrid(0, 0.7, 0.5, 0.3);
  App.byTitle("Sublime Text").firstWindow().toGrid(0, 0, 0.5, 0.7);
});

api.bind('2', mash, function() {
  api.alert("Layout 2", 0.5);
  App.byTitle("Terminal").firstWindow().toRightHalf();
  App.byTitle("Sublime Text").firstWindow().toLeftHalf();
});


// Let's extend the Phoenix classes a little.
//

var lastFrames = {};

Window.prototype.toGrid = function(x, y, width, height) {
  var screen = this.screen().frameWithoutDockOrMenu();

  this.rememberFrame();

  this.setFrame({
    x:      Math.round(x * screen.width)       + padding    + screen.x,
    y:      Math.round(y * screen.height)      + padding    + screen.y,
    width:  Math.round(width * screen.width)   - 2*padding,
    height: Math.round(height * screen.height) - 2*padding
  });

  this.focusWindow();

  return this;
}

Window.prototype.toFullScreen = function() {
  return this.toGrid(0, 0, 1, 1);
}

Window.prototype.toTopHalf = function() {
  return this.toGrid(0, 0, 1, 0.5);
}

Window.prototype.toBottomHalf = function() {
  return this.toGrid(0, 0.5, 1, 0.5);
}

Window.prototype.toLeftHalf = function() {
  return this.toGrid(0, 0, 0.5, 1);
}

Window.prototype.toRightHalf = function() {
  return this.toGrid(0.5, 0, 0.5, 1);
}

Window.prototype.rememberFrame = function() {
  lastFrames[this] = this.frame();
}

Window.prototype.toLastFrame = function() {
  var lastFrame = lastFrames[this];
  if (lastFrame) {
    this.rememberFrame();
    this.setFrame(lastFrame);
  }
  return this;
}

App.byTitle = function(title) {
  var apps = this.runningApps();

  for (i = 0; i < apps.length; i++) {
    var app = apps[i];
    if (app.title() == title) {
      app.show();
      return app;
    }
  }
}

App.prototype.firstWindow = function() {
  return this.visibleWindows()[0];
}
