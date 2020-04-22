/**
 * Hightlight Message when match
 */
const ChatSearch = {
  update: function (el, binding) {
    const { target, list, classStyle } = binding.value

    const container = Array.from(el.querySelectorAll(`[data-${target}]`))
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
