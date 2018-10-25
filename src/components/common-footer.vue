<template>
	<div class="hh">
	  <ul class="footer">
	    <a class="ck" :class="{on: '/'===$route.path}"
         @click="goTo('/')"
	    >
        <li class="">
           <span class="iconfont">
               &#xe685;
               <span class="wz">首页</span>
           </span>         
        </li>
        </a>
 
        <a  class="ck" :class="{on: '/search'===$route.path}"
         @click="goTo('/search')"
        >
        <li>        
           <span class="iconfont">
             &#xe60d;
             <span class="wz">搜索</span>
           </span>       
        </li>
        </a>

     <a  class="ck" :class="{on: '/order'===$route.path}"
      @click="goTo('/order')"
     >
        <li>
          <span class="iconfont">
            &#xe6bd;
            <span class="wz">订单</span>
          </span>
         </li>
         </a>

        <a class="ck" :class="{on: '/person'===$route.path}"
         @click="goTo('/person')"
        >
        <li>
          <span class="iconfont go">
           &#xe620;
           <span class="wz">我的</span>
          </span>
         </li>
         </a>
	  </ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'cfooters',
		methods: {
			goTo (path) {
              this.$router.replace(path)
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import '../stylus/first.styl'

 ul,li,i,span 
   font-family: '微软雅黑'

.footer
  position: fixed
  bottom:0
  left:0
  width: 100%
  border-top: 1px solid #403939
  padding-top: 10px
  z-index: 999
  background: #fff

.footer li
  float: left
  list-style: none
  width: 100%
  text-align: center

.iconfont
  font-size: 25px
  width:100%
  height:100%

.ck
  width: 25%
  height: 100%
  display: inline-block
  list-style: none
  float:left
  color: #403939

.on
  color: $bgcolor

.wz
  font-size: 40%
  display: block
  text-align: center


</style>