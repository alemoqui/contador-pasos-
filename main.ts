input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showNumber(paso * 0.67)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(paso)
})
input.onButtonPressed(Button.B, function () {
    paso = 0
    basic.showNumber(0)
})
let paso = 0
paso = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1300) {
        paso += 1
    }
})
