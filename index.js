// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}
  newDriver.name = 'Sam';
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.name = 'Sam';
  driver.address = '12 Broadway';
  return driver
}
