// import BaseAPI from '@/api/BaseAPI'
import ChatMessage from './entity/ChatMessage'
import messages from './__mock/messages.json'

const ChatMessageAPI = {
  getChatMessage () {
    return new Promise((resolve) => {
      setTimeout(() => {
        const historyMessages = messages.map(message => new ChatMessage(message))
        resolve(historyMessages)
      }, 1000)
    })
  }
}

export default ChatMessageAPI
