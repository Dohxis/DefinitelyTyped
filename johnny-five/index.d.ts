// Type definitions for johnny-five
// Project: https://github.com/rwaldron/johnny-five
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node"/>


export interface AccelerometerOption {
    controller: string;
}

export interface AccelerometerGeneralOption {
    controller?: string;
}

export interface AccelerometerAnalogOption extends AccelerometerGeneralOption {
    pins: string[];
    sensitivity?: number;
    aref?: number;
    zeroV?: number | number[];
    autoCalibrate?: boolean;
}

export interface AccelerometerMPU6050Option extends AccelerometerGeneralOption {
    sensitivity?: number;
}

export interface AccelerometerMMA7361Option extends AccelerometerGeneralOption {
    sleepPin?: number | string;
}

export declare class Accelerometer {
    constructor(option: AccelerometerGeneralOption | AccelerometerAnalogOption | AccelerometerMPU6050Option | AccelerometerMMA7361Option);
    on(event: string, cb: () => void): void;
    on(event: "change", cb: () => void): void;
    on(event: "data", cb: (freq: any) => void): void;
    hasAxis(name: string): void;
    enable(): void;
    disable(): void;
}

export declare class Animation {
    constructor(option: Servo | Servo[]);
    enqueue(segment: any): void;
    play(): void;
    pause(): void;
    stop(): void;
    next(): void;
    speed(speed: number[]): void;

    target: number;
    duration: number;
    cuePoints: number[];
    keyFrames: number;
    easing: string;
    loop: boolean;
    loopback: number;
    metronomic: boolean;
    progress: number;
    currentSpeed: number;
    fps: number;
}

export interface ButtonOptions {
    pin: number | string;
    invert?: boolean;
    isPullup?: boolean;
    holdtime?: number;
}

export declare class Button {
    constructor(pin: number | string | ButtonOptions);
    on(event: string, cb: () => void): void;
    on(event: "hold", cb: (holdTime: number) => void): void;
    on(event: "down", cb: () => void): void;
    on(event: "press", cb: () => void): void;
    on(event: "up", cb: () => void): void;
    on(event: "release", cb: () => void): void;
}

export interface BoardOptions {
    id?: number | string;
    port?: string | any;
    repl?: boolean;
}

export interface Repl {
    inject(object: any): void;
}

export declare class Board {
    constructor(option?: BoardOptions);
    on(event: string, cb: () => void): void;
    on(event: "ready", cb: () => void): void;
    on(event: "connect", cb: () => void): void;
    pinMode(pin: number, mode: number): void;
    analogWrite(pin: number, value: number): void;
    analogRead(pin: number, cb: (item: number) => void): void;
    digitalWrite(pin: number, value: number): void;
    digitalRead(pin: number, cb: (item: number) => void): void;
    shiftOut(dataPin: Pin, clockPin: Pin, isBigEndian: boolean, value: number): void;
    wait(ms: number, cb: () => void): void;
    loop(ms: number, cb: () => void): void;

    isReady: boolean;
    io: any;
    id: string;
    pins: Pin[];
    port: string;
    inject: Repl;
}

export interface CompassOptions {
    controller: string;
    gauss?: number;
}

export declare class Compass {
    constructor(option: CompassOptions);
    on(event: string, cb: () => void): void;
    on(event: "change", cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
}

export interface ESCOption {
    pin: number | string;
    range?: number[];
    startAt?: number;
}

export declare class ESC {
    constructor(option: number | string | ESCOption);
    speed(value: number): void;
    min(): void;
    max(): void;
    stop(): void;
}

export interface GyroGeneralOption {
    controller?: string;
}

export interface GyroAnalogOption extends GyroGeneralOption {
    pins: string[];
    sensitivity: number;
    resolution?: number;
}

export interface GyroMPU6050Option extends GyroGeneralOption {
    sensitivity: number;
}

export declare class Gyro {
    constructor(option: GyroGeneralOption | GyroAnalogOption | GyroMPU6050Option);
    on(event: string, cb: () => void): void;
    on(event: "change", cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
    recalibrate(): void;
}

export interface IMUGeneralOption {
    controller?: string;
    freq?: number;
}

export interface IMUMPU6050Option extends IMUGeneralOption {
    address: number;
}

export declare class IMU {
    constructor(option: IMUGeneralOption | IMUMPU6050Option);
    on(event: string, cb: () => void): void;
    on(event: "change", cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
}

export declare namespace IR {
    export interface MotionOption {
        pin: number | string;
    }

