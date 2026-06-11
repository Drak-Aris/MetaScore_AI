import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">MetaScore AI</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#features">Fonctionnalités</a></li>
            <li><a href="#how-it-works">Comment ça marche</a></li>
            <li><a href="#metrics">Métriques</a></li>
            <li><button className="nav-btn">Démarrer</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">🚀 Évaluation d'IA de Nouvelle Génération</div>
          <h1 className="hero-title">Évaluez l'IA avec <span className="gradient-text">Précision</span></h1>
          <p className="hero-subtitle">
            Une plateforme complète pour évaluer, analyser et optimiser les performances de vos modèles d'IA en temps réel
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Commencer Maintenant</button>
            <button className="btn btn-secondary">Voir la Démo</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Modèles Testés</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.8%</span>
              <span className="stat-label">Précision</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-header">Accuracy</div>
            <div className="card-value">94.5%</div>
            <div className="card-chart">📊</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-header">Performance</div>
            <div className="card-value">Excellent</div>
            <div className="card-chart">⚙️</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-header">Speed</div>
            <div className="card-value">2.3ms</div>
            <div className="card-chart">⚡</div>
          </div>
          <div className="background-gradient"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <h2>Fonctionnalités Puissantes</h2>
          <p>Tout ce dont vous avez besoin pour évaluer vos modèles d'IA</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analyse Détaillée</h3>
            <p>Obtenez des métriques détaillées et des insights profonds sur les performances de votre IA</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Suivi en Temps Réel</h3>
            <p>Surveillez vos modèles en direct avec des mises à jour instantanées et des alertes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Sécurité Renforcée</h3>
            <p>Protection des données de classe entreprise avec chiffrement de bout en bout</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>IA Intelligente</h3>
            <p>Recommandations alimentées par l'IA pour optimiser les performances de vos modèles</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Rapports Personnalisés</h3>
            <p>Générez des rapports détaillés adaptés à vos besoins spécifiques</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Intégrations Faciles</h3>
            <p>Connectez-vous facilement avec vos outils et workflows existants</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-header">
          <h2>Comment Ça Marche</h2>
          <p>Trois étapes simples pour commencer</p>
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Connectez Votre Modèle</h3>
            <p>Intégrez facilement votre modèle d'IA avec notre API simple et bien documentée</p>
            <div className="step-icon">🔌</div>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Lancez l'Évaluation</h3>
            <p>Démarrez un test complet avec nos métriques d'évaluation avancées</p>
            <div className="step-icon">🚀</div>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Analysez les Résultats</h3>
            <p>Recevez des rapports détaillés et des recommandations pour améliorer vos modèles</p>
            <div className="step-icon">📊</div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="metrics">
        <div className="section-header">
          <h2>Métriques Complètes</h2>
          <p>Tracez tous les aspects importants de vos modèles</p>
        </div>
        <div className="metrics-tabs">
          <div className="tabs-header">
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Vue d'ensemble
            </button>
            <button
              className={`tab ${activeTab === 'advanced' ? 'active' : ''}`}
              onClick={() => setActiveTab('advanced')}
            >
              Avancé
            </button>
            <button
              className={`tab ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Personnalisé
            </button>
          </div>
          <div className="tabs-content">
            {activeTab === 'overview' && (
              <div className="metrics-grid">
                <div className="metric-box">Accuracy <span className="metric-value">94.5%</span></div>
                <div className="metric-box">Precision <span className="metric-value">92.3%</span></div>
                <div className="metric-box">Recall <span className="metric-value">91.8%</span></div>
                <div className="metric-box">F1-Score <span className="metric-value">92.0%</span></div>
              </div>
            )}
            {activeTab === 'advanced' && (
              <div className="metrics-grid">
                <div className="metric-box">ROC-AUC <span className="metric-value">0.967</span></div>
                <div className="metric-box">Cross Entropy <span className="metric-value">0.234</span></div>
                <div className="metric-box">Specificity <span className="metric-value">95.2%</span></div>
                <div className="metric-box">Sensitivity <span className="metric-value">93.1%</span></div>
              </div>
            )}
            {activeTab === 'custom' && (
              <div className="metrics-grid">
                <div className="metric-box">Custom Metric 1 <span className="metric-value">88.5%</span></div>
                <div className="metric-box">Custom Metric 2 <span className="metric-value">91.2%</span></div>
                <div className="metric-box">Custom Metric 3 <span className="metric-value">89.7%</span></div>
                <div className="metric-box">Custom Metric 4 <span className="metric-value">93.4%</span></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Prêt à transformer votre évaluation d'IA?</h2>
          <p>Rejoignez des milliers d'entreprises qui font confiance à MetaScore AI</p>
          <button className="btn btn-primary btn-large">Commencer Gratuitement</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>MetaScore AI</h4>
            <p>La plateforme d'évaluation d'IA la plus complète</p>
          </div>
          <div className="footer-section">
            <h5>Produit</h5>
            <ul>
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#metrics">Tarifs</a></li>
              <li><a href="#security">Sécurité</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Ressources</h5>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Entreprise</h5>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Carrières</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MetaScore AI. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
