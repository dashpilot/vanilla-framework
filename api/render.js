import Page from "../src/index.mjs";

export const config = {
  runtime: "edge",
};

export default async function (req) {
  const { searchParams } = new URL(req.url);
  let page = "home";
  if (searchParams.get("p")) {
    page = searchParams.get("p");
  }

  const html = Page.render(page);

  return new Response(tpl, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
