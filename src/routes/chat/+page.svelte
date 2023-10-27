<script lang="ts">
	import type { PageData } from './$types';
	import { dbRef } from '$lib/firebase';
	import { onChildAdded, push } from 'firebase/database';

	export let data: PageData;
	let message: string | null = null;
	let messages: string[] = [];
	const send = async () => {
		try {
			await push(dbRef, { 
				message
			});
		} catch (e) {
			console.error(e);
		}
	};

	onChildAdded(dbRef, (snapshot) => {
		const message = snapshot.val();
		messages.push(message.message);
		messages = messages;
	});
</script>

{#if data.isLogined}
	<div class="container">
		<div class="row">
			<div class="col s12">
				<h1>Firebase Chat</h1>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<div class="card">
					<div class="card-content">
						<span class="card-title">メッセージ一覧</span>
						{#each messages as m}
							<li>{m}</li>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s10">
				<label for="chat-textarea">Textarea</label>
				<textarea id="chat-textarea" class="materialize-textarea" bind:value={message} />
			</div>
			<div class="col s2">
				<button class="btn waves-effect waves-light" on:click={send}> 送信 </button>
			</div>
		</div>
	</div>
{:else}
	<div class="container">
		<div class="row">
			<div class="col s12">
				このページを表示するためには、
				<a href="/login">ログイン</a>
				をしてください。
			</div>
		</div>
	</div>
{/if}
