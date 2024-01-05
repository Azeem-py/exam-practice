export const makeError = (errors, index, msg) => {
  const newError = errors.splice(index, 1)
  newError['msg'] = msg
  newError['show'] = true
  errors.splice(index, 0, newError)
  return [...errors]
}

export const reverseError = (errors, index) => {
  const newError = errors.splice(index, 1)
  newError['msg'] = ''
  newError['show'] = false
  errors.splice(index, 0, newError)
  return [...errors]
}
