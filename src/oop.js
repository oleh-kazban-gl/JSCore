/* eslint-disable max-classes-per-file */
export const ENGINE_STATUS = {
  started: 'STARTED',
  stopped: 'STOPPED',
};
export const CART_STATUS = {
  empty: 'EMPTY',
  loaded: 'LOADED',
  loading: 'LOADING',
  unloaded: 'UNLOADED',
  unloading: 'UNLOADING',
};

export class Engine {
  constructor() {
    this.status = ENGINE_STATUS.stopped;
  }

  start() {
    this.status = ENGINE_STATUS.started;
  }

  stop() {
    this.status = ENGINE_STATUS.stopped;
  }

  getStatus() {
    return `ENGINE: ${this.status}`;
  }
}

// function Vehicle() {}
// Vehicle.prototype.log = function(message) {}

export class Vehicle {
  static beep() {
    console.log('BEEP');
  }

  static actionLogger(message) {
    console.log('MSG: ', message);
  }

  static showContext() {
    console.log('context: ', this);
  }

  constructor(type) {
    this.type = type;
    this.engine = new Engine();
  }

  log(message) {
    Vehicle.actionLogger(`${this.type}: ${message}`);
  }

  getEngineStatus() {
    return this.engine.getStatus();
  }

  startEngine() {
    this.engine.start();
  }

  stopEngine() {
    this.engine.stop();
  }
}

export class Truck extends Vehicle {
  constructor(power, manufacturer, model, color = 'black') {
    super('truck');
    super.log('has just been created');

    this.power = power;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.cartStatus = CART_STATUS.empty;
  }

  log(message) {
    console.log(`${this.type}: ${this.power} | ${this.manufacturer} | ${this.model} | ${this.color.toUpperCase()}: ${message}`);
  }

  loadCart() {
    this.cartStatus = CART_STATUS.loading;
  }

  unloadCart() {
    this.cartStatus = CART_STATUS.unloading;
  }
}

// const vehicle1 = new Vehicle('abstract');
const truck1 = new Truck(200, 'Man', 'E200');

// console.log('vehicle1: ', vehicle1);
// vehicle1.log('test');
// Vehicle.showContext();
// Vehicle.showContext.bind(truck1)();

console.log('truck1: ', truck1);

truck1.startEngine();
console.log(truck1.getEngineStatus());
truck1.stopEngine();
console.log(truck1.getEngineStatus());
