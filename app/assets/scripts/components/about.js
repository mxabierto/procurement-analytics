'use strict';
var React = require('react/addons');
var Router = require('react-router');

var About = module.exports = React.createClass({
  render: function() {
    return (
      <article className="page single about">
        <header className="page-header">
          <div className="inner">
            <div className="page-headline">
              <h1 className="page-title">About</h1>
            </div>
          </div>
        </header>
        <div className="page-body">
          <div className="inner">
            <div className="prose">
              <h2>The project</h2>
              <p>This dashboard provides analysis of publicly-available Mexican procurement data.
                 It has been funded by the World Bank and designed by Development Seed.</p>
              <p>The dashboards use publicly available data from CompraNet, the Mexican government’s central website for tendering and contracts.
                 This data is then evaluated against a methodology for assessing results in public procurement.</p>
              <p>The methodology considers five dimensions of performance in public procurement:</p>
              <ol>
                <li>Timely</li>
                <li>Cost-efficient</li>
                <li>Fair</li>
                <li>Quality-mindful</li>
                <li>Transparent</li>
              </ol>
              <p>The first three of these dimensions are analysed in this portal; the other two could be assessed when more data becomes available.</p>
              <p>It is also possible to slice the data according to the <strong>size of supplier</strong> or the <strong>contract procedure</strong>.</p>
              <h2>Data sources</h2>
              <p><strong><a href="https://compranet.funcionpublica.gob.mx/">Compranet</a></strong> is the main data source that powers these dashboards.</p>
              <h2>License</h2>
              <p>The codebase of the application has been released into the public domain using the <a href="https://github.com/procurement-analytics/procurement-analytics/blob/develop/UNLICENSE">unlicense</a>.</p>
              <p>Feel free to fork, use re-use or build upon the visualisation and data without restriction.
                 We would of course appreciate a link back where possible!</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
});
