class Layout {
  header() {
    return `<!DOCTYPE html>
			<html>
			  <head>
				<meta charset="UTF-8" />
				<title>Untitled Document</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
				  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
				  rel="stylesheet"
				  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
				  crossorigin="anonymous"
				/>
			  </head>
			
			  <body>
		`;
  }

  nav() {
    return `
	  <nav>
	  <a href="./">Home</a>
	  <a href="./about">About</a>
	  <a href="./contact">Contact</a>
	  </nav>
	  `;
  }

  body(data) {
    return `<div class="container mt-5"><h1 class="mb-4">${data.category}</h1>`;
  }

  footer() {
    return `</div>
	<script src="https://blogbird.vercel.app/relay.js"></script>
	<script>
	if (window.self !== window.top) {
		window.addEventListener(
		  "message",
		  (e) => {
			let key = e.message ? "message" : "data";
			let msg = JSON.parse(e[key]);
	
			if (msg.msg == "refresh") {
			  var mydata = msg.data;
			  console.log(mydata);
	
			  const event = new CustomEvent("update", { detail: mydata });
			  document.body.dispatchEvent(event);
	
			  console.log("Ok, reloading the data");
			  setTimeout(()=>{
				window.location.reload();
			  }, 250)
			  
			}
			
		  },
		  false
		);
	  }
	
	</script>
	</body></html>`;
  }

  style() {
    return `
	  	nav{
		  	padding: 10px 20px;
	  	}
		nav a{
			margin-right: 10px;
		}
		`;
  }
}

export default new Layout();
