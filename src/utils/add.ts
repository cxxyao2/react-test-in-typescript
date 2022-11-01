export const addAsync = (a: number, b: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      return resolve(a + b)
    }, 10000)
  )
