//

import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import {Colors} from './constants';

export default function Project({name}) {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.fake)}/>
      <p>{name}</p>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: '0px 25px 10px 0px',
    textAlign: 'center',
    width: 100
  },
  fake: {
    backgroundColor: Colors.greySecondary,
    height: 100,
    width: 100,
    borderRadius: 5
  }
})
