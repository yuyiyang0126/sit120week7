<template>
<div class="root">
	<v-header></v-header>
	<cklist></cklist>
</div>	
</template>

<script>
import vHeader from '@/components/Header.vue';
import Cklist from  '@/components/cklist';
export default {
	components: {
		vHeader,
		Cklist
	}
}
</script>

<style scoped="scoped">

</style>
