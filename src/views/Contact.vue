<template>
<div class="root">
	<v-header></v-header>
	
	<div class="contact">
		<div class="title">We are located in Burwood</div>
		<div class="top">
			<h2>My contact detaill</h2>
			<a href="javascript:;" @click="getValue('yyyu@deakin.edu.au')">Get Email</a>
		</div>
		<div class="bom">
			<h2>Enter your number to get in touch</h2>
			<div class="form">
				<input type="text" v-model="phone" ref="phoneObj"><button @click="getValue('')">Submit</button>
			</div>
		</div>
	</div>
	<v-cevent></v-cevent>
	
	<v-alert ref='alert' :msg="msg">
		<template v-if="type=='email'"><div class="t" slot="header">My email is:</div></template>
		<template v-if="type=='phone'"><div class="t" slot="header">You have submitted your number:</div></template>	
	</v-alert>
</div>	
</template>

<script>
import vHeader from '@/components/Header.vue';
import vAlert from '@/components/Alert.vue';	

export default{
	name:'Contact',
	data() {
		return {
			msg:'',
			phone:null,
			type:'',
		}
	},
	components:{
		vHeader,vAlert
	},
	methods:{
		getValue(v){
			if(v!==''){
				this.msg=v;
				this.type='email'
			}else{
				if(this.phone){
					this.$refs.phoneObj.style.border="1px solid #fff";
				}else{
					this.$refs.phoneObj.style.border="1px solid red";
					return false;
				}
				this.msg=this.phone;
				this.phone='';
				this.type="phone";
			}
			this.$refs.alert.btnClose();
		}
	}
}	
</script>

<style scoped="scoped">
.contact{width:340px; height:auto; overflow: hidden; background: #c4c4c4; margin: 60px auto; border: 1px solid #6b6565;}
.contact .title{width:100%; height: 50px; line-height: 50px; text-align: center; font-size: 20px;font-family: orbitron;}
.contact .top{background: #e3d4d5; padding: 20px; text-align: center; border-bottom: 1px solid #6b6565;}
.contact .top h2{font-size: 25px; font-weight: normal; font-family: orbitron;}
.contact .top a{width: 140px; height: 35px; line-height: 35px; display: inline-block; background: #3a00f3; margin-top: 10px; font-family: orbitron;}
.contact .bom{ padding: 20px 0;}
.contact .bom h2{font-size: 20px; font-weight: normal; text-align: center; font-family: orbitron;}
.contact .bom .form{display:flex; justify-content: center; margin-top: 10px;}
.contact .bom .form input{font-size: 20px; width:250px; height: 30px; text-indent: 5px; border: 1px solid #fff;}
.contact .bom .form button{padding: 0 10px; height: 30px; width: 70px; background: #3a00f3; cursor: pointer;font-family: orbitron; font-size: 15px;}

.footer{width:100%; height: auto; overflow: hidden; text-align: center; padding: 20px 0; color:#fff}
</style>
