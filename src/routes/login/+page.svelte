<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="container">
	<form method="POST">
		<div class="row">
			<div class="input-field col s12">
				<input name="email" type="email" />
				<label for="email">メールアドレス</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<input name="password" type="password" />
				<label for="password">パスワード</label>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<button class="btn waves-effect waves-light">ログイン</button>
			</div>
		</div>
	</form>
	<div class="row">
		<div class="col s12">
			{#if form?.isSuccess}
				ログインに成功しました。
			{:else if form?.isSuccess === false}
				<p class="error">ログインに失敗しました。</p>
			{/if}
		</div>
	</div>
</div>
