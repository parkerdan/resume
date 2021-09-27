//

import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Atom from './assets/images/atom.svg';
import AWSS3 from './assets/images/aws-s3.svg';
import AWS from './assets/images/aws.svg';
import Codeship from './assets/images/codeship.svg';
import CSS3 from './assets/images/css-3.svg';
import Electron from './assets/images/electron.svg';
import ES6 from './assets/images/es6.svg';
import ESLint from './assets/images/eslint.svg';
import Expo from './assets/images/expo.svg';
import Express from './assets/images/express.svg';
import Flow from './assets/images/flow.svg';
import Flux from './assets/images/flux.svg';
import Git from './assets/images/git-icon.svg';
import GoogleCloud from './assets/images/google-cloud.svg';
import GraphQL from './assets/images/graphql.svg';
import Heroku from './assets/images/heroku.svg';
import HTML5 from './assets/images/html-5.svg';
import Javascript from './assets/images/javascript.svg';
import Moment from './assets/images/momentjs.svg';
import MongoDB from './assets/images/mongodb.svg';
import Mysql from './assets/images/mysql.svg';
import Node from './assets/images/node.svg';
import Nodemon from './assets/images/nodemon.svg';
import NPM from './assets/images/npm.svg';
import Parse from './assets/images/parse.svg';
import Postgresql from './assets/images/postgresql.svg';
import Postman from './assets/images/postman.svg';
import Rails from './assets/images/rails.svg';
import ReactRouter from './assets/images/react-router.svg';
import ReactSVG from './assets/images/react.svg';
import Realm from './assets/images/realm.svg';
// import ReasonML from './assets/images/reasonml.svg';
import Redis from './assets/images/redis.svg';
import Redux from './assets/images/redux.svg';
import Ruby from './assets/images/ruby.svg';
import Rubygems from './assets/images/rubygems.svg';
import Sass from './assets/images/sass.svg';
import Sentry from './assets/images/sentry.svg';
import Sequelize from './assets/images/sequelize.svg';
import Serverless from './assets/images/serveless.svg';
import Sinatra from './assets/images/sinatra.svg';
import Sketch from './assets/images/sketch.svg';
import SocketIO from './assets/images/socket.io.svg';
import StackOverflow from './assets/images/stackoverflow.svg';
import Stripe from './assets/images/stripe.svg';
import Twilio from './assets/images/twilio.svg';
import Webpack from './assets/images/webpack.svg';
import Yarn from './assets/images/yarn.svg';


import Macbook from './assets/images/macbook.jpg';
import './assets/globals.css';
import Github from './assets/images/github.svg';
import LinkedIn from './assets/images/linkedIn.svg';
import Medium from './assets/images/medium.svg';
import Resume from './assets/images/resume.svg';

const links = [
  {
    alt: 'Medium',
    href: 'https://medium.com/@parkerdan',
    src: Medium,
  },
  {
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/parkerdanielo/',
    src: LinkedIn,
  },
  {
    alt: 'GitHub',
    href: 'https://github.com/parkerdan',
    src: Github,
  },
];

const skills = [
  {src: Javascript, alt: 'Javascript'},
  {src: ReactSVG, alt: 'React'},
  {src: GraphQL, alt: 'GraphQL'},
  {src: Flow, alt: 'Flow'},
  {src: Postman, alt: 'Postman'},
  {src: Moment, alt: 'Moment'},
  {src: Yarn, alt: 'Yarn'},

  {src: Atom, alt: 'Atom'},
  {src: AWSS3, alt: 'AWSS3'},
  {src: AWS, alt: 'AWS'},
  {src: Codeship, alt: 'Codeship'},
  {src: CSS3, alt: 'CSS3'},
  {src: Electron, alt: 'Electron'},
  {src: ES6, alt: 'ES6'},
  {src: ESLint, alt: 'ESLint'},
  {src: Expo, alt: 'Expo'},
  {src: Express, alt: 'Express'},
  {src: Flux, alt: 'Flux'},
  {src: Git, alt: ''},
  {src: GoogleCloud, alt: 'GoogleCloud'},
  {src: Heroku, alt: 'Heroku'},
  {src: HTML5, alt: 'HTML5'},
  {src: MongoDB, alt: 'MongoDB'},
  {src: Mysql, alt: 'Mysql'},
  {src: Node, alt: 'Node'},
  {src: Nodemon, alt: 'Nodemon'},
  {src: NPM, alt: 'NPM'},
  {src: Parse, alt: 'Parse'},
  {src: Postgresql, alt: 'Postgresql'},
  {src: Rails, alt: 'Rails'},
  {src: ReactRouter, alt: 'ReactRouter'},
  {src: Realm, alt: 'Realm'},
  // {src: ReasonML, alt: 'ReasonML'},
  {src: Redis, alt: 'Redis'},
  {src: Redux, alt: 'Redux'},
  {src: Ruby, alt: 'Ruby'},
  {src: Rubygems, alt: 'Rubygems'},
  {src: Sass, alt: 'Sass'},
  {src: Sentry, alt: 'Sentry'},
  {src: Sequelize, alt: 'Sequelize'},
  {src: Serverless, alt: 'Serverless'},
  {src: Sinatra, alt: 'Sinatra'},
  {src: Sketch, alt: 'Sketch'},
  {src: SocketIO, alt: 'SocketIO'},
  {src: StackOverflow, alt: 'StackOverflow'},
  {src: Stripe, alt: 'Stripe'},
  {src: Twilio, alt: 'Twilio'},
  {src: Webpack, alt: 'Webpack'},
]

