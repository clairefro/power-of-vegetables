import React from 'react'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'

export default () => (
  <div className="page-privacy">
    <SEO
      title="Privacy Policy"
      description="Information on what data is being collected about you on this website."
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center">Politique de confidentialité</h2>
          <div className="text">
            <p style={{fontStyle: 'italic'}}>Dernière mise à jour : 22 mai 2020</p>
            <p>Ce site web utilise des cookies et des services de données de tiers pour obtenir des informations marketing, entretenir les relations avec les clients et améliorer la fonctionnalité de ce site.</p>
            <p>En utilisant ce site, vous acceptez de partager vos données avec les services suivants.</p>
            <div className="overflow-x-container">
              <table>
                <tr>
                  <th>Catégorie</th>
                  <th>Objectif</th>
                  <th>Collecteur</th>
                  <th>Comment</th>
                </tr>
                <tr>
                  <td>Cookie & données de tiers</td>
                  <td>Comprendre le comportement des utilisateurs, avoir un aperçu du marketing régional</td>
                  <td>Google</td>
                  <td>Suivi des <a href="https://support.google.com/analytics/answer/2799357?hl=en&utm_id=ad" target="_blank" className="link" style={{fontSize: 'inherit'}} rel="noopener noreferrer">données démographiques</a>, des pages visitées et des liens cliqués. Si vous souhaitez empêcher Google Analytics de vous suivre, vous pouvez ajouter cet outil à Chrome : <a href="https://tools.google.com/dlpage/gaoptout"  target="_blank" className="link" style={{fontSize: 'inherit'}} rel="noopener noreferrer">Google Analytics opt-out addon</a>.</td>
                </tr>
                <tr>
                  <td>Données de tiers</td>
                  <td>Informer les abonnés des nouveautés et des coupons</td>
                  <td>Mailchimp</td>
                  <td>Données collectées uniquement si l'e-mail est soumis dans le formulaire d'abonnement à la newsletter</td>
                </tr>
                <tr>
                  <td>Données de tiers</td>
                  <td>Allow users to contact the book author</td>
                  <td>Getform</td>
                  <td>Data only collected if submitted in contact form</td>
                </tr>
              </table>
            </div>

          </div>
      </div>
    </Fade>

  </div>
)
