//

import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Animated from 'animated/lib/targets/react-dom';

import ComputerDude from './assets/computerDude.png';
import Macbook from './assets/macbook.jpg';
import Project from './Project';

import {Colors} from './constants';

export default class App extends React.Component {
  constructor() {
    super();
    this.contentCover = new Animated.Value(0);
    this.contentCoverScale = new Animated.Value(1);
    this.interpolateTop = this.contentCover.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -1000]
    });
    this.interpolateColor = this.contentCover.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(0,0,0)', 'rgb(255,255,255)'],
    });
    this.interpolateColorReverse = this.contentCover.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', Colors.blue],
    });

    // TODO animate the color change from white to black

    this.state = {
      buttonDisabled: false,
      buttonText: 'Show Resume',
      hasRunInitial: false,
      position: 'fixed'
    }
  }

  show() {
    const newState = {buttonDisabled: true, buttonText: 'Hide Resume'};
    if (this.state.opacity === 0) {
      newState.opacity = 1;
    }
    this.setState(newState);
    Animated.spring(this.contentCover, {
      toValue: 1,
      tension: 2
    }).start(() => this.setState({buttonDisabled: false, hasRunInitial: true, position: 'absolute'}))
  }

  hide() {
    this.setState({buttonDisabled: true, buttonText: 'Show Resume', position: 'fixed'})
    Animated.spring(this.contentCover, {
      toValue: 0,
      tension: 2
    }).start(() => this.setState({buttonDisabled: false}))
  }

  handleClick = e => {
    e.preventDefault();
    const {buttonDisabled, position} = this.state;
    if (buttonDisabled) {
      return;
    }
    if (position === 'fixed') {
      return this.show()
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return this.hide()
  }

  render() {
    const {buttonDisabled, buttonText, opacity, position} = this.state;
    const buttonBackgroundColor = buttonDisabled ? Colors.greySecondary : Colors.blue
    return (
      <div className={css(styles.container)} style={{opacity, position}}>
        <Animated.div className={css(styles.containerMyInfo)} style={{color: this.interpolateColor}}>
          <h1 className={css(styles.textMeMain)}>Dan Parker</h1>
          <h2 className={css(styles.textMeSecondary)}>Developer</h2>
        </Animated.div>

        {/* <div className={css(styles.containerContent)}>
          <Animated.div className={css(styles.containerLeftSide)} style={{backgroundColor: this.interpolateColorReverse}}>

            <h2 className={css(styles.textLeftHeading)}>Highly Proficient With:</h2>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>React-Native</li>
            <li>GraphQL</li>
            <li>Web Sockets</li>
            <li>Sequelize</li>
            <li>iOS App Certificates</li>
            <li>Self Evaluation</li>
            <li>Reciting Alphabet Backwards</li>

            <h2 className={css(styles.textLeftHeading)}>Skilled In:</h2>
            <li>Redis</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Teaching</li>
            <li>Brewing Beer</li>

            <h2 className={css(styles.textLeftHeading)}>Working Knowledge Of:</h2>
            <li>Ruby</li>
            <li>Rails</li>
            <li>MongoDB</li>
            <li>jQuery</li>
            <li>Sinatra</li>
            <li>Xcode</li>
            <li>Android Studio</li>



          </Animated.div>
          <div className={css(styles.containerRightSide)}>
            <div className={css(styles.containerRow)}>

              <div className={css(styles.imageComputerDude)}/>
              <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>

                <h1 className={css(styles.textRightHeading)}>I build elegant front end solutions and scalable, real-time backend services as a core member of Uber's Innovation Team.</h1>
              </div>
            </div>

            <h1 className={css(styles.textResumeHeading)}>About Me</h1>
            <p className={css(styles.textResumeSubheading)}>{`I currently spend my time as Full Stack JavaScript developer at Uber in San Francisco.  I currently spend my time in a fast paced start-up environment within Uber.  I enjoy mentoring interns and Junior Developers on a daily basis.  I like to use new and exciting technologies in the projects I build and am lucky enough to build many new projects each year.  When not coding I seek fun in playing soccer, golf, travelling, brewing beer, and generally enjoying life.`}</p>

            <h1 className={css(styles.textResumeHeading)}>Projects</h1>
            <div
              className={css(styles.containerRow)}
              style={{flexWrap: 'wrap'}}
            >

              <Project name={'uView'}/>
              <Project name={'Runners'}/>
              <Project name={'Offline'}/>
              <Project name={'Wallabee'}/>
              <Project name={'Homescape'}/>
              <Project name={'Musa Kickabll'}/>


            </div>

            <p>Kiosk</p>
            <p>A little something about Kiosk with some sexy numbers</p>

            <h1 className={css(styles.textResumeHeading)}>Work History</h1>
            <p>That basic ass boring shit</p>

            <h1 className={css(styles.textResumeHeading)}>TODO's</h1>
            <p>LinkedIn Link</p>
            <p>Medium Link</p>
            <p>Github Link</p>
            <p>Maybe Stack Overflow profile link</p>

          </div>

        </div> */}



        <Animated.div className={css(styles.imageBackground)} style={{top: this.interpolateTop, transform: [{scale: this.contentCoverScale}]}} />
        <button
          className={css(styles.button)}
          onClick={this.handleClick}
          style={{backgroundColor: buttonBackgroundColor}}
          >
          {buttonText}
        </button>
      </div>
    );
  }
}

const standardMargin = '20px';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: '10px',
    borderRadius: '5px',
    color: Colors.white,
    textAlign: 'center',
    width: '100px'
  },
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  containerContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  containerMyInfo: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    margin: `${standardMargin} 0 0 ${standardMargin}`,
  },
  containerLeftSide: {
    // backgroundColor: Colors.blue,
    color: Colors.white,
    width: '400px',
    padding: `150px 0px 200px ${standardMargin}`,
    boxShadow: `2px 2px 1px 1px ${Colors.greySecondary}`
  },
  containerRightSide: {
    flex: 1,
    padding: standardMargin
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundImage: `url(${Macbook})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100%',
  },
  imageComputerDude: {
    backgroundImage: `url(${ComputerDude})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '200px',
    width: '200px',
    borderRadius: '100px',
    border: `1px solid ${Colors.greySecondary}`,
    margin: '0px 30px 0px 0px'
  },


  textMeMain: {
    fontSize: '50px'
  },
  textMeSecondary: {
    fontSize: '40px',
    margin: '10px 0px'
  },
  textLeftHeading: {
    margin: '20px 0px 10px 0px'
  },
  textRightHeading: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: '42px'
  },
  textResumeHeading: {
    color: Colors.black,
    fontSize: '30px',
    margin: '30px 0px 10px 0px'
  },
  textResumeSubheading: {
    color: Colors.black,
    fontSize: '20px',
    whiteSpace: 'pre-line'
    // margin: '30px 0px 10px 0px'
  }
})
