// @ts-nocheck
// __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('world');
  if (!el) {
    el = document.createElement('div');
    el.id = 'world';
    (document.getElementById('dn-mfe-base') as any).appendChild(el);
  }
  return el;
}

export async function bootstrap() {
  console.log('[world] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[world] props mount', props);
  ReactDOM.render(
    <App />,
    domElementGetter(),
  );
}

export async function unmount(props: any) {
  console.log('[world] react app unmounted', props);
  ReactDOM.unmountComponentAtNode(domElementGetter());
}

serviceWorker.unregister();
