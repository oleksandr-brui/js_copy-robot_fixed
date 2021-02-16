'use strict';

const robotSam = {
  serial: 24,
  name: 'Sam',
  wheels: 7
};
const newRobot = {};

for (const [key, value] of Object.entries(robotSam)) {
  newRobot[key] = robot[key];

  if (key === 'serial') {
    newRobot.serial = robot.serial + 1;
  }
}

console.log(newRobot);