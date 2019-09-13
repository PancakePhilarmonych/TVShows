<template>
  <div class="search_box">
    <input @keyup.enter="search" v-model="request" class="search_box_enter"/>
    <button @click="search" type="submit" class="search_box_btn">ПОИСК</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['request_text']),
    request: {
      get () {
        return this.$store.state.request_text
      },
      set (value) {
        this.$store.commit('UPDATE_REQUEST', value)
      }
    }
  },
  methods: {
    search () {
      if (this.request_text != null) {
        this.$store.dispatch('getData', this.request_text)
        this.$router.push('/search')
      }
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../modules/variables"

  .search_box
    min-height: 100vh
    background-color: $bg_color
    margin: 0
    display: flex
    justify-content: center
    align-items: center
</style>
