import React from 'react'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'

export default () => (
  <div className="page-privacy">
    <SEO
      title="Política de privacidad"
      description="Información sobre los datos que se están recogiendo sobre usted en este sitio web."
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center">Política de privacidad</h2>
          <div className="text">
            <p style={{fontStyle: 'italic'}}>Última actualización: 22 de mayo, 2020</p>
            <p>Este sitio web utiliza cookies y servicios de datos de terceros para evaluar el trabajo de marketing, mantener relaciones con los clientes y mejorar la funcionalidad de este sitio.</p>
            <p>Al utilizar este sitio, aceptas compartir tus datos con los servicios siguientes:</p>
            <div className="overflow-x-container">
              <table>
                <tr>
                  <th>Categoría</th>
                  <th>Propósito</th>
                  <th>Colector</th>
                  <th>Comentario</th>
                </tr>
                <tr>
                  <td>Cookies y datos de terceros</td>
                  <td>Comprender el comportamiento de los usuarios, tener una percepción del marketing regional</td>
                  <td>Google</td>
                  <td>Hacer el seguimiento de <a href="https://support.google.com/analytics/answer/2799357?hl=en&utm_id=ad" target="_blank" className="link" style={{fontSize: 'inherit'}} rel="noopener noreferrer">datos demográficos</a>, páginas visitadas y enlaces en los que se ha hecho clic. Si deseas impedir que Google Analytics rastree tu actividad, puedes añadir esta herramienta a Chrome: <a href="https://tools.google.com/dlpage/gaoptout"  target="_blank" className="link" style={{fontSize: 'inherit'}} rel="noopener noreferrer">Google Analytics opt-out addon</a>.</td>
                </tr>
                <tr>
                  <td>Datos de terceros</td>
                  <td>Informar a los suscriptores de las novedades y cupones</td>
                  <td>Mailchimp</td>
                  <td>Los datos se recolectan solo si has consignado tu correo electrónico en el formulario de suscripción al boletín de noticias</td>
                </tr>
                <tr>
                  <td>Datos de terceros</td>
                  <td>Permitir a los usuarios contactar a la autora del libro</td>
                  <td>Getform</td>
                  <td>Datos que se recolectan solo si son presentados en el formulario de contacto</td>
                </tr>
              </table>
            </div>

          </div>
      </div>
    </Fade>

  </div>
)
