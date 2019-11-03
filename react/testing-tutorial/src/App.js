import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => (
  <div>
    <p>Hi</p>
  </div>
)

export const add = (subTotal, tax) => {
  if (!isNaN(subTotal) && !isNaN(tax)) {
    return subTotal + tax
  }
  else {
    return undefined
  }
}
