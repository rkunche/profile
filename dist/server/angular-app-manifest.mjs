
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/profile/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/profile/experience"
  },
  {
    "renderMode": 2,
    "route": "/profile/skills"
  },
  {
    "renderMode": 2,
    "route": "/profile/projects"
  },
  {
    "renderMode": 2,
    "route": "/profile/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 716, hash: '111c0be186b2c04bc42a83b4cb9993dc5993c98a7239c4e91e6b317ff6a4b7ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: 'b555885117d06b6defe3d0be51e429014fa4b4d6590af122a7729407b3dedc3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 7279, hash: 'bd8dbbea82bb32a25179c8b7243dfda5a760678855425d4c489024cc5532f6e3', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 3930, hash: '34962ff1d91fef4d0ccf9b92553df59fdcd981631e04f1e7d81dae57a8e662dd', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3873, hash: 'a551296b95ae25d349732d903de921b0680432adf37b4f3382ba4a3c2a73e7b0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8320, hash: '622463166c3dd592070ccd71758f856f5514f656b9cc91586ac4bdd12b7f1ea0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 6372, hash: '3f0d26057c76dd7e74f9df7fa4451fdee261a74140644a68d1835d21d27ef436', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-7LRXK32R.css': {size: 508, hash: 'WhZeEb3GZ+k', text: () => import('./assets-chunks/styles-7LRXK32R_css.mjs').then(m => m.default)}
  },
};
