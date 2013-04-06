
module.exports = function(url){
  try {
    var m = /^.*?github\.com[:\/]([^\/]+)\/([^\/.]+)(?:\.git)?/.exec(url);
    var user = m[1];
    var repo = m[2];
    return 'https://github.com/' + user + '/' + repo;
  } catch (err) {
    // ignore
  }
};
