'use strict'

var Seneca = require('../..')

// The logger below prints super condensed logs. It is useful
// for checking call orders and pattern movements when debugging.

function Logger() {}

// Loggers are loaded via a `preload` function. This is a way
// to signal seneca infrastructural plugins over business logic
// plugins, which get loaded later in the chain.
Logger.preload = function() {
  var seneca = this

  // Leftpad, AMIRITE
  function pad(content, length) {
    content = content || ''

    while (content.length < length) {
      content = content + ' '
    }

    return content
  }

  // Everything something is logged it calls whatever
  // custom adapter is set. Adapters are passed the
  // current instance of Seneca plus the raw payload.
  function adapter(context, payload) {
    var when = payload.when.toString()
    var kind = pad(payload.kind || '-', 8).toUpperCase()
    var type = pad(payload.case || '-', 8).toUpperCase()
    var text = payload.pattern || payload.notice || '-'

    console.log(when, kind, type, text)
  }

  // Seneca looks for logging adapters in `extend.logger`
  // simply assign your adapter to receive the logs.
  return {
    extend: {
      logger: adapter
    }
  }
}

module.exports = Logger;