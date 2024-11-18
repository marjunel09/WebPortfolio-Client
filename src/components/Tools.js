import React from 'react';
import styles from './Tools.module.css';

export default function Tools() {
  return (
    <section id="tools" className={styles.toolsSection}>

      <div className="text-center mb-5">
        <h3 className={`display-4 ${styles.coreToolsHeading}`}>CORE TOOLS</h3>
        <div className="row justify-content-center g-2">

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/html.png"
              alt="HTML"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/css.png"
              alt="CSS"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/javascript.png"
              alt="JavaScript"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/react.png"
              alt="React"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/nodejs.png"
              alt="Node.js"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className={`display-4 ${styles.otherToolsHeading}`}>OTHER TOOLS</h3>
        <div className="row justify-content-center g-2">

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/blender.png"
              alt="Blender"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/unity.png"
              alt="Unity"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/mocha.png"
              alt="Mocha"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>

          <div className="col-6 col-md-2 d-flex justify-content-center mb-2">
            <img
              src="/images/chai.png"
              alt="Chai"
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
