/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((res, req) => {
    try {
      setTimeout(() => res(), millis)
    } catch(err) {
      req(err)
    }
  })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */