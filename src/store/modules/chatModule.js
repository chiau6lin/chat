import {
  SET_CURRENT_ROOM,
  SET_CHAT_FRIEND_LIST,
  SET_CHAT_MESSAGES
} from '../mutations.type'
// import CreditAPI from '@/api/CreditAPI'
// import { storeErrorCb } from '@/common/serviceHelper'

const state = {
  currentRoom: '',
  chatFriendList: [],
  chatMessages: []
}

const getters = {
  currentChatFriend (state) {
    return state.chatFriendList.find((friend) => {
      return state.currentRoom === friend.roomID
    })
  },
  currentChatMessages (state) {
    return state.chatMessages.filter((message) => {
      return state.currentRoom === message.roomID
    })
  }
}

const mutations = {
  [SET_CURRENT_ROOM] (state, room) {
    state.currentRoom = room
  },
  [SET_CHAT_FRIEND_LIST] (state, list) {
    state.chatFriendList = list
  },
  [SET_CHAT_MESSAGES] (state, messages) {
    state.chatMessages = messages
  }
}

export default {
  state,
  getters,
  // actions,
  mutations
}
