<template>
<div class="xy">
  <headers></headers>
  <cfooters></cfooters>
  <swiper></swiper>
  <shoplist></shoplist>
</div>
</template>

<script>
import headers from './headers'
import cfooters from '../common-footer'
import swiper from './swiper'
import shoplist from './shoplist'
export default {
	name: 'index',
	components: {
		headers,
		cfooters,
		swiper,
		shoplist
	}
}
</script>

<style lang="stylus" scoped>
.xy
  text-align: center
</style>