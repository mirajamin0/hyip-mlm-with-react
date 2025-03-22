import React, { useState } from 'react';

function WithdrawalForm() {
  const [amount, setAmount] = useState('');
  const [wallet, setWallet] = useState('');
  const [method, setMethod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/withdrawals/request', {
      method: 'POST',
      body: JSON.stringify({ amount, method, wallet_address: wallet }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await res.json();
    if (res.ok) alert(data.message);
    else alert('Error: ' + data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} required/>
      <input type="text" placeholder="Withdrawal Method" value={method} onChange={e=>setMethod(e.target.value)} required/>
      <input type="text" placeholder="Wallet Address" value={wallet} onChange={e=>setWallet(e.target.value)} required/>
      <button type="submit">Request Withdrawal</button>
    </form>
  );
}

export default WithdrawalForm;
