input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(200)
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Whole))
        basic.pause(500)
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Whole))
    }
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Double))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Double))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Whole))
    }
    basic.pause(500)
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Double))
    }
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Double))
    }
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
basic.showLeds(`
    # # # # .
    . . . . #
    . . . . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
