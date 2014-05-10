require('bigpipe/page').extend({
  path: '/404',
  view: 'views/404.ejs',
  data: {
    title: 'Page Not Found'
  }
}).on(module);
