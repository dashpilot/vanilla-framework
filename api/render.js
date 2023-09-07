import Page from "../src/page.mjs";

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
    "https://api.eu-central-1.linodeobjects.com/vanilla-framework/data.json"
  );
  var mydata = await response.json();

  const html = Page.render(page, mydata);

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
