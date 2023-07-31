import React from 'react';
import styles from './SectionWrapper.module.scss';

const SectionWrapper = (props) => {
  return (
    <div className={styles.sectionWrapper}>{props.children}</div>
  )
}

export default SectionWrapper