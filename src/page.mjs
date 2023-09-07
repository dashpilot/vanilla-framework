import Layout from "./layouts/layout.mjs";
import data from "./content/data.mjs";
import post from "./components/post.mjs";

class Page {
  render(page) {
    var mydata = data();
    mydata.page = page;

    var tpl = Layout.header();
    tpl += Layout.nav();
    tpl += Layout.body(mydata);
    mydata.items
      .filter((x) => x.page == mydata.page)
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
