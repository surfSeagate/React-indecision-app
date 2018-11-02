

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.content}
//       <p>footer</p>
//     </div>
//   )
// };
// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   )
// };
// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//   </div>
// )

//ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// ReactDOM.render(<Layout content={template} />, document.getElementById('app'));


// ReactDOM.render((
//   <Layout>
//     <p>this is inline</p>
//   </Layout>
// ), document.getElementById('app'));


