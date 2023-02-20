import lume from "https://deno.land/x/lume@v1.15.2/mod.ts";
import tailwindcss from "https://deno.land/x/lume@v1.15.2/plugins/tailwindcss.ts";
import mdx from "https://deno.land/x/lume@v1.15.2/plugins/mdx.ts";
import postcss from "https://deno.land/x/lume@v1.15.2/plugins/postcss.ts";
import jsx from "https://deno.land/x/lume@v1.15.2/plugins/jsx.ts";

const site = lume();

site.use(jsx());
site.use(tailwindcss());
site.use(mdx());
site.use(postcss());

export default site;
