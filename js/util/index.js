var _toString = Object.prototype.toString
var _hasOwnProperty = Object.prototype.hasOwnProperty
/**
 * Get the raw type string of a value e.g. [object Object]
 */
function toRawType(value) {
  return _toString.call(value).slice(8, -1)
}

function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return toRawType(obj) === 'Object'
}

function isRegExp(reg) {
  return toRawType(reg) === 'RegExp'
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null)
  var list = str.split(',')
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()] }
    : function (val) { return map[val] }
}
/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g
camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : '' })
})

var hyphenateRE = /\B([A-Z])/g
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null)
  return function cachedFn(str) {
    var hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}
/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key]
  }
  return to
}

function looseEqual(a, b) {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}