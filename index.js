// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  o = Object.assign({}, driver)
  o[key] = value
  return o
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  newdriver = Object.assign({}, driver)
  return delete newdriver[key]
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key]
}
