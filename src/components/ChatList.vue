<template>
  <!-- id should be same as component object name -->
  <div id="friendList">
    <div class="friendList__title">{{ friendCount }}</div>
    <div class="friend__item-container"
      v-for="(item, index) in list"
      :key="index"
      @click="enterRoom(item)">
      <FriendItem :item="item" />
    </div>
  </div>
</template>

<script>
import FriendItem from '@/components/FriendItem'
import { EventBus } from '@/event-bus'

export default {
  name: 'FriendList',
  components: {
    FriendItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  computed: {
    friendCount () {
      return this.$t('friends_list_title', [this.list.length])
    }
  },
  methods: {
    enterRoom (item) {
      console.log(item)
      EventBus.$emit('room', item.roomID)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#friendList {
  padding: 20px;
  background: #eee;

  .friend__item-container {
    cursor: pointer;
    margin-bottom: 10px;
  }
}

.friendList__title {
  margin-bottom: 20px;
}
</style>
