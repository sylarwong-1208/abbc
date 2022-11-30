led.plotBrightness(0, 0, 167)
led.plotBrightness(1, 1, 120)
led.plotBrightness(2, 2, 136)
led.plotBrightness(3, 3, 174)
led.plotBrightness(4, 4, 129)
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    235
    )
})
