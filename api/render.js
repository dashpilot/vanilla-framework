import Layout from "../app/layouts/layout.mjs";
// import Post from "../app/components/post.mjs";

export const config = {
  runtime: "edge",
};

export default async function (req) {
  const { searchParams } = new URL(req.url);
  let page = "home";
  if (searchParams.get("p")) {
    page = searchParams.get("p");
  }

  const response = await fetch(
    "https://vanilla-framework.vercel.app/data.json"
  );
  var data = await response.json();

  console.log(data);

  // var data = Data();
  data.page = page;

  var tpl = Layout.header();
  tpl += Layout.nav();
  tpl += Layout.body(data);

  /*
  data.items
    .filter((x) => x.page == data.page)
    .forEach((item) => {
      tpl += Post(item);
    });
    */

  if (typeof Layout.style === "function") {
    tpl += `
    <style>
    ${Layout.style()}
    </style>
    `;
  }

  tpl += Layout.footer();

  //const html = Page.render(page);

  return new Response(tpl, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
