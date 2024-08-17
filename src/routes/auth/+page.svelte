<script lang="ts">
	export let data;
	export let form;

	$: console.log(form);
</script>

<h1>auth</h1>

<h2>login</h2>
<form action="?/login" method="post">
	<label for="login_email">email</label>
	<input type="text" name="login_email" id="login_email" />

	<label for="login_password">Password</label>
	<input type="password" name="login_password" id="login_password" />

	<input type="submit" value="login" />
</form>

<h2>register</h2>
<form action="?/register" method="post">
	<label for="register_username">name</label>
	<input type="text" name="register_username" id="register_username" />

	<label for="register_email">email</label>
	<input type="text" name="register_email" id="register_email" />

	<label for="register_password">Password</label>
	<input type="password" name="register_password" id="register_password" />

	<input type="submit" value="register" />
</form>
