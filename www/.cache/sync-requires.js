const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-page-templates-what-is-new-page-what-is-new-page-provider-tsx": hot(preferDefault(require("/home/ivan/projects/typescript-definitive-guide/www/src/page-templates/what-is-new-page/WhatIsNewPageProvider.tsx"))),
  "component---src-page-templates-what-is-new-toc-page-what-is-new-toc-page-provider-tsx": hot(preferDefault(require("/home/ivan/projects/typescript-definitive-guide/www/src/page-templates/what-is-new-toc-page/WhatIsNewTocPageProvider.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ivan/projects/typescript-definitive-guide/www/.cache/dev-404-page.js")))
}

