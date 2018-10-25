<template>
<div class="hh">
<!--begin-->
<div class="login">
	<span class="back" @click="$router.back()">
		<img src="../../.././static/images/shop/back.png">
	</span>
	<div class="tm">
		<span>在锡外卖</span>
	</div>
	<!--登陆-->
	<div class="go">
		<!--登陆方式-->
		<div class="two">
			<div class="message">
				<span class="" @click="msg=0" :class="{'cur':msg===0}">
					短信登录
				</span>
			</div>
			<div class="password">
				<span class="" @click="msg=1" :class="{'cur':msg===1}">
					密码登录
				</span>
			</div>
			<div class="clone"></div>
		</div>
		<!--content-->
		<div class="content">
<!--message登陆!!!!!-->        
			<div class="c-message" v-show="msg===0">
  <!--手机验证码input-->
				<div class="number-s">
					<div class="nx">
						<input type='text' placeholder="手机号" class="nb">
					</div>
					<div class="hq">
						<input type="button" value="获取验证码"class="cnm">
					</div>
				</div>
				<div class="clone"></div>
  <!--验证码input-->
                <div class="yzm">
                  <input type="text" placeholder="验证码">
                </div>
                <div class="clone"></div>
  <!--提示-->            
              <div class="ts"> 
               温馨提示 , 本应用注册的手机号会自动登录 , 且以代表同意
               <span class="xy">《用户协议》</span>
              </div>
  <!--登录按钮-->
         <div class="jn">
            <input type="button" value="登陆" class="dl">
            <span class="gy">关于我们</span>
         </div>
	</div>
<!--password登陆!!!!!!--> 
			<div class="c-password" v-show="msg===1">
  <!--手机号/邮箱/用户名input-->
			  <div class="number">
					<div class="nx-s">
						<input type='text' placeholder="手机号/邮箱/用户名" class="nb">
					</div>
				</div>
  <!--密码input-->
                <div class="yzm-s">
                  <input type="text" placeholder="密码">
                </div>
   <!--验证码input-->
                <div class="yzm-ss">
                  <input type="text" placeholder="验证码">
                  <span class="pdd">
                  </span>
                </div>            
<!--登录按钮-->
         <div class="jn">
            <input type="button" value="登陆" class="dl">
            <span class="gy">关于我们</span>
         </div>
     </div>
		</div>

		</div>

	</div>
</div>
	<!--end-->	  
</div>
</template>

<script type="text/javascript">
import cfooters from '../common-footer.vue'
import cheaders from '../common-header.vue'
	export default {
		name: 'order',
		data () {
           return {
           	 msg: 0
           }
		},
		components: {
			cheaders
		},
		methods: {
          mmp () {
             this.$router.go(-1)
          }
		}
	}
</script>

<style lang="stylus" scoped>
.hh
  font-size: 10px
  font-family: '微软雅黑'

.tm 
  height: 11rem
  width: 100%
  text-align: center
  line-height: 11rem

.tm span
  font-size: 4.8rem
  color: #00afc7
  font-weight: 700

.back
  width: 1rem

.back img
  display: inline-block
  width: 1rem

.message,.password
  float: left
  width: 50%
  text-align: center
  font-size: 1.6rem

.message span , .password span
  padding-bottom: .5rem

.cur
 border-bottom: 1px solid #00afc7
 color: #00afc7

.clone
  clear: both

.two
  text-align: center
  width: 21rem
  margin: 0 auto

.content
  width: 80%
  margin: 0 auto
  position: relative
  margin-top: 1rem

.c-message , .c-password
  position: absolute
  top:0 
  left:0
  width: 100%

.number , .number-s
  height: 3.8rem
  width: 100%
  position: relative
  border: 1px solid #ccc
  border-radius: .5rem


.nb
    height: 3.5rem
    outline: none
    float: left
    width: 60%
    line-height: 3.5rem
    border: none

.hq
    border: none
    height: 100%
    background: #fff
    color: #ccc
    border: none
    width: 34%
    outline: none
    padding: 0
    float: right
    border-radius: 0.5rem

.hq input 
  border: none
  height: 100%
  background: #fff
  color: #ccc
  border-left: none
  border-radius: 0.5rem
  width: 100%
  padding: 0
  font-size: 1.5rem

.nx input
  text-align: left
  padding-left: 1rem
  line-height: 3.9rem
  border-radius: 0.5rem
  font-size: 1.8rem
  height: 3.7rem

.nx-s input
  text-align: left
  padding-left: 1rem
  line-height: 3.9rem
  border-radius: 0.5rem
  font-size: 1.8rem
  height: 3.7rem
  width: 92%

.cnm
  outline: none

.yzm 
    margin-top: 1rem
    height: 3.8rem
    width: 100%
    position: relative
    border: 1px solid #ccc
    border-radius: 0.5rem

.yzm-s
    margin-top: 1rem
    height: 3.8rem
    width: 100%
    position: relative
    border: 1px solid #ccc
    border-radius: 0.5rem

.yzm-ss
    margin-top: 1rem
    height: 3.8rem
    width: 100%
    position: relative
    border: 1px solid #ccc
    border-radius: 0.5rem

.yzm input , .yzm-s input , .yzm-ss input
    text-align: left
    padding-left: 1rem
    line-height: 3.9rem
    border-radius: 0.5rem
    font-size: 1.8rem
    height: 3.5rem
    border: none
    outline: none

.pdd
   position: absolute
   background: pink
   right: 0
   bottom: 10%
   height: 80%
   width: 20%
.ts
  font-size: 1.5rem
  margin-top: 1rem

.xy
  color: red
  font-family: '微软雅黑'

.clone
  clear: both

.dl
  display: block
  width: 100%
  border: none
  height: 3.8rem
  border-radius: .5rem
  font-size: 2rem
  font-weight: 700
  color: #fff
  background: #00afc7
  margin-top: 3rem
  outline: none

.gy
  display: block
  width: 100%
  border: none
  height: 3.8rem
  border-radius: .5rem
  font-size: 1.5rem
  font-weight: 700
  color: #c8c4c4
  text-align: center
  background: #fff
  margin-top: 1rem
</style>