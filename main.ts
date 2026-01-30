basic.clearScreen()
basic.forever(function () {
    basic.showLeds(`
        . # . . .
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . # . . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # . . .
        # . . . .
        . # . . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # . # .
        # # . . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # .
        # # . # .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # # # # .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # #
        . . . . #
        # # # . #
        # # # # .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . # #
        # # # . #
        # # # # #
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
})
