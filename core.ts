const p = Deno.run({
    cmd: ["deno", "task", "serve"],
  });
  const status = await p.status();