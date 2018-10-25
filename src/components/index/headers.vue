<template>
	<div class="hh">
<!--head-->
   <cheaders title="香坊区松海路韩国料理水上乐园">
      <span slot="left" class="l-t">夏</span>
      <span slot="right" class="r-t">登陆|注册</span>
   </cheaders>

	</div>
</template>

<script type="text/javascript">
import cheaders from '../common-header.vue'
	export default {
		name: 'headers',
      components: {
         cheaders
      }
	}
</script>

<style lang="stylus" scoped>
@import '../../stylus/first.styl'

.hh
   font-size: 10px
   overflow: hidden
/*head*/
.cl
   height:50px
   width: 100%

.head
   height: 50px
   background: $bgcolor
   position: fixed
   top:0
   width:100%
   overflow: hidden
   text-align: center

.iconfont
   color: #fff
   font-size: 20px
   line-height: 50px

.l-t
   float: left
   width: 20%
   height: 100%
   color: #fff
   line-height: 50px
   font-size: 20px

.r-t
   float: right
   width: 20%
   height: 100%
   line-height: 50px
   color: #fff
   font-size: 15px

.m-t
    line-height: 50px
    color: #fff
    overflow: hidden
    font-family: '微软雅黑'
    font-size: 20px
    max-width: 60%
    display: inline-block
/**/
</style>
