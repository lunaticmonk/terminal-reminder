#!/usr/bin/env node

'use strict';

const notifier = require('node-notifier');

function notify(message, duration) {
  setTimeout(() => {
    notifier.notify({
      title: 'Reminder',
      message: message,
      icon: './notiicon.png',
      sound: true,
      wait: true
    });
  }, duration * 60 * 1000);

}

notify(process.argv[2], process.argv[3]);