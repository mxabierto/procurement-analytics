'use strict';
var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var i18n = require('./i18n');

var App = module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <header id="site-header" role="banner">
          <div className="inner">
            <div id="site-headline">
              <h1 id="site-title"><a href="#/" title="Start"><img src="assets/graphics/layout/data-analytics-for-procurement-logo-neg.svg" alt="DAP logo" /><span></span><small>{i18n.t("CountryName")}</small></a></h1>
            </div>
            <nav id="site-prime-nav" role="navigation">
              <ul className="global-menu">
                <li className="analysis"><Link to="analysis_root" title="View the analysis">{i18n.t("Analysis")}</Link></li>
                <li className="about"><Link to="about" title="Learn more">{i18n.t("About")}</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main id="site-body" role="main">
          <RouteHandler />
        </main>
      </div>
    );
  }
});
