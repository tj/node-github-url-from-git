var re = /^(?:https?:\/\/|git:\/\/)?(?:[^@]+@)?([^:\/]+)[:\/]([^\/]+\/[^\/]+?|[0-9]+)$/

module.exports = function(url){
  try {
    var m = re.exec(url.replace(/\.git$/, ''));
    var host = m[1];
    var path = m[2];
    return 'https://' + host + '/' + path;
  } catch (err) {
    // ignore
  }
};
