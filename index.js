var githubRe = /^(?:https?:\/\/|git:\/\/)?(?:[^@]+@)?(GITHUB_URLS)[:\/]([^\/]+\/[^\/]+?|[0-9]+)$/

module.exports = function(url, gheUrls){
  try {
    var githubUrls = ['gist.github.com', 'github.com'].concat(gheUrls || []);
    var re = new RegExp(githubRe.source.replace(
      'GITHUB_URLS', githubUrls.join('|'))
    );
    var m = re.exec(url.replace(/\.git$/, ''));
    var host = m[1];
    var path = m[2];
    return 'https://' + host + '/' + path;
  } catch (err) {
    // ignore
  }
};
