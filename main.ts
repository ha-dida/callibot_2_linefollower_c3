function lader () {
    calliBot2.servo(C2Servo.Servo1, 45)
    basic.pause(500)
    calliBot2.servo(C2Servo.Servo1, 90)
    basic.pause(500)
    calliBot2.servo(C2Servo.Servo1, 0)
    basic.pause(500)
}
function anhalten () {
    calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
}
function fahre_rechts () {
    calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 50)
    calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 20)
}
function fahre_links () {
    calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, 20)
    calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 50)
}
function fahre_zurück () {
    calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 50)
}
function LEDS_blinken () {
    calliBot2.setLed(C2Motor.beide, true)
    calliBot2.setRgbLed1(C2RgbLed.All, 0x00ff00, 8)
    basic.pause(1000)
    calliBot2.setLed(C2Motor.beide, false)
    calliBot2.setRgbLed1(C2RgbLed.All, 0x00ff00, 0)
    basic.pause(1000)
}
function kopdrehen () {
    calliBot2.servo(C2Servo.Servo2, 0)
    basic.pause(500)
    calliBot2.servo(C2Servo.Servo2, 90)
    basic.pause(500)
    calliBot2.servo(C2Servo.Servo2, 180)
    basic.pause(500)
    calliBot2.servo(C2Servo.Servo2, 90)
    basic.pause(500)
}
function fahre_vor () {
    calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
}
calliBot2.servo(C2Servo.Servo1, 0)
calliBot2.servo(C2Servo.Servo2, 90)
basic.pause(100)
let Index = false
basic.forever(function () {
    if (calliBot2.entfernung(C2Einheit.cm) <= 10) {
        anhalten()
        lader()
        kopdrehen()
        LEDS_blinken()
    } else {
        if (!(calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell)) && !(calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell))) {
            fahre_vor()
        } else if (!(calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell)) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell)) {
            fahre_links()
        } else if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) && !(calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell))) {
            fahre_rechts()
        }
    }
})
