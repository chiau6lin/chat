<template>
  <div class="friend__item">
    <div class="friend__avatar">
      <img :src="avatarIcon" alt="avatar" />
    </div>
    <div class="friend__about">
      <div class="friend__name">{{ item.name }}</div>
      <div class="friend__message">{{ item.lastMessage }}</div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'FriendItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    avatarIcon () {
      const avatarUrl = this.item.avatar
      return require(`../assets/img/avatar/${avatarUrl}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.friend__item {
  display: flex;
}

.friend__avatar {
  float: left;
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
  }
}

.friend__about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;
}

.friend__name {
  font-size: 18px;
  font-weight: 700;
}

.friend__message {
  font-size: 12px;
  color: #aaa;
}
</style>
