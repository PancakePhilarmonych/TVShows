<template>
  <div class="content">
    <div class="search_box">
      <input
        @keyup.enter="search"
        v-model="request"
        class="search_box_enter"
      />
      <button @click="search" type="submit" class="search_box_btn">
        ПОИСК
      </button>
    </div>
    <div v-if="this.data.length !== 0" class="wrapper">
      <div

        v-for="i in data"
        :key="i.id"
        @click="toShow(i)"
        class="box"
      >
        <div class="box_img">
          <img :src="i.img" alt="logo">
        </div>
        <h2 class="box_text">{{i.name}}</h2>
      </div>
    </div>
    <div v-else class="empty">
      <h2  > НИЧЕГО НЕ НАЙДЕНО </h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['request_text', 'data']),
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
    toShow (show) {
      this.$router.push('/search/' + show.id)
    },
    search () {
      if (this.request_text !== '') {
        this.$store.dispatch('getData', this.request_text)
      }
    }
  }
}
</script>

<style scoped lang="sass">
.search_box
  margin: 0
  display: flex
  justify-content: center
  align-items: start
.wrapper
  margin-top: 15px
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
  grid-gap: 1vw
  .box
    min-width: 290px
    height: 370px
    margin: 15px
    border-radius: 10px
    background-color: white
    transition: 0.3s
    cursor: pointer
    &:hover
      transform: scale(1.025)
    &_img
      display: block
      margin: 15px auto 0 auto
      height: 300px
      border-radius: 10px
      max-width: 90%
      img
        border-radius: 10px
        width: 100%
        max-height: 300px
    &_text
      font-size: 16px
      -moz-user-select: none
      user-select: none
      margin: 10px 0 10px 0
      font-weight: bold
.empty
  min-height: 90vh
  color: white
  display: flex
  justify-content: center
  align-items: center
  h2
    transition: 0.3s
@media(max-width: 660px)
  .empty
    h2
      font-size: 18px

</style>
