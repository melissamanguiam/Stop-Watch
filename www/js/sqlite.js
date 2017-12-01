var timer = {
  seconds: 0,
  limit: null,
  id: null
}

function start() {
  if(!timer.id) {
    timer.id = setInterval(function() {
      if (!timer.limit) {
        timer.seconds++
      } else {
        if (timer.seconds < timer.limit) {
          timer.seconds++
        }
      }
    }, 1000)
  }
}

function stop() {
  clearInterval(timer.id)
  timer.id = null
}

function reset() {
  timer.seconds = 0
}

function limit(value) {
  $limit = document.querySelector('#limit')
  timer.limit = $limit.value
}

function render() {
  setInterval(function() {
    $seconds = document.querySelector('#seconds')
    $seconds.textContent = timer.seconds
  }, 16)
}

function swapPrimaryButton() {
  $active = document.querySelector('.primary.active')
  $hidden = document.querySelector('.primary.hidden')

  $active.classList.toggle('active')
  $active.classList.toggle('hidden')
  $hidden.classList.toggle('hidden')
  $hidden.classList.toggle('active')
}

function toggleConfiguration() {
  $window = document.querySelector('#limit-window')
  $window.classList.toggle('hidden')
}

var $start = document.querySelector('#start')
$start.addEventListener('click', start)
$start.addEventListener('click', swapPrimaryButton)

var $stop = document.querySelector('#stop')
$stop.addEventListener('click', stop)
$stop.addEventListener('click', swapPrimaryButton)

var $reset = document.querySelector('#reset')
$reset.addEventListener('click', reset)

var $configuration = document.querySelector('#configuration i')
$configuration.addEventListener('click', toggleConfiguration)

var $set = document.querySelector('#set')
$set.addEventListener('click', limit)

render()