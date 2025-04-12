// Move servo to 180 degrees when Button A is pressed
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
// Move servo to 94 degrees when Button B is pressed
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 94)
})
// Move servo to 94 degrees when rotary encoder button (connected to P1) is pressed
input.onPinPressed(TouchPin.P1, function () {
    pins.servoWritePin(AnalogPin.P0, 94)
})
basic.showIcon(IconNames.Heart)
