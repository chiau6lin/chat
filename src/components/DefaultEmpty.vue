<template>
  <div class="c-default-empty">
    <div class="c-default__image-wrapper">
      <img :src="img" alt="default empty view icon" />
    </div>
    <div class="c-default__description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultEmpty',
  props: {
    img: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

.c-default-empty {
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;
}

.c-default__image-wrapper {
  width: 100px;
  height: 100px;
  margin: auto;
  img {
    width: 100%;
  }
}

.c-default__description {
  // margin-top: 20px;
  text-align: center;
}

</style>
