import React from 'react';
import styles from './Tools.module.css';

export default function Tools() {
  return (
    <section id="tools" className={styles.toolsSection}>

      <div className="text-center mb-5">
        <div className={styles.toolsArea}>

        
        <h3 className={`display-4 ${styles.coreToolsHeading}`}>CORE TOOLS</h3>
        <div className="row justify-content-center g-2">

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/html.png"
                alt="HTML"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>HTML: Structure web content</span>
            </div>
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/css.png"
                alt="CSS"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>CSS: Style web content</span>
            </div>
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/javascript.png"
                alt="JavaScript"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>JavaScript: Add interactivity</span>
            </div>
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/react.png"
                alt="React"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>React: Build user interfaces</span>
            </div>
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/nodejs.png"
                alt="Node.js"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>Node.js: Server-side JavaScript</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className={`display-4 ${styles.otherToolsHeading}`}>OTHER TOOLS</h3>
        <div className="row justify-content-center g-2">

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/blender.png"
                alt="Blender"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>Blender: 3D modeling and animation</span>
            </div>
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/unity.png"
                alt="Unity"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>Unity: Game development</span>
            </div>
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/mocha.png"
                alt="Mocha"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>Mocha: JavaScript testing</span>
            </div>
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <div className={styles.toolWrapper}>
              <img
                src="/images/chai.png"
                alt="Chai"
                className={styles.toolIcon}
                loading="lazy"
              />
              <span className={styles.tooltip}>Chai: Assertion library for testing</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
