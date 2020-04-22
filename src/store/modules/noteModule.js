import {
  SET_NOTE_LIST
} from '../mutations.type'

const state = {
  noteList: []
}

const getters = {
  noteList (state) {
    return state.noteList
  }
}

const mutations = {
  [SET_NOTE_LIST] (state, list) {
    state.noteList = list
  }
}

export default {
  state,
  getters,
  // actions,
  mutations
}
