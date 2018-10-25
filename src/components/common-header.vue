<template>
	<div class="hh">
<!--head-->
<div class="head">
   <slot name="left"></slot>
      <span class="m-t">{{title}}</span>
   <slot name="right"></slot>
</div>   
     <div class="cl"></div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'cheaders',
      props: {
         title: String
      }
	}
</script>

<style lang="stylus" scoped>
@import '../stylus/first.styl'
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
   z-index: 998

.iconfont
   color: #fff
   font-size: 20px
   line-height: 50px

.m-t
   line-height: 50px
   color: #fff
   overflow: hidden
   font-family: '微软雅黑'
   font-size: 20px
   margin: 0 auto
   text-align: center
   white-space: nowrap
   text-overflow: ellipsis;
   max-width: 60%
   display: inline-block
/**/
</style>
