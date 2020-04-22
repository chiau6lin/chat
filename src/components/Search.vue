<template>
  <!-- id should be same as component object name -->
  <div id="search">
    <div role="button" class="search__icon" @click="isSearch = !isSearch"></div>
    <div class="search__input" v-show="isSearch">
      <input type="text" @input="handleInput"/>
      <div class="search__result">
        <slot name="result"></slot>
      </div>
      <div role="button" class="search__close-icon" @click="isSearch = false"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      isSearch: false
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.search__icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url('../assets/img/ic_search.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.search__close-icon {
  position: absolute;
  right: 15px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('../assets/img/ic_close_round.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.search__input {
  display: flex;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 70px;
  left: 0;
  padding: 10px;
  border: 1px solid #ccc;

  input {
    width: 100%;
  }
}

.search__result {
  display: inline;
}
</style>
