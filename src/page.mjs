import Layout from "./layouts/layout.mjs";
// import data from "./content/data.mjs";
import post from "./components/post.mjs";

class Page {
  render(page, mydata) {
    // var mydata = data();
    mydata.category = page;

    var tpl = Layout.header();
    tpl += Layout.nav();
    tpl += Layout.body(mydata);
    mydata.posts
      .filter((x) => x.category == mydata.category)
      .forEach((item) => {
        tpl += post(item);
      });

    if (typeof Layout.style === "function") {
      tpl += `
			<style>
			${Layout.style()}
			</style>
			`;
    }

    tpl += Layout.footer();

    return tpl;
  }
}

export default new Page();
