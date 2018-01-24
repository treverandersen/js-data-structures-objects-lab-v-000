// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}
  newDriver.name = 'Sam';
  newDriver.address = '11 Broadway';
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.name = 'Sam';
  driver.address = '12 Broadway';
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver}
  delete newDriver.name
  return newDriver
}

function destructivelyDeleteFromdriverByKey(driver, key) {
  delete newDriver.name
  return driver
}
