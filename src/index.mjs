import Layout from "./layouts/layout.mjs";
import Data from "./content/data.mjs";
import Post from "./components/post.mjs";

class Page {
  render(page) {
    let data = Data();
    data.page = page;

    var tpl = Layout.header();
    tpl += Layout.nav();
    tpl += Layout.body(data);
    data.items
      .filter((x) => x.page == data.page)
      .forEach((item) => {
        tpl += Post(item);
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
