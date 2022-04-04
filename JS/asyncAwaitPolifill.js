function* customAwait(func) {
  yield func()
}