function Links() {
  return (
    <React.Fragment>
      {links.map(link => (
        <a key={link.alt} href={link.href} target="_blank">
          <img alt={link.alt} src={link.src} className={css(styles.imageLarge)}/>
        </a>
      ))}
      <a href="https://s3-us-west-1.amazonaws.com/parker-resume/parker.pdf" rel="noopener noreferrer" target="_blank">
        <img alt={'resume'} src={Resume} className={css(styles.imageLarge)}/>
      </a>
    </React.Fragment>
  )
}

function Skills() {
  return skills.map(skill => (
    <img
      alt={skill.alt}
      key={skill.alt}
      src={skill.src}
      className={css(styles.imageSmall)}
    />
  ));
}

export default function App() {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.imageBackground)}>
        <h1 className={css(styles.textH1)}>Dan Parker</h1>
        <p className={css(styles.textH2)}>Sr Software Engineer</p>
      </div>
      <div className={css(styles.containerContent)}>
        <p className={css(styles.textH3)}>"I work for Uber building elegant front end solutions and scalable, real-time backend services."</p>
        <div className={css(styles.containerFooter)}>
          <div className={css(styles.flexRow)}>
            <Links />
          </div>
          <div className={css(styles.divider)}/>
          <div className={css(styles.flexRow)}>
            <Skills />
          </div>
        </div>

      </div>
    </div>
  );
}

const primary = '#000'
const secondary = '#241b24'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  containerContent: {
    padding: '0% 5% 5% 5%',
  },
  containerFooter: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,

    '@media (max-width: 1150px)': {
      flexDirection: 'column',
    },
  },

  divider: {
    display: 'none',
    height: '0px',

    '@media (max-width: 1150px)': {
      display: 'block',
      height: '40px'
    },
  },

  imageBackground: {
    backgroundImage: `url(${Macbook})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: 700,
    padding: '2% 5%',

    '@media (max-width: 600px)': {
      height: 500,
      width: '100%',
      padding: '2% 5%'
    },
  },
  imageLarge: {
    height: '88px',
    width: '88px',
    margin: '0px 60px 10px 0px',

    '@media (max-width: 1350px)': {
      margin: '0px 40px 10px 0px',
    },

    '@media (max-width: 600px)': {
      height: '70px',
      width: '70px',
      margin: '0px 3px 10px 0px',
    },
  },
  imageSmall: {
    height: '40px',
    width: '40px',
    margin: '0px 14px 7px 0px',

    '@media (max-width: 600px)': {
      height: '40px',
      width: '40px'
    },
  },

  flexRow: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',

    '@media (max-width: 600px)': {
      justifyContent: 'space-between',
    }
  },

  textH1: {
    color: primary,
    fontFamily: 'mes-rg',
    fontSize: '100px',
    '@media (max-width: 600px)': {
      fontSize: '65px',
    }
  },
  textH2: {
    color: secondary,
    fontFamily: 'mes-lt',
    fontSize: '55px',
    '@media (max-width: 600px)': {
      fontSize: '45px',
    }
  },
  textH3: {
    color: secondary,
    fontFamily: 'mes-lt',
    fontSize: '40px',
    textAlign: 'center',
    margin: '80px 100px',

    '@media (max-width: 1150px)': {
      fontSize: '30px',
      margin: '60px 40px',
    },

    '@media (max-width: 600px)': {
      fontSize: '23px',
      margin: '40px 20px'
    }
  },
})
