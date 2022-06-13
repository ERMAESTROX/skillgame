radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    if (led.point(0, 4)) {
        random = 0
        while (random == 0) {
            random = randint(0, 5)
        }
        radio.sendNumber(random)
        basic.showNumber(random)
        basic.pause(1000)
    }
})
let random = 0
radio.setGroup(1)
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
