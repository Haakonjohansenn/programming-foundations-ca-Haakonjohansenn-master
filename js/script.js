const phoneOne = {
  brand: "oneplus",
  model: 8,
  phoneon: true,
  modes: ["silent", "vibrating", "ring"],
  silentmode: function() {
    if (this.modes[0] === "silent") {
      console.log("The phone is on silent mode.")
    } else if (this.modes[0] === "vibrating") {
      console.log("The phone is on vibrating mode.")
    } else if (this.modes[0] === "ring") {
      console.log("The phone is on ring mode.")
    }
  }
};

phoneOne.silentmode();
console.log(phoneOne);

const phoneModes = {
  modes: [{
    mode: "silent",
    frequency: 0
  },
  {
    mode: "vibrating",
    frequency: 1
  },
  {
    mode: "ring",
    frequency: 2
  }]
};

const phoneTwo = {
  brand: {
    name: "oneplus",
    model: 8
  },
  phoneon: false,
  modes: ["silent", "vibrating", "ring"],
  powerbutton: function() {
    phone.on = !phone.on
  }
};

phoneTwo.powerbutton();
console.log(phoneTwo);