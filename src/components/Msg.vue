<template>
<div class="root">
	<div class="showModel">
		<div class="btn"><a href="javascript:;" @click="showModel(1)">×</a></div>
		<div class="info">Thank you for your support</div>
	</div>
</div>	
</template>

<script>
export default {
	name:'Msg',
	data(){
		return {
			
		}
	},
	methods:{
		showModel(index){
			this.$emit('showModel',index);
		}
	}
}
</script>

<style scoped="scoped">
.showModel{width: 300px; background: #fee3e3; position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%);}
.showModel .btn a{ font-size: 20px; float: right; width: 20px; height: 20px; border-radius: 100%; background: red; text-align: center; line-height: 20px; color: #fff;}
.showModel .info{ padding:30px 20px; text-align: center;}
</style>
