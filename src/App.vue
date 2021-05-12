<template>
  <div id="app">
    <div id="bg">
      <canvas id="bg-canvas" resize="true"></canvas>
    </div>
    <router-view/>
  </div>
</template>

<script>
import paper from 'paper'

export default {
  name: 'app',
  methods: {
    draw: () => {
      var ctx = document.getElementById('bg-canvas')
      paper.setup(ctx)

      // var xAxis = this.xAxis
      // var yAxis = this.yAxis
      var xAxis = window.innerWidth
      var yAxis = window.innerHeight

      var paths = [null, null, null]
      for (let p = 0; p < paths.length; p++) {
        paths[p] = new paper.Path({
          strokeColor: '#fff',
          strokeWidth: 1
        })
      }
      var wormLen = 42
      var worms = [null, null, null]
      for (let w = 0; w < worms.length; w++) {
        worms[w] = new paper.Path({
          strokeColor: '#47fc00',
          // fillColor: '#ffffff',
          strokeWidth: 5,
          strokeCap: 'round',
          opacity: 0.42
        })
        while (worms[w].segments.length < wormLen) {
          worms[w].add(new paper.Point(0, 0))
        }
      }

      // Define a function to generate a random polynomial of degree 3
      function genNewCurve (path) {
        path.removeSegments()
        let xScale = xAxis / 20
        let yScale = yAxis / 2

        // let ar = (Math.random() < 0.5 ? -1 : 1)
        let br = (Math.random() < 0.5 ? -1 : 1)
        let cr = (Math.random() < 0.5 ? -1 : 1)
        let dr = (Math.random() < 0.5 ? -1 : 1)

        // let a = Math.floor(Math.random() * 2) * ar
        let b = Math.floor(Math.random() * 5) * br
        let c = Math.floor(Math.random() * 10) * cr
        let d = Math.floor(Math.random() * 10) * dr

        function polynomial (x) {
          return b * (x ** 3) + c * (x ** 2) + d * (x ** 1)
        }

        for (var i = -10; i <= 10; i++) {
          var segment = xScale
          var init = false

          // console.log('x: ' + (i * segment) + ' y: ' + (polynomial(i) + yScale))
          if (i === -10) {
            path.moveTo(new paper.Point((i + 10) * segment, polynomial(i) + yScale))
          }
          if (!init && ((polynomial(i) > 0) || (polynomial(i) < yAxis))) {
            segment = (xAxis / (20 - i))
            init = true
          }
          path.add(new paper.Point((i + 10) * segment, polynomial(i) + yScale))
        }
        path.smooth()
      }

      // Define helper function getPointAtPercent to link Worm to Path
      paper.Path.prototype.getPointAtPercent = function (percent) {
        return this.getLocationAt(percent * this.length).getPoint()
      }

      // Setup animation params
      let duration = 4000
      let animationEndTime = [null, null, null]

      // Trigger redraw
      paper.view.onFrame = function onFrame () {
        let now = Date.now()

        for (let i = 0; i < paths.length; i++) {
          if (now > animationEndTime[i]) {
            animationEndTime[i] = now + duration + (Math.round((Math.random() * 3000)))
            let hueChange = '+= ' + (Math.round((Math.random() * 500)))
            worms[i].tween({
              'strokeColor.hue': hueChange,
              'strokeWidth': (Math.round((Math.random() * 5)) + 2)
            }, duration)
            genNewCurve(paths[i])
          }
          let percent = (duration - (animationEndTime[i] - now)) / duration

          for (let s = 0; s < worms[i].segments.length; s++) {
            let tailPosition = ((percent - (0.005 * s)) > 0) ? (percent - (0.005 * s)) : 0
            worms[i].segments[s].point = paths[i].getPointAtPercent(tailPosition)
            worms[i].smooth()
          }
        }
        xAxis = window.innerWidth
        yAxis = window.innerHeight
      }
      paper.view.draw()
    }
  },
  mounted () {
    this.draw()
  }
}
</script>

<style lang="scss">
  @import 'assets/css/normalize.css';
  @import "assets/css/skeleton.css";

  @font-face {
    font-family: 'Roboto-Regular';
    src: url('assets/font/Roboto-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway-Regular';
    src: url('assets/font/Raleway-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  html, body, p {
    font-family: Raleway-Regular;
    letter-spacing: 3px;
    color: #000000;
  }

  h1, h2, h3, h4 {
    font-family: Roboto-Regular;
  }

  #bg {
    position: fixed;
    width: 100%;
    height: 100%;
    /*background-color: #0FA0CE;*/
    top: 0;
    left: 0;
  }

  #bg-canvas {
    width: 100%;
    height: 99%;
  }

  .trans {
    -webkit-animation: trans 2s ease-in-out;
    -o-animation: trans 2s ease-in-out;
    -ms-animation: trans 2s ease-in-out;
    -moz-animation: trans 2s ease-in-out;
    animation: trans 2s ease-in-out;
    animation-fill-mode: forwards;
  }

  @-webkit-keyframes trans {
    0% {
      background: #FFFFFF;
      color: rgba(0, 0, 0, 1);
    }
    100% {
      background: #000000;
      color: rgba(0, 0, 0, 0);
    }
  }

  @keyframes trans {
    0% {
      background: #FFFFFF;
      color: rgba(0, 0, 0, 1);
    }
    100% {
      background: #000000;
      color: rgba(0, 0, 0, 0);
    }
  }

</style>
