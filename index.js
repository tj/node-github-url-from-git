module.exports = function(url, opts){

  opts = opts || {}; 

  try {
    // whitelist of URLs that should be treated as GitHub repos.
    var baseUrls = ['gist.github.com', 'github.com'].concat(opts.extraBaseUrls || []);
    // build regex from whitelist.
    var githubRe = new RegExp(
      /^(?:https?:\/\/|git:\/\/)?(?:[^@]+@)?/.source +
      '(' + baseUrls.join('|') + ')' +
      /[:\/]([^\/]+\/[^\/]+?|[0-9]+)$/.source
    )
    var m = githubRe.exec(url.replace(/\.git$/, ''));
    var host = m[1];
    var path = m[2];

    return 'https://' + host + '/' + path;
  } catch (err) {
    // ignore
  }
};
