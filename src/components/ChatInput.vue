<template>
  <!-- id should be same as component object name -->
  <div id="chatInput">
    <div class="chat__input">
      <textarea
        id="message-to-send"
        name="message-to-send"
        :placeholder="$t('input_placeholder')"
        rows="3">
      </textarea>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatInput',
  computed: {
    isChatStarted () {
      return this.room === ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// #ChatInput {
//   // display: flex;
//   // flex-direction: column;
// }
.chat__input {
  background: url('../assets/img/ic_sent.png');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 35px;

  textarea {
    resize: none;
    width: 100%;
  }
}

</style>
