var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-29738285-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  var gaLogEvent = function (action, label, number) {
  	_gaq.push(['_trackEvent', 'Events', action, label, number]);
  }

  var gaLogDownload = function (type, link) {
  	_gaq.push(['_trackEvent', 'Downloads', type, link]);
  }