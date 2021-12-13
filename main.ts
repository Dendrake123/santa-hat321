function angleDance (angleMin: any[], angleMax: any[], numOfTimes: any[]) {
    for (let index = 0; index < 0; index++) {
        let angleMax = 0
        let angleMin = 0
        randomAngle = randint(angleMin, angleMax)
        pins.servoWritePin(AnalogPin.P13, randomAngle)
        naughtyLEDs.setPixelColor(randint(0, 11), neopixel.colors(NeoPixelColors.Red))
        naughtyLEDs.setPixelColor(randint(0, 11), neopixel.colors(NeoPixelColors.Green))
        niceLEDs.setPixelColor(randint(0, 11), neopixel.colors(NeoPixelColors.Red))
        niceLEDs.setPixelColor(randint(0, 11), neopixel.colors(NeoPixelColors.Green))
        naughtyLEDs.show()
        niceLEDs.show()
        basic.pause(200)
    }
}
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P13, startAngle)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P13, leftMostAngle)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P13, rightMostAngle)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P13, startAngle)
})
function chooseYourFate () {
    niceLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
    naughtyLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
    naughtyOrNice = randint(0, 1)
    if (naughtyOrNice == 0) {
        pins.servoWritePin(AnalogPin.P13, leftMostAngle)
        for (let index = 0; index <= 12; index++) {
            niceLEDs.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
            niceLEDs.show()
            basic.pause(100)
        }
        niceLEDs.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        niceLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
        niceLEDs.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        niceLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
        niceLEDs.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (naughtyOrNice == 1) {
        pins.servoWritePin(AnalogPin.P13, rightMostAngle)
        for (let index = 0; index <= 12; index++) {
            naughtyLEDs.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
            naughtyLEDs.show()
            basic.pause(100)
        }
        naughtyLEDs.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        naughtyLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
        naughtyLEDs.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        naughtyLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
        naughtyLEDs.showColor(neopixel.colors(NeoPixelColors.Red))
    }
}
let naughtyOrNice = 0
let randomAngle = 0
let naughtyLEDs: neopixel.Strip = null
let niceLEDs: neopixel.Strip = null
let rightMostAngle = 0
let leftMostAngle = 0
let startAngle = 0
startAngle = 90
leftMostAngle = 0
rightMostAngle = 180
let buttonGate = false
niceLEDs = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
naughtyLEDs = neopixel.create(DigitalPin.P1, 13, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P13, startAngle)
naughtyLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
niceLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    if (buttonGate != true) {
        pins.servoWritePin(AnalogPin.P13, startAngle)
        naughtyLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
        niceLEDs.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
