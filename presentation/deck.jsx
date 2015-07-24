import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

const images = {
  compatibility: require("./images/compatibility.png"),
  babel: require("./images/babel.png"),
  npm: require("./images/npm.png"),
};

export default class extends React.Component {
  render() {
    return (
      <Deck transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Javascript
          </Heading>
          <Heading size={1} fit caps textColor="black">
            in 2015
          </Heading>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Tom Duncalf</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Overview</Heading>
          <List>
            <ListItem>Why care about Javascript?</ListItem>
            <ListItem>ES6</ListItem>
            <ListItem>Frameworks</ListItem>
            <ListItem>Compile-to-JS languages</ListItem>
            <ListItem>Package management and build tools</ListItem>
            <ListItem>The future</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Why Care About Javascript?</Heading>
          <List>
            <ListItem>Probably the most widely deployed language runtime</ListItem>
            <ListItem>Has some "quirks" (originally designed in 10 days!) but is actually a fairly good functional + prototypical-OO language</ListItem>
            <ListItem>The only (real) way to develop interactive web pages</ListItem>
            <ListItem>Runs client-side and server-side</ListItem>
            <ListItem>Fast pace of change in the last few years, taking influences from other languages and approaches</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            ECMAScript 6
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ECMAScript 6: Intro</Heading>
          <List>
            <ListItem>ES6 is the newest Javascript standard (currently on ES5 - 2009)</ListItem>
            <ListItem>Also known as "ECMAScript Harmony", "ES2015" or "ES.next"</ListItem>
            <ListItem>New features and syntax to make writing complex apps easier (particularly async code and modularity)</ListItem>
            <ListItem>Maintains backwards compatibility (even the bad bits)</ListItem>
            <ListItem>Standardised in June 2015, many features rolling out now</ListItem>
            <Image src={images.compatibility.replace('/','')} width="80%" margin="10px 10% 0 10%"></Image>
            <ListItem>Can use it <strong>today</strong> (more later)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ES6: Classes - Before (ES5)</Heading>
          <Appear fid="1">
            <CodePane lang="javascript" source={require("raw!./code/class-es5.code")}></CodePane>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ES6: Classes - After (ES6)</Heading>
          <CodePane lang="javascript" source={require("raw!./code/class-es6.code")}></CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ES6: Arrow functions</Heading>
          <Appear fid="1">
            <Heading size={6} textColor="primary">Before (ES5)</Heading>
            <CodePane lang="javascript" source={require("raw!./code/arrow-es5.code")}></CodePane>
          </Appear>
          <Appear fid="2">
            <Heading size={6} textColor="primary">After (ES6)</Heading>
            <CodePane lang="javascript" source={require("raw!./code/arrow-es6.code")}></CodePane>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ES6: Arrow functions (scope)</Heading>
          <Appear fid="1">
            <Heading size={6} textColor="primary">Before (ES5)</Heading>
            <CodePane lang="javascript" source={require("raw!./code/arrow2-es5.code")}></CodePane>
          </Appear>
          <Appear fid="2">
            <Heading size={6} textColor="primary">After (ES6)</Heading>
            <CodePane lang="javascript" source={require("raw!./code/arrow2-es6.code")}></CodePane>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ES6: Modules and Loaders</Heading>
          <Appear fid="1">
            <Heading size={6} textColor="primary">Before (ES5)</Heading>
            <List>
              <ListItem>No official module system - use IIFEs, or AMD, or CommonJS...</ListItem>
              <ListItem>Use RequireJS (or nothing!) to handle dependencies</ListItem>
            </List>
          </Appear>
          <Appear fid="2">
            <Heading size={6} textColor="primary">After (ES6)</Heading>
            <CodePane lang="javascript" source={require("raw!./code/modules-es6.code")}></CodePane>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ES6: Other Bits</Heading>
          <Appear fid="1">
            <Heading size={6} textColor="primary">Native Promises (+ Fetch API)</Heading>
            <CodePane lang="javascript" source={require("raw!./code/promise-es6.code")}></CodePane>
          </Appear>
          <Appear fid="2">
            <Heading size={6} textColor="primary">Object and Array Destructuring</Heading>
            <CodePane lang="javascript" source={require("raw!./code/destructuring-es6.code")}></CodePane>
          </Appear>
          <Appear fid="3">
            <Heading size={6} textColor="primary">Template literals (string interpolation)</Heading>
            <CodePane lang="javascript" source={require("raw!./code/template-literals-es6.code")}></CodePane>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ES6: Other Bits</Heading>
          <List>
            <ListItem>Generators</ListItem>
            <ListItem>Iterators</ListItem>
            <ListItem>Default arguments</ListItem>
            <ListItem>Map/WeakMap/Set/WeakSet data structures</ListItem>
            <ListItem>Symbols</ListItem>
            <ListItem>Proxies</ListItem>
            <ListItem>Reflection</ListItem>
            <ListItem>Tail-call optimization</ListItem>
            <ListItem><Link href="https://github.com/lukehoban/es6features">https://github.com/lukehoban/es6features</Link></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ES6: Using it now</Heading>
          <List>
            <ListItem>Browser support is currently incomplete (end of year?)</ListItem>
            <ListItem>Can use Babel to compile ES6 into ES5 code as part of build</ListItem>
            <Image src={images.babel.replace('/','')} width="80%" margin="10px 10% 0 10%"></Image>
            <ListItem>Supports source maps</ListItem>
            <ListItem>Can even try out proposed ES7 features</ListItem>
            <ListItem><Link href="http://babeljs.io">http://babeljs.io</Link></ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Frameworks
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Frameworks: Intro</Heading>
          <List>
            <Appear fid="1">
              <ListItem>Early JS frameworks were low level, imperative (Prototype, jQuery)</ListItem>
              <ListItem>Designed to work around browser bugs, DOM API, do animations...</ListItem>
              <ListItem>Now assumed as a baseline and/or handled in-browser (e.g. CSS transitions, fetch, querySelector)</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Current trend is for frameworks to work at a higher level and be more declarative (e.g. Angular, Ember)</ListItem>
              <ListItem>Aim to solve common problems for web apps e.g. data binding, MVC, routing,   reusable components</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Frameworks: Example</Heading>
          <Appear fid="1">
            <Heading size={6} textColor="primary">jQuery</Heading>
              <Layout>
                <Fill>
                  <CodePane lang="html" source={require("raw!./code/framework-jq-html.code")} padding="0 10px 0 0"></CodePane>
                </Fill>
                <Fill>
                  <CodePane lang="javascript" source={require("raw!./code/framework-jq-js.code")} padding="0 0 0 10px"></CodePane>
                </Fill>
              </Layout>
            </Appear>
            <Appear fid="2">
              <Heading size={6} textColor="primary">Angular</Heading>
              <CodePane lang="html" source={require("raw!./code/framework-angular-html.code")} padding="0 0 10px 0"></CodePane>
              <CodePane lang="javascript" source={require("raw!./code/framework-angular-js.code")} padding="0"></CodePane>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Frameworks: Angular</Heading>
          <Appear fid="1">
            <List>
              <ListItem>Framework for creating rich web apps</ListItem>
              <ListItem>MVC, Templating with 2-way data binding and expression language</ListItem>
              <ListItem>Directives (reusable components)</ListItem>
              <ListItem>Routing, Forms, Services</ListItem>
              <ListItem>Unit testing, Dependency injection</ListItem>
            </List>
          </Appear>
          <Appear fid="2">
            <Text textColor="primary">Which is great, but...</Text>
          </Appear>
          <Appear fid="3">
            <List>
              <ListItem>Lots of new concepts and syntax (e.g. ng-repeat, not foreach)</ListItem>
              <ListItem>Hidden complexity and performance issues</ListItem>
              <ListItem>Shared scope can lead to state scattered all over the app</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Frameworks: React</Heading>
          <Appear fid="1">
            <List>
              <ListItem>Facebook's library for building UIs (mainly the V in MVC)</ListItem>
              <ListItem>Based around components (but not Web Components)</ListItem>
            </List>
          </Appear>
          <Appear fid="2">
            <List>
              <ListItem>Simple API, less magic</ListItem>
              <ListItem>Use plain Javascript rather than bespoke concepts</ListItem>
              <ListItem>One way data flow, explicit state updates</ListItem>
              <ListItem>Virtual DOM with diffing</ListItem>
              <ListItem>Logic and template live in the same JS file - JSX</ListItem>
              <ListItem>Rendering is a pure function of component's state and props</ListItem>
              <ListItem>Not restricted to DOM e.g. <Link href="https://facebook.github.io/react-native/">React Native</Link></ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Frameworks: React</Heading>
          <CodePane lang="javascript" source={require("raw!./code/framework-react.code")} padding="0 0 10px 0"></CodePane>
          <Link href="https://jsfiddle.net/6La6fm74/1/">https://jsfiddle.net/6La6fm74/1/</Link>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Frameworks: Libraries</Heading>
          <List>
            <ListItem>Trend seems to be somewhat moving away from monolithic frameworks (e.g. Angular) towards smaller libraries</ListItem>
            <ListItem>Functional programming approaches gaining popularity</ListItem>
            <ListItem><Link href="https://facebook.github.io/react/">React</Link></ListItem>
            <ListItem><Link href="https://facebook.github.io/immutable-js/">ImmutableJS</Link> - rich immutable collections API</ListItem>
            <ListItem><Link href="https://github.com/Reactive-Extensions/RxJS">RxJS</Link>, <Link href="https://baconjs.github.io/">Bacon.js</Link>, <Link href="https://github.com/paldepind/flyd">Flyd</Link> - functional reactive programming</ListItem>
            <ListItem><Link href="http://ramdajs.com/0.17/index.html">Ramda</Link> - functional programming library</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Compile-to-JS languages
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Compile-to-JS: Intro</Heading>
          <Appear fid="1">
            <List>
              <ListItem>Compile-to-JS languages are becoming more popular</ListItem>
              <ListItem>Workflow can be quite smooth with source maps, good build tools</ListItem>
              <ListItem>Range from supersets of JS with additional features, through ports of existing languages, all the way to entirely new languages</ListItem>
              <ListItem>JavaScript is becoming the "universal runtime"</ListItem>
              <ListItem><Link href="https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-JS">https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-JS</Link></ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">TypeScript and Flow</Heading>
          <List>
            <ListItem>Both add strong typing to Javascript</ListItem>
            <ListItem>Static type checker run as part of build process, IDE integration</ListItem>
            <Appear fid="1">
              <ListItem><Link href="http://www.typescriptlang.org/">TypeScript</Link> is created by Microsoft, being used by Angular 2</ListItem>
              <ListItem>Third party libraries need type interfaces: <Link href="https://github.com/borisyankov/DefinitelyTyped">Github Repo</Link></ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem><Link href="http://flowtype.org/">Flow</Link> is created by Facebook</ListItem>
              <ListItem>Supports gradual typing: only need to use types where you want to</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Very similar - <Link href="http://www.reddit.com/r/javascript/comments/39cere/typescript_vs_flow_results_from_our_investigation/">TypeScript is more powerful, Flow easier to introduce</Link></ListItem>
              <Layout>
                <Fill>
                  <CodePane lang="javascript" source={require("raw!./code/compile-typescript.code")} padding="0 10px 0 0"></CodePane>
                </Fill>
                <Fill>
                  <CodePane lang="javascript" source={require("raw!./code/compile-flow.code")} padding="0 0 0 10px"></CodePane>
                </Fill>
              </Layout>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">CoffeeScript</Heading>
          <List>
            <ListItem>Brings Ruby-like syntax and additional sugar to JS</ListItem>
            <ListItem>Quite popular for a while, but ES6 is "good enough" for many</ListItem>
            <Appear fid="1">
              <CodePane lang="coffeescript" source={require("raw!./code/compile-coffeescript.code")}></CodePane>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">LiveScript</Heading>
          <List>
            <ListItem>Indirect descendant of CoffeeScript</ListItem>
            <ListItem>Adds many improvements for functional-style programming</ListItem>
            <Appear fid="1">
              <CodePane lang="coffeescript" source={require("raw!./code/compile-livescript.code")}></CodePane>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">ClojureScript</Heading>
          <List>
            <ListItem>Clojure compiler which targets Javascript</ListItem>
            <ListItem>Large community with some interesting libraries</ListItem>
            <ListItem>Fairly widespread production use</ListItem>
            <Appear fid="1">
              <CodePane lang="clojure" source={require("raw!./code/compile-clojurescript.code")}></CodePane>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Scala.JS</Heading>
          <List>
            <ListItem>Scala compiler which targets Javascript</ListItem>
            <ListItem>Supports all of Scala, integrates with SBT</ListItem>
            <Appear fid="1">
              <CodePane lang="scala" source={require("raw!./code/compile-scalajs.code")}></CodePane>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">PureScript</Heading>
          <List>
            <ListItem>Strongly typed functional language that compiles to JS</ListItem>
            <ListItem>Inspired by Haskell, but not a port of an existing language</ListItem>
            <Appear fid="1">
              <CodePane lang="haskell" source={require("raw!./code/compile-purescript.code")}></CodePane>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Elm</Heading>
          <List>
            <ListItem>Functional reactive language designed to make writing web apps easier</ListItem>
            <ListItem>Some interesting features e.g. time travelling debugger</ListItem>
            <Appear fid="1">
              <CodePane lang="scala" source={require("raw!./code/compile-elm.code")}></CodePane>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Package Manangement
          </Heading>
          <Heading size={1} fit caps textColor="black">
            and Build Tools
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Package Management</Heading>
          <List>
            <Appear fid="1">
              <ListItem>Package managers enable us to manage project dependencies</ListItem>
              <ListItem><Link href="http://requirejs.org/">RequireJS</Link>/<Link href="http://browserify.org/">Browserify</Link>/<Link href="https://github.com/systemjs">SystemJS</Link>/<Link href="https://github.com/webpack/webpack">Webpack</Link>/ES6 loaders enable us to include dependencies without a mess of &lt;script&gt; tags</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem><Link href="http://bower.io/">Bower</Link> was the first mainstream Javascript/front-end package manager - packages self-hosted and registered with central DB</ListItem>
              <ListItem>Trend now moving towards <Link href="https://www.npmjs.com/">npm</Link>, or layers on top, e.g. <Link href="http://jspm.io/">jspm</Link></ListItem>
              <Image src={images.npm.replace('/','')} width="80%" margin="10px 10% 0 10%"></Image>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Build Tools</Heading>
          <List>
            <Appear fid="1">
              <ListItem>Build tools enable us to define common build tasks for a project</ListItem>
              <ListItem>e.g. compile CSS/JS, lint JS, run unit tests, minify CSS and JS - typically achieved using plugins</ListItem>
              <ListItem>Often used in "watch" mode so changes are automatically detected</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem><Link href="http://gruntjs.com/">Grunt</Link>: uses JSON config files to define build tasks. Biggest ecosystem of plugins, but quite verbose and slow.</ListItem>
              <ListItem><Link href="http://gruntjs.com/">Gulp</Link>: uses Javascript to define build tasks. Ecosystem not as big yet, but much less config and quicker (uses streaming).</ListItem>
              <ListItem><Link href="https://github.com/webpack/webpack">Webpack</Link>: module bundler but can do many common build tasks. Often used alongside Gulp. Some cool features e.g. <Link href="https://github.com/gaearon/react-hot-loader">react-hot-loader</Link>.</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            The future
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">The future</Heading>
          <List>
            <Appear fid="1">
              <ListItem>Javascript will continue to become more pervasive - desktop apps natively (Windows) or using e.g. <Link href="https://github.com/atom/electron">Electron</Link>, mobile apps (React Native, Windows Phone), server side...</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Javascript will continue to evolve - ES7 spec already under development e.g. async/await</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Compile-to-JS languages will continue to become more popular as tooling improves</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem><Link href="http://asmjs.org/">asm.js</Link> (low level subset of JS) will enable both JS and compiled-to-JS code to perform closer to the level of native code</ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem>There will still be millions of new libraries and frameworks introduced every week :)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Questions?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">References</Heading>
          <List>
            <ListItem><Link href="https://github.com/lukehoban/es6features">https://github.com/lukehoban/es6features</Link></ListItem>
            <ListItem><Link href="https://github.com/addyosmani/es6-equivalents-in-es5">https://github.com/addyosmani/es6-equivalents-in-es5</Link></ListItem>
            <ListItem><Link href="http://babeljs.io">http://babeljs.io</Link></ListItem>
            <ListItem><Link href="https://angularjs.org/">https://angularjs.org/</Link></ListItem>
            <ListItem><Link href="https://facebook.github.io/react/">https://facebook.github.io/react/</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
