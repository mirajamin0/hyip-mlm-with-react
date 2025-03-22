import React, { useState } from 'react';

function DepositForm() {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [proofImage, setProofImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('amount', amount);
    formData.append('method', method);
    formData.append('transaction_id', transactionId);
    formData.append('proof_image', proofImage);

    const res = await fetch('/api/deposits/request', {
      method: 'POST',
      body: formData,
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });

    const data = await res.json();
    if (res.ok) alert(data.message);
    else alert('Error: ' + data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} required/>
      <input type="text" placeholder="Method" value={method} onChange={e=>setMethod(e.target.value)} required/>
      <input type="text" placeholder="Transaction ID" value={transactionId} onChange={e=>setTransactionId(e.target.value)} required/>
      <input type="file" onChange={e=>setProofImage(e.target.files[0])} required/>
      <button type="submit">Submit Deposit</button>
    </form>
  );
}

export default DepositForm;
