<template>
  <!-- id should be same as component object name -->
  <div id="chatMessage">
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="['chat__message', 'clear',  message.sender === 'amVzc2ljYQ==' ? 'sender' : 'receiver' ]"
      :data-message-id="message.id"
    >
      <!-- class="chat__message" -->
      <ChatBox :content="message.message" />
    </div>
  </div>
</template>

<script>
import ChatBox from '@/components/ChatBox'

export default {
  name: 'ChatMessage',
  components: {
    ChatBox
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#chatMessage {
  overflow-y: scroll;
}

.chat__message.hightlight {
  /deep/ .chat__content {
    background: yellow;
    color: #000;
  }
}
.chat__message.sender {
  float: right;
}

.chat__message.receiver {
  float: left;
}

.chat__box-wrapper {
  margin: 10px 0;
  display: inline-block;
}

</style>
