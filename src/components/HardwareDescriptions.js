import solenoidlock from './../assets/Solenoidlocktwo.JPG';
import weightsensor from './../assets/WeightSensor.JPG';


const outersection = {
    headertext: "An electromagnetic lock is installed onto a chute door, and activated through a user interface.",
    name : "Outer Panel",
    elaboration: "To determine the identity of the user for waste data collection, the user will open the chute either through RFID or by entering his identifying code into the keypad.",
    src: solenoidlock
};

const innersection = {
    headertext: "Weight sensors are installed on the interior of the chute to measure the weight of the trash the instant it is thrown.",
    name : "Inner Panel",
    elaboration: "The weight of the trash thrown is tracked in the few seconds it rests on the tongue of the chute, and is logged with the user’s name on the database.",
    src: weightsensor
};


export {outersection,innersection};
