<template>
  <div>
	<div class="swiperck">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
        <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/1.jpg">
          </span>
          <span class="wz">糕点</span>
        </div>


        <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/2.jpg">
          </span>
          <span class="wz">热菜</span>
        </div>


        <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/3.jpg">
          </span>
          <span class="wz">医疗</span>
        </div>

        <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/4.jpg">
          </span>
          <span class="wz">商超</span>
        </div>

        <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/5.jpg">
          </span>
          <span class="wz">海鲜</span>
        </div>

            <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/6.jpg">
          </span>
          <span class="wz">西点</span>
        </div>

            <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/7.jpg">
          </span>
          <span class="wz">下午茶</span>
        </div>

            <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/8.jpg">
          </span>
          <span class="wz">小食</span>
        </div>
       </div>
      <div class="swiper-slide">
      <div class="containerck">
          <span>
          <img src="../../.././static/images/nav/9.jpg">
          </span>
          <span class="wz">生鲜</span>
        </div>
      </div>

      </div>
    </div>
<!--分页器-->
    <div class="fy">
     <div class="swiper-pagination"></div>
     </div>
	</div>
</div>
</template>

<script type="text/javascript">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
	export default {
		name: 'swiper',
		mounted () {
			new Swiper('.swiper-container',{
				 loop: true,
				 pagination: {
           el: '.swiper-pagination',
         },
	  })
	}
}
</script>

<style lang="stylus" scoped>
.containerck 
  width: 25%
  float: left
  list-style: none
  color: #5e5959
  font-weight: 700
  dsiaply: inline-block

.containerck img
  display: inline-block
  width: 100%

.swiperck
  height:0
  padding-bottom: 72%
  width: 100%
  border-bottom: 5px solid #ccc

.wz
 width: 100%
 overflow: hidden
 text-overflow: ellipsis
 white-space: nowrap
 display: inline-block

.swiper-pagination
 position: relative

</style>
