/*
1. Using the mockApi below, fetch users when the component mounts and store this in component state

2. Using the data we just fetched, display the total balance of all accounts across all banks

3. Display the names of all Yorkshire Finance customers (each name should only be printed once)

4. Add up and display the total balance for each person across all their accounts, again ensuring each name is only printed once (if they only have one account just show that)

5. Create a button, when that button is clicked set the balance of all London Bank customers to 0
*/

import React from 'react';
import { UserAccount } from './typings';

export default function App(): React.ReactElement {
  return (
    <div className="App">
      <h1>React Exercise</h1>
    </div>
  );
}

const mockApi = {
  fetchUsers(): Promise<UserAccount[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  }
};

const data: UserAccount[] = [
  {
    name: "David Davidson",
    bank: "Scottish Bank",
    accountType: "current",
    balance: 500
  },
  {
    name: "Robert Paulson",
    bank: "London Bank",
    accountType: "savings",
    balance: 10000
  },
  {
    name: "David Davidson",
    bank: "London Bank",
    accountType: "savings",
    balance: 5000
  },
  {
    name: "Regina George",
    bank: "Yorkshire Finance",
    accountType: "current",
    balance: 999
  },
  {
    name: "Regina George",
    bank: "Yorkshire Finance",
    accountType: "savings",
    balance: 1001
  },
  {
    name: "Philip Johnson",
    bank: "Scottish Bank",
    accountType: "current",
    balance: 869
  },
  {
    name: "Claire Philips",
    bank: "London Bank",
    accountType: "current",
    balance: 1234
  },
  {
    name: "Megan Reid",
    bank: "Scottish Bank",
    accountType: "current",
    balance: -200
  },
  {
    name: "John Edwards",
    bank: "Scottish Bank",
    accountType: "current",
    balance: -500
  },
  {
    name: "Michael Komorowski",
    bank: "Yorkshire Finance",
    accountType: "current",
    balance: 999
  },
  {
    name: "Michelle Johnson",
    bank: "Yorkshire Finance",
    accountType: "current",
    balance: 800
  }
];
