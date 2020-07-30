import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';

export default function render({ loading }) {
  const container = document.getElementById('dn-mfe-container');
  ReactDOM.render(<App loading={loading} />, container);
}

function App(props) {
  const { loading } = props;
  return (
    <div className="dn-mfe-main">
      <Menu />
      {loading && <h4>Loading...</h4>}
      <div id="dn-mfe-base" />
    </div>
  );
}