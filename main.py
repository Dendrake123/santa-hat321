def on_button_pressed_ab():
    pins.servo_write_pin(AnalogPin.P13, 174)
    basic.pause(2000)
    pins.servo_write_pin(AnalogPin.P13, 86)
    basic.pause(2000)
    pins.servo_set_pulse(AnalogPin.P13, 1)
    basic.pause(2000)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pins.servo_write_pin(AnalogPin.P13, 89)
input.on_button_pressed(Button.B, on_button_pressed_b)
