import React from 'react'
import SVG from 'react-inlinesvg'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import { Link } from '../components/link'

// images
import imgClaire from '../../static/images/creators/claire.jpg'
import imgVarvara from '../../static/images/creators/varvara.jpg'
import imgSuga from '../../static/images/creators/suga.jpg'
import imgFran from '../../public/images/creators/fran.jpg'
import imgDaphne from '../../static/images/creators/daphne.jpg'
import imgNatalia from '../../static/images/creators/natalia.jpg'

// icons
import iconInstagram from '../../static/icons/instagram.svg'

export default () => (
  <div className="page-creators">
    <SEO
      title="Creadores"
      description="'El poder de las verduras', creado por Claire Froelich y ilustrado por Varvara Fomina."
    />
    <div className="container">
      <Fade>
        <h2 className="ta-center">Acerca los creadores</h2>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgClaire} className="responsive" alt="Claire Froelich"/>
            <p className="ta-center">foto por Anastasia Mayamsina</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>Claire Froelich</strong></h3>
            <p><strong>Autora</strong></p>
            <p>Inspirada en los pedos graciosamente oportunos de su hermano durante las cenas familiares. Como desarrolladora web, ha hecho también este sitio.</p>
            <p><Link to="contact" className="link">Contacta con ella</Link></p>
          </div>
        </div>


        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgVarvara} className="responsive" alt="Varvara Fomina"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>Varvara Fomina</strong></h3>
            <p><strong>Ilustradora</strong></p>
            <p>Entusiasta ilustradora independiente cuya pasión es sumergirse en las historias de los demás, se traten de ciervos que sueltan pedos o de ciencia nuclear.</p>
            <a href="https://www.instagram.com/barbara.fomina/" target="_blank" rel="noopener" className="link d-flex" style={{ alignItems: 'center'}}>
              <SVG src={iconInstagram}/>
              <span style={{marginLeft: '0.5rem'}}>barbara.fomina</span>
            </a>
          </div>
        </div>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgSuga} className="responsive" alt="Miki Sugawara"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>Miki Sugawara</strong></h3>
            <p><strong>Traductora (japonés)</strong></p>
            <p>Intérprete y traductora. Si bien parece seria y diligente, jamás se pierde una buena oportunidad de reír.</p>
          </div>
        </div>

        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgDaphne} className="responsive" alt="Daphné B."/>
            <p className="ta-center">foto por JF Lemire, Shoot Studio</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>Daphné B.</strong></h3>
            <p><strong>Traductora (francés)</strong></p>
            <p>Poeta y traductora literaria residente en Montreal. Podemos escucharla hablar de libros en el programa radial <a href="https://ici.radio-canada.ca/premiere/emissions/plus-on-est-de-fous-plus-on-lit" className="link" target="_blank" rel="noopener noreferrer"><em>Plus on est de fous, plus on lit.</em></a></p>
          </div>
        </div>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgFran} className="responsive" alt="Francili Luany"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>Francili Luany</strong></h3>
            <p><strong>Traductora (portugués)</strong></p>
            <p>Francili se describe a sí misma como una mujer negra que busca su espacio en la sociedad, se reencuentra tras la maternidad y a través de la traducción encuentra un amor para el universo de las letras.</p>
          </div>
        </div>

        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgNatalia} className="responsive" alt="Natalia Sanín"/>
            <p className="ta-center">foto por Brent Mullins</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>Natalia Sanín</strong></h3>
            <p><strong>Traductora (español)</strong></p>
            <p>Ella ama a los animales, incluso sus pedos. Pasa mucho de su tiempo libre leyendo y escribiendo poesía y cuentos.</p>
          </div>
        </div>
      </Fade>
    </div>
  </div>
)
