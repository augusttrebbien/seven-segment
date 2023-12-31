let hourAdjust = 0
let time = 44786
scene.setBackgroundColor(13)
let seconds = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Half, 2)
let minutes = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
let colon = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ......ffff......
    ......ffff......
    ......ffff......
    ......ffff......
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ......ffff......
    ......ffff......
    ......ffff......
    ......ffff......
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    `, SpriteKind.Player)
let hours = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
let ampm = sevenseg.createDigit(SegmentStyle.Thick, 0)
ampm.setScale(SegmentScale.Half)
ampm.setRadix(DigitRadix.Alpha)
seconds.setDigitColor(15)
minutes.setDigitColor(15)
hours.setDigitColor(15)
ampm.setDigitColor(15)
seconds.x += 58
seconds.y += 8
minutes.x += 22
colon.x += -8
hours.x += -36
ampm.x += -66
ampm.y += -8
game.onUpdateInterval(1000, function () {
    if (time >= 24 * 60 * 60) {
        time = 0
    }
    seconds.count = time % 60
    minutes.count = time / 60 % 60
    hourAdjust = Math.trunc(time / (60 * 60) % 60)
    if (hourAdjust > 11) {
        ampm.setDigitAlpha(SegmentCharacter.P)
    } else {
        ampm.setDigitAlpha(SegmentCharacter.A)
    }
    if (hourAdjust > 12) {
        hourAdjust += -12
    } else if (hourAdjust == 0) {
        hourAdjust = 12
    }
    hours.count = hourAdjust
    time += 1
})
