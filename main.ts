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
let Index = 0
basic.forever(function () {
    if (calliBot2.entfernung(C2Einheit.cm) <= 10) {
        anhalten()
        lader()
        kopdrehen()
    } else {
        for (let Index = 0; Index <= 4; Index++) {
            if (!(calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell)) && !(calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell))) {
                fahre_zurück()
            } else if (!(calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell)) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell)) {
                fahre_links()
            } else if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) && !(calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell))) {
                fahre_rechts()
            }
        }
    }
})
