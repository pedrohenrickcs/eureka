// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/url.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = void 0;
const URL = 'https://challenge-fielo.herokuapp.com';
exports.URL = URL;
},{}],"js/profile.js":[function(require,module,exports) {
"use strict";
'use-strict';

var _url = require("./url");

// const handlePrograms = require('./programs');
const handleProfileUser = (id, token) => {
  $.ajax({
    url: `${_url.URL}/users/${id}`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('PROFILE', data);
      renderTemplateProfile(data); // handlePrograms(data.id, token);
    }
  });
};

const renderTemplateProfile = data => {
  const {
    image,
    name,
    balance
  } = data;
  const svg = '<svg class="profile__image-item" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><defs><style>.cls-1{fill:#b3b3b3;fill-rule:evenodd;}.cls-2{fill:#fff;}</style></defs><title>no-profile-picture</title><polygon class="cls-1" points="0 0 122.88 0 122.88 122.88 0 122.88 0 0 0 0"/><path class="cls-2" d="M48.64,77.72c.65-1.48,1.24-3.1,1.61-4.19a52.43,52.43,0,0,1-4.22-6L41.76,60.7a12.55,12.55,0,0,1-2.43-6.21,4.94,4.94,0,0,1,.43-2.23,4.1,4.1,0,0,1,1.47-1.71,4.73,4.73,0,0,1,1-.52,107.7,107.7,0,0,1-.2-12.23A16.87,16.87,0,0,1,42.58,35a16.39,16.39,0,0,1,7.22-9.2,22.79,22.79,0,0,1,6.05-2.69c1.37-.39-1.15-4.72.25-4.87,6.79-.7,17.77,5.5,22.51,10.62A16.63,16.63,0,0,1,82.8,39.37l-.27,11.1h0a3.06,3.06,0,0,1,2.25,2.32c.35,1.36,0,3.25-1.18,5.84h0a.37.37,0,0,1-.07.14l-4.87,8a41.6,41.6,0,0,1-6,8.24c.23.32.45.63.66.94,8.25,12.11,19.38,5.88,32.32,15.36l-.38.51v12.82H17.22V91.47h.24a1.14,1.14,0,0,1,.56-.61C26.4,86,45.72,84.35,48.64,77.72Z"/></svg>';
  const imageSrc = `<img class="profile__image-item" src="${image}" />`;
  const validImage = image ? imageSrc : svg;
  const profileUser = `
        <div>
          <div class="profile__image">${validImage}</div>
          <h2 class="profile__name">${name}</h2>
        </div>
        <div class="profile__balance">
          <div class="profile__item">
            <span class="profile__balance-info">${balance.points}</span>
            <span>Points</span>
          </div>
          <div class="profile__item">
            <span class="profile__balance-info">${balance.miles}</span>
            <span>Miles</span>
          </div>
          <div class="profile__item">
            <span class="profile__balance-info">${balance.currency.toFixed(1)}</span>
            <span>Currency</span>
          </div>
        </div>
      `;
  $('#profile').html(profileUser);
};

module.exports = handleProfileUser;
},{"./url":"js/url.js"}],"js/programs.js":[function(require,module,exports) {
"use strict";
'use-strict';

var _url = require("./url");

const handlePrograms = (userId, token) => {
  console.log('user', userId);
  $.ajax({
    url: `${_url.URL}/programs/${userId}/levels`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      console.log('PROGRAMS', data);
    }
  });
};

module.exports = handlePrograms;
},{"./url":"js/url.js"}],"js/activitiesUser.js":[function(require,module,exports) {
"use strict";
'use-strict';

var _url = require("./url");

const handlePrograms = require('./programs');

const handleActivities = (userId, token) => {
  $.ajax({
    url: `${_url.URL}/users/${userId}/activities`,
    type: 'GET',
    'headers': {
      'x-access-token': token
    },
    success: function (data) {
      handlePrograms(userId, token);
      renderTemplateActivities(data);
    }
  });
};

const renderTemplateActivities = data => {
  data.map(item => {
    console.log('ActivityFeed', item);
  });
};

module.exports = handleActivities;
},{"./url":"js/url.js","./programs":"js/programs.js"}],"js/users.js":[function(require,module,exports) {
"use strict";
'use-strict';

var _url = require("./url");

const handleProfileUser = require('./profile');

const handleActivities = require('./activitiesUser');

const handleUsers = data => {
  const {
    auth,
    token
  } = data;

  if (auth) {
    $.ajax({
      url: `${_url.URL}/users`,
      type: 'GET',
      'headers': {
        'x-access-token': token
      },
      success: function (data) {
        renderTemplateUsers(data);
        clickUser(token);
      }
    });
  }
};

const renderTemplateUsers = data => {
  const $allUsers = $('#name .js-users');
  data.map((item, index) => {
    const {
      image,
      name,
      id,
      balance
    } = item;
    const svg = '<svg class="users__image-item" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><defs><style>.cls-1{fill:#b3b3b3;fill-rule:evenodd;}.cls-2{fill:#fff;}</style></defs><title>no-profile-picture</title><polygon class="cls-1" points="0 0 122.88 0 122.88 122.88 0 122.88 0 0 0 0"/><path class="cls-2" d="M48.64,77.72c.65-1.48,1.24-3.1,1.61-4.19a52.43,52.43,0,0,1-4.22-6L41.76,60.7a12.55,12.55,0,0,1-2.43-6.21,4.94,4.94,0,0,1,.43-2.23,4.1,4.1,0,0,1,1.47-1.71,4.73,4.73,0,0,1,1-.52,107.7,107.7,0,0,1-.2-12.23A16.87,16.87,0,0,1,42.58,35a16.39,16.39,0,0,1,7.22-9.2,22.79,22.79,0,0,1,6.05-2.69c1.37-.39-1.15-4.72.25-4.87,6.79-.7,17.77,5.5,22.51,10.62A16.63,16.63,0,0,1,82.8,39.37l-.27,11.1h0a3.06,3.06,0,0,1,2.25,2.32c.35,1.36,0,3.25-1.18,5.84h0a.37.37,0,0,1-.07.14l-4.87,8a41.6,41.6,0,0,1-6,8.24c.23.32.45.63.66.94,8.25,12.11,19.38,5.88,32.32,15.36l-.38.51v12.82H17.22V91.47h.24a1.14,1.14,0,0,1,.56-.61C26.4,86,45.72,84.35,48.64,77.72Z"/></svg>';
    const imageSrc = `<img class="users__image-item" src="${image}" />`;
    const validImage = image ? imageSrc : svg;
    const renderUsers = `
              <li class="users__info js-name" data-id=${id}>
                <span class="users__pos">${index + 1}</span>
                <span class="users__image">
                  ${validImage}
                  <span class="users__name">${name}</span>
                </span>
                <span class="users__points">${balance.points}</span>
              </li>
            `;
    $allUsers.append(renderUsers);
  });
};

const clickUser = token => {
  $('#name .js-name').on('click', function () {
    const idUser = $(this).data('id');
    $('#profile, #activities').show();
    handleProfileUser(idUser, token);
    handleActivities(idUser, token);
  });
};

module.exports = handleUsers;
},{"./url":"js/url.js","./profile":"js/profile.js","./activitiesUser":"js/activitiesUser.js"}],"js/auth.js":[function(require,module,exports) {
"use strict";
'use-strict';

var _url = require("./url");

const handleUsers = require('./users');

const auth = () => {
  $.ajax({
    url: `${_url.URL}/auth`,
    type: 'POST',
    'headers': {
      'x-app-id': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb'
    },
    success: function (data) {
      handleUsers(data);
    }
  });
};

module.exports = auth;
},{"./url":"js/url.js","./users":"js/users.js"}],"js/index.js":[function(require,module,exports) {
'use-strict';

(function () {
  const auth = require('./auth');

  $(window).on('load', function () {
    auth();
  });
})();
},{"./auth":"js/auth.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37485" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map