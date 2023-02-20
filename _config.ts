import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import mdx from "lume/plugins/mdx.ts";
import postcss from "lume/plugins/postcss.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume();

site.use(jsx());
site.use(tailwindcss());
site.use(mdx());
site.use(postcss());

export default site;
