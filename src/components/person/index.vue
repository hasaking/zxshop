<template>
	<div class="hh">
	  <cheaders title="我的"></cheaders>
	  <router-link to="" class="mine">
	   <div class="fan">
        <div class="photo">
          <img src="../../.././static/images/shop/2.jpg">
        </div>
        <div class="fn">
         <router-link to="/login" class="cc">
          <div class="t"><span class="dl">登陆/注册</span></div>
         </router-link>
          <div class="b">
            <span class="sj">
             <img src="../../.././static/images/shop/2.jpg">
            </span>
            <span class="">已绑定手机号</span>
          </div>
        </div>
        </div>
	  </router-link>
	  <cfooters></cfooters>
	</div>
</template>

<script type="text/javascript">
import cfooters from '../common-footer.vue'
import cheaders from '../common-header.vue'
	export default {
		name: 'person',
		components: {
			cfooters,
			cheaders
		}
	}
</script>

<style lang="stylus" scoped>
.mine
  background: #00afc7
  text-decoration: none
  height: 5rem
  color: #fff

.fan
  background: #00afc7
  height: 5rem

.photo
  float: left
  width: 4rem
  margin-right: 2rem
  line-height: 5rem

.photo img 
  display: inline-block
  width: 100%
  border-radius: 100%
  margin-top: .5rem
  margin-left: 1rem

.fn
  float: left
  width: 77%
  height: 5rem
  position: relative

.fn img 
  display: inline-block
  width: 1rem
  height: 1rem

.t
  position: absolute
  top: 0.6rem
  font-size: 1.6rem

.b
  position: absolute
  bottom: 0.6rem
  font-size: 1.6rem

.cc
  color: #fff

</style>
