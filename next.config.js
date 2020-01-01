const fetch = require('isomorphic-unfetch');

const generatePages = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=x-men');
  const data = await res.json();
  const pages = data.map(entry => entry.show);

  return pages;
};

module.exports = {
  exportTrailingSlash: true,
  poweredByHeader: false, // disable `x-powered-by` to the request header

  //
  exportPathMap: async () => {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };

    const pages = await generatePages();

    pages.forEach(page => {
      paths[`/post/${page.id}`] = { page: '/post/[id]', query: { id: page.id } };
    });

    return paths;
  },
};
