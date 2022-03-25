<script type="text/javascript">
	export let message = "";

	function closeModal() {
		var modal = document.getElementById("myBannerModal");
		modal.style.display = "none";
	}

	export function changeBanner(new_message){
		var modal = document.getElementById("myBannerModal");
		modal.style.display = "block";
		message = new_message;
	}

	export function closeBanner() {
		var modal = document.getElementById("myBannerModal");
		modal.style.display = "none";
	}

</script>

<div id="myBannerModal" class="modal">
	<span on:click={closeModal} class="close">&times;</span>
	<div class="w3-container w3-center">
		<h1 id="message" class="pulsate">{message}</h1>
	</div>
</div>


<style type="text/css">
	.pulsate {
	    -webkit-animation: pulsate 3s ease-out;
	    -webkit-animation-iteration-count: infinite; 
	    opacity: 1;
	    color: white;
	}
	@-webkit-keyframes pulsate {
	    0% { 
	        opacity: 1.0;
	    }
	    50% { 
	        opacity: 0.1;
	    }
	    100% { 
	        opacity: 1.0;
	    }
	}

	/* The Modal (background) */
	.modal {
		display: none; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 100px; /* Location of the box */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.8); /* Black w/ opacity */
	}

	/* Modal Content (image) */
	.modal-content {
		margin: auto;
		display: block;
		width: 80%;
		max-width: 700px;
	}

	/* Caption of Modal Image */
	#caption {
		margin: auto;
		display: block;
		width: 80%;
		max-width: 700px;
		text-align: center;
		color: #ccc;
		padding: 10px 0;
		height: 150px;
	}

	/* Add Animation */
	.modal-content, #caption {  
		-webkit-animation-name: zoom;
		-webkit-animation-duration: 0.6s;
		animation-name: zoom;
		animation-duration: 0.6s;
	}

	@-webkit-keyframes zoom {
		from {-webkit-transform:scale(0)} 
		to {-webkit-transform:scale(1)}
	}

	@keyframes zoom {
		from {transform:scale(0)} 
		to {transform:scale(1)}
	}

	/* The Close Button */
	.close {
		position: absolute;
		top: 15px;
		right: 35px;
		color: #f1f1f1;
		font-size: 40px;
		font-weight: bold;
		transition: 0.3s;
	}

	.close:hover,
	.close:focus {
		color: #bbb;
		text-decoration: none;
		cursor: pointer;
	}

	/* 100% Image Width on Smaller Screens */
	@media only screen and (max-width: 700px){
		.modal-content {
		width: 100%;
		}
	}
</style>