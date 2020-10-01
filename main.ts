// Created by: Ahmed Ali 
// Created Date: Oct 1, Thursday
// 
// This program used Servo motore
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 57)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
})
