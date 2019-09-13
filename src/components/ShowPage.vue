<template>
  <div class="content">
    <div class="wrapper">
      <div  class="out_box">
        <button @click="back" class="out_box_btn">обратно к списку</button>

        <img :src="serial.img" alt="" class="out_box_img">

        <div class="out_box_rating">
          <p v-if="serial.rating" class="out_box_rating_text">РЕЙТИНГ : {{serial.rating}}</p>
          <p v-else class="out_box_rating_text">РЕЙТИНГ : 0.0</p>
        </div>
        <div class="out_box_link">
          <a :href="serial.link" class="">САЙТ</a>
        </div>
      </div>

      <div class="in_box">
        <h1 class="in_box_title">{{serial.name}}</h1>
        <div class="in_box_status">СТАТУС : {{serial.status}}</div>
        <div v-if="serial.descr" v-html="serial.descr" class="in_box_descr"></div>
        <div v-else class="in_box_descr">Описание Отсутствует</div>
        <div class="in_box_genres"></div>
        <div class="in_box_lang">ЯЗЫК : {{serial.lang}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  computed: {
    serial () {
      const id = this.id
      return this.$store.getters.serialById(id)
    }
  }

}
</script>

<style scoped lang="sass">
  @import '../modules/variables'

.content
  background-color: #1e272e
  .wrapper
    justify-self: center
    display: flex
    flex-flow: wrap
    justify-content: center
    align-items: center
    color: white
    .out_box
      margin: 15px 10px 0 10px
      width: 300px
      height: 500px
      &_img
        border: 10px solid white
        margin-top: 15px
        height: 370px
        width: 100%
        -webkit-border-radius: 15px
        -moz-border-radius: 15px
        border-radius: 15px
      &_rating
        font-weight: lighter
        margin: 15px 0 0 0
      &_link
        display: block
        margin: 0 auto
        background-color: $btn_shadow
        height: 35px
        width: 200px
        border-radius: 10px
        a
          display: block
          margin: 0 auto
          padding-top: 5px
          color: white
          text-align: center
          font-weight: lighter
      &_btn
        display: block
        margin: 0 auto
        height: 35px
        width: 200px
        cursor: pointer
        font-weight: bolder
        transition: 0.3s
        color: white
        background-color: $btn
        border-radius: 10px
        outline: none
        border: none
        &:active
          transform: scale(0.95)
          background-color: $btn_shadow
    .in_box
      padding-left: 20px
      text-align: left
      margin: 15px 10px 0 10px
      width: 400px
      height: 500px
      &_title
        top: 10px
      &_status
        font-weight: lighter
        margin-top: 10px
      &_descr
        font-weight: lighter
        margin-top: 10px
        max-height: 290px
        overflow: hidden
      &_lang
        font-weight: lighter
        margin-top: 10px

  @media(max-width: 660px)

    .in_box
      text-align: center!important
</style>
