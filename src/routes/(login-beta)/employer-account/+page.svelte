<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { goto } from '$app/navigation';

	let loginForm: HTMLFormElement
	let loading = false
	let fullname = ''
	let contact = ''
	let email = ''
	let password = ''
	
	const handleSubmit: SubmitFunction = () => {
	  loading = true
	  return async () => {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		loading = false
		goto("../emp-editjob")
	  }
	}
</script>
<svelte:head>
	<title>Employer Login</title>
</svelte:head>
<div class="bg-[url('/images/backup.png')] bg-cover m-0 h-full">
	<div class="flex items-center justify-center h-screen p-10">
	  <div class="flex flex-col gap-4 bg-[#702828] p-5 w-5/12 h-5/4 items-center">
		<a href="./signup">
		  <img class="h-auto max-w-xs mx-auto" id="logo_name" src="./images/logo_name.png" alt="logo_name">
		</a>
		<div class="bg-[#702828] w-full h-full flex items-center justify-center flex-col">
		  <form
			class="w-full"
			method="post"
			action="?/login"
			use:enhance={handleSubmit}
			bind:this={loginForm}
		  >
	
			<div class="w-full relative h-">
				<input
			  	id="name"
			  	name="Name"
			  	type="text"
			  	class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-10 rounded"
			  	placeholder="Full Name"
			  	on:input={(event) => (fullname= event.currentTarget.value)}
			  	required
				/>
				<div class="absolute top-0 left-0 h-full flex items-center pl-3"> 
			  		<img src="/images/admin.png" alt="icon" class="h-7" /> 
				</div>
		  	</div>
			
			<div class="w-full relative h-">
				<input
			  	id="contact"
			  	name="contact"
			  	type="tel"
			  	class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-10 rounded"
			  	placeholder="Contact Number"
			  	on:input={(event) => (contact = event.currentTarget.value)}
			  	required
				/>
				<div class="absolute top-0 left-0 h-full flex items-center pl-3"> 
			  		<img src="/images/phone.png" alt="icon" class="h-6" /> 
				</div>
		  	</div>

			<div class="w-full relative h-">
				<input
			  	id="email"
			  	name="email"
			  	type="email"
			  	class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-10 rounded"
			  	placeholder="Email"
			  	on:input={(event) => (email = event.currentTarget.value)}
			  	required
				/>
				<div class="absolute top-0 left-0 h-full flex items-center pl-3"> 
			  		<img src="/images/email.png" alt="icon" class="h-6" /> 
				</div>
		  	</div>

			<div class="w-full relative">
			  <input 
				id="password"
				name="password"
				type="password"
				placeholder="•••••••••"
				value={password}
				on:input={(event) => (password = event.currentTarget.value)}
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-10 rounded" 
				required
			  />
			  <div class="absolute top-0 left-0 h-full flex items-center pl-3"> 
				<img src="/images/pass.png" alt="icon" class="h-10" />
			  </div>
			</div>

			<div class="flex gap-1 w-full">
				<div class="w-1/2 relative">
					<input
						id="compname"
						name="compname"
						type="text"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-10 rounded"
						placeholder="Company Name"
					/>
					<div class="absolute top-0 left-0 h-full flex items-center pl-3">
						<img src="/images/company.png" alt="icon" class="h-5" />
					</div>
				</div>
			
				<div class="w-1/2 relative">
					<input
						id="dti"
						name="dti"
						type="text"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-10 rounded"
						placeholder="DTI Registration Number"
					/>
					<div class="absolute top-0 left-0 h-full flex items-center pl-3">
						<img src="/images/dti.png" alt="icon" class="h-5" />
					</div>
				</div>
			</div>

			<div class="w-full">
				<input
				type="submit"
				class="variant-filled-tertiary cursor-pointer hover:bg-[#AD9673] text-white font-bold text-center w-full py-2 px-4 mt-3 rounded-md cursor-pointer h-14 disabled:bg-gray-400"
				value={loading ? 'Loading...' : 'SIGN UP'}
				disabled={loading}
			  />
			</div>
		  </form>
		</div>
	  </div>
	</div>
  </div>