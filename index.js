// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  driver.name = 'Sam';
  driver.address = '11 Broadway';
  return driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.name = 'Sam';
  driver.address = '12 Broadway';
  return driver
}
