import React from 'react';
import ReactDOM from 'react-dom';

const menuList = [
  { prefix: '/h' , title: 'hello'},
  { prefix: '/w' , title: 'world'},
]

export default function Menu(props) {
  const { loading } = props;
  const push = (prefix) => {
    history.pushState(null, prefix, prefix);
  }
  return (
    <div className="dn-mfe-menu">
      {menuList.map(({ title, prefix }) => (
        <div key={prefix} onClick={() => { push(prefix) }}>
          goto {title}
        </div>
      ))}
    </div>
  );
}