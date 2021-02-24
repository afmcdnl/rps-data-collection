let Coin = 0
let item = 0
let Rock = 0
let Paper = 0
let Scissors = 0
/**
 * Shake
 * 
 * Pick a random number
 * 
 * If number is 0 -> Tail
 * 
 * if number is 1 Heads
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("Andrew")
})
input.onButtonPressed(Button.B, function () {
    Coin = randint(0, 1)
    if (Coin == 0) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Coin == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1000; index++) {
        item = randint(0, 2)
        if (item == 0) {
            basic.showIcon(IconNames.SmallSquare)
            Rock += 1
        } else if (item == 1) {
            basic.showIcon(IconNames.Square)
            Paper += 1
        } else {
            basic.showIcon(IconNames.Scissors)
            Scissors += 1
        }
    }
})
