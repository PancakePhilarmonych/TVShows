<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
}

</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap')
  @import "modules/variables"
  *
    margin: 0
    padding: 0
    box-sizing: border-box

  .content
    display: block
    margin: 0 auto
    max-width: 1040px
    min-height: 100vh

  .search_box_enter
    margin-top: 15px
    color: #4a4a4a
    text-transform: uppercase
    margin-left: 15px
    padding-left: 10px
    border-radius: 10px
    outline: none
    height: 35px
    width: 300px
    border: none
    text-decoration: none

  .search_box_btn
    margin: 15px 15px 0 15px
    cursor: pointer
    font-weight: bolder
    padding-left: 15px
    padding-right: 15px
    transition: 0.3s
    color: white
    background-color: $btn
    width: auto
    height: 35px
    border-radius: 10px
    outline: none
    border: none
    &:active
      transform: scale(0.95)
      background-color: $btn_shadow

  body
    background-color: $bg_color
    margin: 0
  #app
    font-family: 'Work Sans', sans-serif
    text-align: center
    color: #2c3e50
    margin: 0
</style>
