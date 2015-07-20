import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

const images = {
  compatibility: require("./images/compatibility.png"),
  babel: require("./images/babel.png"),
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
            <ListItem>ES6 is the newest Javascript standard (currently on ES5 - 2009)</ListItem>
            <ListItem>Also known as "ECMAScript Harmony", "ES2015" or "ES.next"</ListItem>
            <ListItem>New features and syntax to make writing complex apps easier (particularly async code and modularity)</ListItem>
            <ListItem>Maintains backwards compatibility (even the bad bits)</ListItem>
            <ListItem>Standardised in June 2015, many features rolling out now</ListItem>
            <Image src={images.compatibility.replace('/','')} width="80%" margin="10px 10% 0 10%"></Image>
            <ListItem>Can use it <strong>today</strong> (more later)</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">References</Heading>
          <List>
            <ListItem><Link href="https://github.com/lukehoban/es6features">https://github.com/lukehoban/es6features</Link></ListItem>
            <ListItem><Link href="https://github.com/addyosmani/es6-equivalents-in-es5">https://github.com/addyosmani/es6-equivalents-in-es5</Link></ListItem>
            <ListItem><Link href="http://babeljs.io">http://babeljs.io</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
