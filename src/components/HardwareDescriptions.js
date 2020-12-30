import solenoidlock from './../assets/Solenoidlocktwo.JPG';
import weightsensor from './../assets/WeightSensor.JPG';


const outersection = {
    headertext: "A solenoid lock will be installed into the chute door. The control electronics and user interface will be attached to the exterior.",
    name : "Outer Panel",
    elaboration: "To determine the identity of the user for waste data collection, the user will open the chute either through RFID or by entering his identifying code into the keypad.",
    src: solenoidlock
};

const innersection = {
    headertext: "Two acrylic sheets with load cells (weight sensors) will be installed on the interior to measure the weight of the trash as it is disposed of.",
    name : "Inner Panel",
    elaboration: "Once the chute is unlocked, the control electronics will then drive the solenoid lock, unlocking the chute for trash to be thrown. The load cells will be used to measure the weight of trash on the tongue of the chute as it is being thrown. This data will then be logged into our serverless cloud database.",
    src: weightsensor
};


export {outersection,innersection};
