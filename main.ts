input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 99; index++) {
        music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 9999; index++) {
        music.stopAllSounds()
    }
})
