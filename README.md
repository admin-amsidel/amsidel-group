# Amsidel Group website

The Amsidel Enterprises group page: the solar-system landing page. It is a static Angular site with no backend.

The Doors & Windows planet, "Shop Doors & Windows" and "Get in touch" open the **Amsidel Doors & Windows**
website, which is a separate project (`../amsidel-web`) deployed on its own.

## Run and build

```bash
npm install
npm start          # http://localhost:4201  (Doors & Windows runs on 4200, so both can run together)
npm run build      # output in dist/amsidel-group-web/browser
```

Deploy: Cloudflare (`wrangler.jsonc`, project `amsidel-group-web`) serves `dist/amsidel-group-web/browser`.

## Linking the two websites

`src/app/data/sites.ts` holds both addresses (the same file is in both projects). On your own computer the links go to
`localhost`. Once both are deployed, put the live addresses in `PRODUCTION` in **both** projects and deploy again.
