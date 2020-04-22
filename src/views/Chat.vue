<template>
  <!-- id should be same as component object name -->
  <div id="chat">
    <ChatList :list="chatFriendList"/>
    <!-- <TheHeader title="Cherri Chat" /> -->
    <ChatRoom :room="currentRoom"/>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import TheHeader from '@/components/TheHeader'
import { mapMutations } from 'vuex'
import {
  SET_CURRENT_ROOM,
  SET_CHAT_FRIEND_LIST,
  SET_CHAT_MESSAGES
} from '@/store/mutations.type'
import { EventBus } from '@/event-bus'
import ChatList from '@/components/ChatList'
import ChatRoom from '@/components/ChatRoom'
import FriendListAPI from '@/api/FriendList'
import ChatMessageAPI from '@/api/ChatMessage'

export default {
  name: 'Chat',
  components: {
    // TheHeader,
    ChatList,
    ChatRoom
  },
  data () {
    return {
      friendList: [],
      historyMessages: [],
      chatFriendList: [],
      currentRoom: ''
    }
  },
  // computed: {
  //   chatFriendList () {
  //     return this.friendList.map((friend) => {
  //       this.historyMessages.map((history) => {
  //         if (!friend.owner &&
  //             (friend.id === history.sender ||
  //               friend.id === history.receiver)
  //         ) {
  //           friend.lastMessage = history.message
  //         }
  //         return friend
  //       })
  //     })
  //   }
  // },
  created () {
    this.init()
  },
  mounted () {
    EventBus.$on('room', (room) => {
      this.currentRoom = room
      this.setActiveRoom(room)
    })
  },
  methods: {
    ...mapMutations({
      setActiveRoom: SET_CURRENT_ROOM,
      setChatFriendList: SET_CHAT_FRIEND_LIST,
      setChatMessages: SET_CHAT_MESSAGES
    }),
    async init () {
      this.friendList = await FriendListAPI.getFriendList()
      this.historyMessages = await ChatMessageAPI.getChatMessage()

      this.setChatFriendList(this.friendList)
      this.setChatMessages(this.historyMessages)
      this.chatFriendList = this.friendList.map((friend) => {
        this.historyMessages.forEach((history) => {
          if (!friend.owner &&
              (friend.id === history.sender ||
                friend.id === history.receiver)
          ) {
            friend.roomID = history.roomID
            friend.lastMessage = history.message
          }
        })
        return friend
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#chat {
  display: flex;
  margin: 0 auto;
  width: 850px;
  // background: #444753;
  // background: #eee;
  border-radius: 5px;

  #friendList {
    // float: left;
    width: 30%;
  }

  #header {
    // float: left;
    width: 70%;
  }

}

</style>
