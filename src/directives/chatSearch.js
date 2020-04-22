/**
 * Hightlight Message when match
 */
const ChatSearch = {
  // container: null,
  bind: function (el, binding) {
    console.log(el, binding.value)
    // const { target } = binding.value
    // this.container = Array.from(el.querySelectorAll(`[data-${target}]`))
    // console.log(this.container)
  },
  // inserted: function (el, binding) {
  //   console.log(el, binding.value)
  //   const { target } = binding.value
  //   this.container = Array.from(el.querySelectorAll(`[data-${target}]`))
  //   console.log(this.container)
  // },
  update: function (el, binding) {
    const { target, list, classStyle } = binding.value

    const container = Array.from(el.querySelectorAll(`[data-${target}]`))
    console.log(container)
    container.forEach(item => {
      item.classList.remove(classStyle)
    })

    list.forEach(item => {
      const targetSelector = `[data-${target}="${item.id}"]`
      const targetEle = el.querySelector(targetSelector)
      targetEle.classList.toggle(classStyle)
    })
  }
}

export default ChatSearch
