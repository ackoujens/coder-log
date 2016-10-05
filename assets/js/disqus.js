// Disqus - website engagement
var disqus_config = function () {
  // canonical url
  this.page.url = "http://ackoujens.github.io{{ page.url }}";
  this.page.identifier = "{{ page.id }}";
};
(function() {
  var d = document, s = d.createElement('script');
  // disqus shortname
  s.src = '//ackoujens-github-io-coder-log.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
