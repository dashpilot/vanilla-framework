import Layout from "./layouts/layout.mjs";
// import data from "./content/data.mjs";
import post from "./components/post.mjs";

class Page {
  async render(page) {
    const response = await fetch(
      "https://api.eu-central-1.linodeobjects.com/vanilla-framework/data.json"
    );
    var mydata = await response.json();

    // var mydata = data();
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
