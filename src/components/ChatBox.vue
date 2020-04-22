<template>
  <div class="chat__box-wrapper">
    <div class="chat__content">{{ content }}</div>
  </div>
</template>

<script>

export default {
  name: 'ChatBox',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.chat__box-wrapper {
  position: relative;
  min-width: 80px;
  background: $main-theme-color;
  border-radius: 50px;
  padding: 10px;

  &:after {
    content: "";
    bottom: 100%;
    right: 25px;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    // #86BB71
    border-bottom-color: $main-theme-color;
    border-width: 10px;
    margin-left: -10px;
  }
}

.chat__content {
  color: #fff;
  text-align: center;
}
</style>
