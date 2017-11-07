'use strict'

require('seneca')()
  .use('offerlib')
  .listen(10202)
  .ready(function(){
    this.act({role:'offer',cmd:'provide'},console.log)
  })