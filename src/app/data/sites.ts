/*
 * Copyright (c) 2026 IANEL Technologies. All rights reserved.
 * Designed and developed by IANEL Technologies.
 */
// The two Amsidel websites, deployed separately. Keep this file the same in both projects
// (amsidel-group-web and amsidel-web).
//
// TODO once deployed: put the live addresses in PRODUCTION (no trailing slash), e.g. the custom domains, or the
// Cloudflare addresses such as 'https://amsidel-web.<your-account>.workers.dev'.
const PRODUCTION = {
  /** Amsidel Group: the solar-system landing page (amsidel-group-web). */
  group: 'https://www.amsidel.com',
  /** Amsidel Doors & Windows: the store (amsidel-web). */
  doorsWindows: 'https://www.doors-windows.amsidel.com',
};

/** On your own computer: `npm start` in each project (Doors & Windows on 4200, Group on 4201). */
const LOCAL = {
  group: 'http://localhost:4201',
  doorsWindows: 'https://www.doors-windows.amsidel.com',
};

const isLocal = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);

export const SITES = isLocal ? LOCAL : PRODUCTION;
