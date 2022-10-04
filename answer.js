function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}

function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}
