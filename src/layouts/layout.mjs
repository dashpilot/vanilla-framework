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
    return `<div class="container mt-5"><h1 class="mb-4">${data.page}</h1>`;
  }

  footer() {
    return `</div></body></html>`;
  }

  style() {
    return `
	  	nav{
		  	padding: 10px 20px;
	  	}
		nav a{
			padding-right: 10px;
		}
	  `;
  }
}

export default new Layout();
