<script lang="ts">
	import type { PageData } from './$types';
	import { initializeApp } from 'firebase/app';
	export let data: PageData;

	const firebaseApp = initializeApp(data.firebaseConfig);
	const onClick = () => {
		console.log(firebaseApp);
	};
</script>

<h1>Firebase Chat</h1>
<button on:click={onClick}>チャット送信</button>
