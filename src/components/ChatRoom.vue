<template>
  <!-- id should be same as component object name -->
  <div id="chatRoom">
    <TheHeader title="Cherri Chat" />
    <div
       v-if="isChatStarted"
       class="col"
    >
      <div class="chat__toolbar">
        <FriendItem :item="activeFriendProfile" />
        <div class="chat__function">
          <Search v-model="charSearchText">
            <span
              v-show="chatSearchMatchList.length"
              slot="result"
              style="font-size: 12px; margin-right: 40px;"
              >{{ chatSearchCount }}</span>
          </Search>
          <Note />
        </div>
      </div>
      <ChatMessage :messages="currentChatMessages" v-chat-search="{ target: 'message-id', list: chatSearchMatchList, classStyle: 'hightlight' }"/>
      <ChatInput />
    </div>
    <DefaultEmpty
      v-else
      class="flex col"
      :img="require('@/assets/img/img_default.png')">
      <div slot="description" style="text-align: center;">
        {{ $t('welcome_title') }}
      </div>
    </DefaultEmpty>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '@/components/TheHeader'
import DefaultEmpty from '@/components/DefaultEmpty'
import Search from '@/components/Search'
import Note from '@/components/Note'
import ChatMessage from '@/components/ChatMessage'
import ChatInput from '@/components/ChatInput'
import FriendItem from '@/components/FriendItem'
import ChatSearch from '@/directives/chatSearch'

export default {
  name: 'ChatRoom',
  components: {
    TheHeader,
    DefaultEmpty,
    Search,
    Note,
    ChatMessage,
    ChatInput,
    FriendItem
  },
  directives: {
    ChatSearch
  },
  props: {
    room: {
      type: [String, Number],
      default: ''
      // required: true
    }
  },
  data () {
    return {
      charSearchText: ''
    }
  },
  computed: {
    ...mapGetters(['currentChatMessages', 'currentChatFriend']),
    isChatStarted () {
      return this.room !== ''
    },
    activeFriendProfile () {
      const { name, avatar } = this.currentChatFriend

      return {
        name,
        avatar
      }
    },
    chatSearchMatchList () {
      return this.currentChatMessages.filter((message) => {
        if (!this.charSearchText) {
          return
        }

        if (message.message.search(this.charSearchText) > -1) {
          return message
        }
      }, 0)
    },
    chatSearchCount () {
      return this.$t('search_result_desc', [this.chatSearchMatchList.length])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#chatRoom {
  display: flex;
  flex-direction: column;

  /deep/ #chatMessage {
    border-bottom: 2px solid #ddd;
    margin-top: 150px;
  }

  // #chatInput {
  //   position: fixed;
  //   bottom: 0;
  // }
}

.chat__toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px, rgba(0, 0, 0, 0.117647) 0px 3px 1px -2px;
  margin-bottom: 15px;

  /deep/ .friend__avatar {
    width: 60px;
    height: 60px;
  }

  /deep/ .note__content {
    position: absolute;
    right: 0;
  }
}

.chat__function {
  display: flex;
}
</style>
