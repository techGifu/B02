//% weight=100 color=#0080ff icon="\uf1b2"
namespace 拡張基板02 {
    
    /** 
     * LEDブロック
     */
    //% blockId=LED_PWM
    //% block="%pin | のLEDの明るさを | %Value |％で点灯"
    //% weight=80 blockGap=8
    //% Value.min=0 Value.max=100 Value.defl=100
    //% group="LED" pin.defl=AnalogPin.P0
    export function LED_PWM(pin: AnalogPin,Value: number): void {
        let val = (Value * 1023) / 100;
        pins.analogWritePin(pin, val)
    }

    //% blockId=LED_OFF
    //% block="%pin | のLEDをオフにする"
    //% weight=80 blockGap=8e
    //% group="LED" pin.defl=DigitalPin.P0
    export function LED_OFF(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    /**
     * モータ
     */
    //% blockId=Mortor_ON
    //% block="%pin | のモータを回す"
    //% weight=80 blockGap=8
    //% group="モータ" pin.defl=DigitalPin.P0
    export function Motor_ON(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }
    //% blockId=Mortor_OFF
    //% block="%pin | のモータを停止"
    //% weight=80 blockGap=8
    //% group="モータ" pin.defl=DigitalPin.P0
    export function Motor_OFF(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    /**
     * 照度センサ
     */
    //% blockId=Brightness block="%pin | の照度センサの値(0-100) "
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="照度センサ" pin.defl=AnalogPin.P0
    export function Brightness(pin: AnalogPin): number {
        return (pins.analogReadPin(pin)/1023)*100
    }

    /**
     * 角度センサ
     */
    //% blockId=Angle block="%pin | の角度センサの値(0-100) "
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="角度センサ" pin.defl=AnalogPin.P0
    export function Angle(pin: AnalogPin): number {
        return (pins.analogReadPin(pin) / 1023) * 100
    }

    /**
     * 測距センサ
     */
    //% blockId=Distance block="%pin | の角度センサの値(0-100) "
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="測距センサ" pin.defl=AnalogPin.P0
    export function Distance(pin: AnalogPin): number {
        return (pins.analogReadPin(pin) / 1023) * 100
    }

    /**
     * 圧力センサ
     */
    //% blockId=Pressure block="%pin | の圧力センサの値(0-100) "
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="圧力センサ" pin.defl=AnalogPin.P0
    export function Pressure(pin: AnalogPin): number {
        return (pins.analogReadPin(pin) / 1023) * 100
    }

    /**
     * 超音波センサ
     */
    let distanceBackup: number = 0;
    //% blockId=Ultrasonic block="%pin | の超音波センサ（cm）の値 "
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="超音波センサ" pin.defl=DigitalPin.P0
    export function ultrasonicSensor(pin: DigitalPin): number {
        let duration = 0;
        let RangeInCentimeters = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 50000); // Max duration 50 ms
        RangeInCentimeters = duration * 153 / 44 / 2 / 100;
        if (RangeInCentimeters > 0) distanceBackup = RangeInCentimeters;
        else RangeInCentimeters = distanceBackup;
        basic.pause(50);
        return RangeInCentimeters;
    }
}
