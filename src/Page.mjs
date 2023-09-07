import Layout from "./layouts/Layout.mjs";
import Data from "./content/Data.mjs";
import Post from "./components/Post.mjs";

class Page {
  render(page) {
    var data = Data();
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