    export class Motion {
        constructor(option: number | MotionOption);
        on(event: string, cb: () => void): void;
        on(event: "data", cb: (data: any) => void): void;
        on(event: "motionstart", cb: () => void): void;
        on(event: "motionend", cb: () => void): void;
        on(event: "calibrated", cb: () => void): void;
    }

    export interface PloximityOption {
        pin: number | string;
        controller: string;
    }

    export class Proximity {
        constructor(option: number | PloximityOption);
        on(event: string, cb: () => void): void;
        on(event: "data", cb: (data: any) => void): void;
        on(event: "change", cb: () => void): void;
    }

    export interface ArrayOption {
        pins: number[] | string[];
        emitter: number | string;
        freq?: number;
    }

    export interface LoadCalibrationOption {
        min: number[];
        max: number[];
    }

    export namespace Reflect {
        export class Array {
            constructor(option: ArrayOption);
            enable(): void;
            disable(): void;
            calibrate(): void;
            calibrateUntil(predicate: () => void): void;
            loadCalibration(option: LoadCalibrationOption): void;
            on(event: string, cb: () => void): void;
            on(event: "data", cb: (data: any) => void): void;
            on(event: "calibratedData", cb: (data: any) => void): void;
            on(event: "line", cb: (data: any) => void): void;
        }
    }
}

export interface JoystickOption {
    pins: string[];
}

export declare class Joystick {
    constructor(option: JoystickOption);
    on(event: string, cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
    on(event: "change", cb: () => void): void;
    on(event: "axismove", cb: (error: Error, date: Date) => void): void;

    axis: number[];
    raw: number[];
}


export interface LCDGeneralOption {
    rows?: number;
    cols?: number;
}

export interface LCDI2COption extends LCDGeneralOption {
    controller: string;
    backlight?: number;
}

export interface LCDParallelOption extends LCDGeneralOption {
    pins: any[];
    backlight?: number;
}

export declare class LCD {
    constructor(option: LCDGeneralOption | LCDI2COption | LCDParallelOption);
    print(message: string): void;
    useChar(char: string): void;
    clear(): void;
    cursor(row: number, col: number): void;
    home(): void;
    display(): void;
    noDisplay(): void;
    blink(): void;
    noBlink(): void;
    autoscroll(): void;
    noAutoscroll(): void;
}

export interface LedOption {
    pin: number;
    type?: string;
    controller?: string;
    address?: number;
    isAnode?: boolean;
}

export declare class Led {
    constructor(option: number | LedOption);
    on(): void;
    off(): void;
    toggle(): void;
    strobe(ms: number): void;
    blink(): void;
    blink(ms: number): void;
    brightness(val: number): void;
    fade(brightness: number, ms: number): void;
    fadeIn(ms: number): void;
    fadeOut(ms: number): void;
    pulse(ms: number): void;
    stop(ms: number): void;
}

export declare namespace Led {
    export interface DigitsOption {
        pins: any;
        devices?: number;
    }

    export class Digits {
        constructor(option: DigitsOption);
        on(): void;
        on(index: number): void;
        off(): void;
        off(index: number): void;
        clear(): void;
        clear(index: number): void;
        brightness(value: number): void;
        brightness(index: number, value: number): void;
        draw(position: number, character: number): void;
        draw(index: number, position: number, character: number): void;
    }

    export interface MatrixOption {
        pins: any;
        devices?: number;
    }

    export interface MatrixIC2Option {
        controller: string;
        addresses?: any[];
        isBicolor?: boolean;
        dims?: any;
        rotation?: number;
    }

    export class Matrix {
        constructor(option: MatrixOption | MatrixIC2Option);
        on(): void;
        on(index: number): void;
        off(): void;
        off(index: number): void;
        clear(): void;
        clear(index: number): void;
        brightness(value: number): void;
        brightness(index: number, value: number): void;
        led(row: number, col: number, state: any): void;
        led(index: number, row: number, col: number, state: any): void;
        row(row: number, val: number): void;
        row(index: number, row: number, val: number): void;
        column(row: number, val: number): void;
        column(index: number, row: number, val: number): void;
        draw(position: number, character: number): void;
        draw(index: number, position: number, character: number): void;
    }

    export interface RGBOption {
        pins: number[];
        isAnode?: boolean;
        controller?: string;
    }

