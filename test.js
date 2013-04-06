
var parse = require('./');

describe('parse(url)', function(){
  it('should support git://*', function(){
    var url = 'git://github.com/jamesor/mongoose-versioner';
    pares(url).should.equal('https://github.com/jamesor/mongoose-versioner');
  })

  it('should support git://*.git', function(){
    var url = 'git://github.com/treygriffith/cellar.git';
    pares(url).should.equal('https://github.com/treygriffith/cellar');
  })

  it('should support https://*', function(){
    var url = 'https://github.com/Empeeric/i18n-node';
    pares(url).should.equal('https://github.com/Empeeric/i18n-node');
  })

  it('should support https://*.git', function(){
    var url = 'https://jpillora@github.com/banchee/tranquil.git';
    pares(url).should.equal('https://github.com/banchee/tranquil');
  })
})
