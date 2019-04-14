let getDom = id => document.querySelector(id)

let getDoms = id => document.querySelectorAll(id)

let updateDom = (arr, prefix) => {
  arr.forEach(val => {
    let doms = getDoms(`${prefix} ${val.dom}`.trim())
    Array.from(doms).forEach(dom => {
      val.style.forEach(style => {
        Object.entries(style).forEach(css => {
          dom.style[css[0]] = css[1]
        })
      })
    })
  })
}

let getMousePos = e => {
  let { clientX, clientY } = e
  return {
    x: clientX,
    y: clientY
  }
}

let getDomPos = dom => {
  let { left = 0, top = 0 } = dom.style
  return {
    x: parseInt(left),
    y: parseInt(top)
  }
}

export {
  getDom,
  getDoms,
  updateDom,
}
