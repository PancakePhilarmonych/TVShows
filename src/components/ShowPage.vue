<template>
  <div class="content">
    <div class="wrapper">
      <div  class="out_box">
        <button @click="back" class="out_box_btn">обратно к списку</button>

        <img :src="serial.img" alt="" class="out_box_img">

        <!--<div class="out_box_rating">
          <p v-if="serial.rating" class="out_box_rating_text">РЕЙТИНГ : {{serial.rating}}</p>
          <p v-else class="out_box_rating_text">РЕЙТИНГ : 0.0</p>
        </div>-->
        <div class="rating">
          <div class="stars"></div>
          <div id="rating" class="yellow_stars"></div>
        </div>
        <a id="link" :href="serial.link" class="out_box_link">САЙТ</a>
      </div>

      <div id="inBox" class="in_box">
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
  data () {
    return {
    }
  },
  props: ['id'],
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    let rating = this.serial.rating
    let link = this.serial.link
    if (link === null) {
      let linkBox = document.getElementById('link')
      linkBox.classList = 'out_box_no_link'
      linkBox.textContent = 'НЕТ ССЫЛКИ'
    }
    if (rating !== null) {
      let stars = document.getElementById('rating')
      let ratingWidth = rating.toString().split('.').join('') + '%'
      stars.style.width = ratingWidth
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
      .rating
        width: 270px
        position: relative
        display: block
        margin: 15px auto 0 auto
        .stars
          height: 25px
          width: 100%
          background: url("../assets/stars/star4.png")
        .yellow_stars
          top: 0
          position: absolute
          height: 25px
          width: 0%
          background: url("../assets/stars/yellow_star.png")
      &_img
        border: 10px solid white
        margin-top: 15px
        height: 370px
        width: 100%
        -webkit-border-radius: 15px
        -moz-border-radius: 15px
        border-radius: 15px
      &_link
        display: block
        margin: 15px auto 0 auto
        padding: 10px
        border-radius: 10px
        background-color: $btn_shadow
        width: 200px
        color: white
        text-decoration: none
        text-align: center
        font-weight: lighter
      &_no_link
        display: block
        margin: 15px auto 0 auto
        padding: 10px
        border-radius: 10px
        background-color: #485460
        width: 200px
        color: white
        text-decoration: none
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
      text-align: left
      margin: 15px 10px 0 20px
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
      margin: 30px 15px  0 15px!important
      text-align: center!important
</style>
