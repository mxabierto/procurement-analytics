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
              <h1 className="page-title">Acerca de</h1>
            </div>
          </div>
        </header>
        <div className="page-body">
          <div className="inner">
            <div className="prose">
              <h2>El proyecto</h2>
              <p>Este tablero ofrece un análisis de datos públicos de contrataciones del Gobierno de México.
                 El proyecto ha sido apoyado por el Banco Mundial y diseñado por Development Seed.</p>
              <p>Los tableros hacen uso de datos públicos de Compranet, el sitio central del Gobierno de México para contratos y licitaciones.
                 Estos datos son evaluados bajo una metodología para analizar resultados en contrataciones públicas, y pueden ser seccionados por tamaño del proveedor y el procedimiento de contratación.</p>
              <p>La metodología toma en consideración cinco dimensiones de desempeño en contrataciones públicas:</p>
              <ol>
                <li>Puntualidad</li>
                <li>Eficiencia en costos</li>
                <li>Equidad</li>
                <li>Calidad</li>
                <li>Transparencia</li>
              </ol>
              <p>Las primeras tres de estas dimensiones son analizadas en este portal; las otras dos se estarán integrando durante la implementación del estándar de contrataciones abiertas.</p>
              <h2>Fuentes de datos</h2>
              <p><strong><a href="https://compranet.funcionpublica.gob.mx/">Compranet</a></strong> es la fuente principal de datos que alimenta estos tableros.</p>
              <h2>Licencia de uso</h2>
              <p>La base de código de la aplicación se hace disponible al dominio público utilizando los términos <a href="https://github.com/procurement-analytics/procurement-analytics/blob/develop/UNLICENSE">Unlicense</a>.</p>
              <p>Utiliza libremente las visualizaciones y datos para crear nuevos proyectos o reutilizarlo para otro fin sin restricción alguna.
                 Sin embargo ¡apreciamos cualquier referencia de vuelta cuando sea posible!</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
});
