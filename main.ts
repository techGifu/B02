namespace Board02 {
    //% blockId=B02_SwitchON
    //% block="スイッチをオンにする"
    //% weight=80 blockGap=8
    export function SwitchON(): void {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }

    //% blockId=B02_SwitchPWM
    //% block="スイッチをオンにする（%Value ％）"
    //% weight=80 blockGap=8 advanced=true
    //% Value.min=0 Value.max=100 Value.defl=100
    export function SwitchPWM(Value: number): void {
        let val = (Value * 1023) / 100;
        pins.analogWritePin(AnalogPin.P1, val)
    }

    //% blockId=B02_SwitchOFF
    //% block="スイッチをオフにする"
    //% weight=80 blockGap=8e
    export function SwitchOFF(): void {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }

    //% blockId=B02_Sensor
    //% block="人感センサが反応した"
    //% weight=80 blockGap=8
    export function IsDetected(): boolean {
        if (pins.digitalReadPin(DigitalPin.P2) == 1)
            return true;
        return false;
    }

}
