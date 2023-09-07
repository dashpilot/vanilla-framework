const post = (item) => {
  return `
  <div id="${item.id}" class="editable">
	<h2>${item.title}</h2>
	<p>${item.body}</p>
  </div>
	`;
};

export default post;
