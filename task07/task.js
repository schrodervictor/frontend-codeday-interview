/**
 * Create a new Car instance and change it's lightsOn state to true.
 * You are not allowed to create any new method for Car.
 */

var truck = {
    turnLightsOn: function (state) {
        this.lightsOn = state;
    }
};

function Car(color) {
    this.color = color || 'black';
}