    export class RGB {
        constructor(option: RGBOption);
        on(): void;
        off(): void;
        color(value: number): void;
        toggle(): void;
        strobe(ms: number): void;
        brightness(value: number): void;
        fadeIn(ms: number): void;
        fadeOut(ms: number): void;
        pulse(ms: number): void;
        stop(ms: number): void;
    }
}

export interface MotorOption {
    pins: any;
    current?: any;
    invertPWM?: boolean;
    address?: number;
    controller?: string;
    register?: any;
    bits?: any;
}

export declare class Motor {
    constructor(option: number[] | MotorOption);
    forward(speed: number): void;
    fwd(speed: number): void;
    reverse(speed: number): void;
    rev(speed: number): void;
    start(): void;
    start(speed: number): void;
    stop(): void;
    brake(): void;
    release(): void;
}

export interface PiezoOption {
    pin: number;
}

export declare class Piezo {
    constructor(option: number | PiezoOption);
    frequency(frequency: number, duration: number): void;
    play(tune: any, cb?: () => void): void;
    tone(frequency: number, duration: number): void;
    noTone(): void;
    off(): void;
}

export interface PinOption {
    id?: number | string;
    pin: number | string;
    type?: string;
}

export interface PinState {
    supportedModes: number[];
    mode: number;
    value: number;
    report: number;
    analogChannel: number;
}

export declare class Pin {
    constructor(option: number | string | PinOption);
    query(cb: (pin: PinState) => void): void;
    high(): void;
    low(): void;
    write(value: number): void;
    read(cb: (value: number) => void): void;
    static write(pin: number, value: number): void;
    static read(pin: number, cb: (data: number) => void): void;
}

export interface PingOption {
    pin: number | string;
    freq?: number;
    pulse?: number;
}

export declare class Ping {
    constructor(option: number | PingOption);
}

export interface RelayOption {
    pin: number | string;
    type?: string;
}

export declare class Relay {
    constructor(option: number | RelayOption);
    open(): void;
    close(): void;
    toggle(): void;
}

export interface SensorOption {
    pin: number | string;
    freq?: boolean;
    threshold?: number;
}

export declare class Sensor {
    constructor(option: number | string | SensorOption);
    scale(low: number, high: number): Sensor;
    scale(range: number[]): Sensor;
    scale(): Sensor;
    booleanAt(barrier: number): boolean;
    within(range: number[], cb: () => void): void;
    on(event: string, cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
    on(event: "change", cb: () => void): void;
}

export interface ServoGeneralOption {
    pin: number | string;
    range?: number[];
    type?: string;
    startAt?: number;
    isInverted?: boolean;
    center?: boolean;
    controller?: string;
}

export interface ServoPCA9685Option extends ServoGeneralOption {
    address?: number;
}

export interface ServoSweepOpts {
    range: number[];
    interval?: number;
    step?: number;
}

export declare class Servo {
    constructor(option: number | string | ServoGeneralOption);
    to(degrees: number, ms?: number, rage?: number): void;
    min(): void;
    max(): void;
    center(): void;
    sweep(): void;
    sweep(range: number[]): void;
    sweep(opt: ServoSweepOpts): void;
    stop(): void;
    cw(speed: number): void;
    ccw(speed: number): void;
    on(event: string, cb: () => void): void;
    on(event: "move:complete", cb: () => void): void;
}

export interface ShiftRegisterOption {
    pins: any;
}

export declare class ShiftRegister {
    constructor(option: ShiftRegisterOption);
    send(...value: number[]): void;
}

export interface SonarOption {
    pin: number | string;
    device: string;
    freq?: number;
    threshold?: number;
}

export declare class Sonar {
    constructor(option: number | string | SonarOption);
    within(range: number[], cb: () => void): void;
    within(range: number[], unit: string, cb: () => void): void;
    on(event: string, cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
    on(event: "change", cb: () => void): void;
}

export interface StepperOption {
    pins: any;
    stepsPerRev: number;
    type: number;
    rpm?: number;
    direction?: number;
}

export declare namespace Stepper {
    export class TYPE {
        static DRIVER: number;
        static TWO_WIRE: number;
        static FOUR_WIRE: number;
    }
}

export declare class Stepper {
    constructor(option: number | string | StepperOption);
    step(stepsOrOpts: any, cb: () => void): void;
    rpm(): Stepper;
    rpm(value: number): Stepper;
    speed(): Stepper;
    speed(value: number): Stepper;
    direction(): Stepper;
    direction(value: number): Stepper;
    accel(): Stepper;
    accel(value: number): Stepper;
    decel(): Stepper;
    decel(value: number): Stepper;
    cw(): Stepper;
    ccw(): Stepper;

    within(range: number[], cb: () => void): void;
    within(range: number[], unit: string, cb: () => void): void;
    on(event: string, cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
    on(event: "change", cb: () => void): void;
}

export interface TemperatureOption {
    controller?: string;
    pin: string | number;
    toCelsius?: (val: number) => number;
    freq?: number;
}

export declare class Temperature {
    constructor(option: TemperatureOption);
    on(event: string, cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
    on(event: "change", cb: () => void): void;
}