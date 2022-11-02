function reportError() {
  return Promise.resolve({ success: true })
}
// non async
let data = reportError()
console.log('data is', data)
