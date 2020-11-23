import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import {cacheName,filesToCache} from './service-worker';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js") // service worker file location
    .then(function() {
      console.log("Service Worker Registered Successfully");
    })
    .catch(function(error) {
      console.error("Something goes wrong while registering service worker");
      console.log(error);
    });
} else {
  console.log("Service Worker is not available");
}

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
