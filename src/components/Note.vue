<template>
  <!-- id should be same as component object name -->
  <div id="note">
    <div role="button" class="note__icon" @click="isOpen = !isOpen"></div>
    <div class="note__content" v-show="isOpen">
      <div class="note__edit">
        <div class="note__input">
          <textarea
            id="note-edit"
            name="note-edit"
            :placeholder="$t('input_placeholder')"
            rows="3"
            v-model="note.content">
          </textarea>
        </div>
        <button class="note__button add" @click="addNote">{{ $t('add_button') }}</button>
      </div>
      <div class="note__list">
        <div
          v-for="(note, index) in noteList"
          :key="index"
          class="note__item"
        >
          <div role="button" class="note__delete" @click="deleteNote(index)"></div>
          <div class="note__datetime">{{ note.date }}</div>
          <div class="note__text">{{ note.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import {
  SET_NOTE_LIST
} from '@/store/mutations.type'

export default {
  name: 'Note',
  data () {
    return {
      isOpen: false,
      note: {}
    }
  },
  computed: {
    ...mapGetters(['noteList'])
  },
  methods: {
    ...mapMutations({
      setNoteList: SET_NOTE_LIST
    }),
    addNote () {
      this.note.date = new Date()
      const newNote = Object.assign({}, this.note)
      const list = [...this.noteList, newNote]

      this.setNoteList(list)
      this.clear()
    },
    deleteNote (index) {
      this.noteList.splice(index, 1)
      this.setNoteList(this.noteList)
    },
    clear () {
      this.note.content = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.note__icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url('../assets/img/ic_note.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.note__delete {
  position: absolute;
  right: 15px;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: url('../assets/img/ic_close.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.note__edit {
  border-bottom: 1px solid #86BB71;
}

.note__button {
  width: 100%;
  background: $main-theme-color;
  color: #fff;
  text-align: center;
  margin: 10px 0;
}

.note__input {
  padding: 10px;
  border: 1px solid #ccc;
}

.note__content {
  padding: 10px;
  border: 1px solid #ddd;
  background: #fff;
  z-index: $popup-zIndex;
}

.note__list {
  // padding: 10px;
}

.note__item {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #86BB71;
}
</style>
