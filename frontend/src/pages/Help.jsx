// src/pages/Record.jsx
import React from "react";

function HelpPage() {
  return (
    <div className="container">
      <h1>Help</h1>
      <p>The following are frequently asked questions</p>
        <h2>1. About recharge</h2>
        <p>You can top up your account in the "My" - "My Wallet" interface. Click the "Recharge" button, fill in the name of the assignee and the amount to be transferred, and click "Transfer" to transfer. After transferring to the account provided by the platform, please be sure to submit a screenshot of the successful transfer, and then click "Submit". To ensure that your recharge is received quickly, the system will randomly match the amount you wish to recharge. Be sure to double check the USDT account or bank account you entered for the deposit before topping up. The platform will change the USDT wallet account or bank account from time to time, so if you have any questions,</p>
        <h2>2. About withdrawals</h2>
        <p>If you want to apply for withdrawal, you must complete at least 25 orders before you can apply, please bind your withdrawal information in the application before withdrawing. You can withdraw funds from the "My" - "My Wallet" interface during platform working hours. Click the "Withdraw" button, enter the amount you want to withdraw and the withdrawal password, the withdrawal will be transferred to your USDT wallet or bank within 24:00 after you apply for withdrawal. Please be sure to check the USDT wallet or bank account you entered for withdrawal before withdrawing. The platform will change the USDT wallet account or bank account from time to time, so if you have any questions, please contact customer service.</p>
        <h2>3. About grabbing orders and freezing orders</h2>
        <p>After the account balance reaches the minimum 20USD, you can grab the order, and each person can grab up to 25 orders per day! Click "Order" - "Automatic Order" below, and wait for the system to grab the order. If the order is successful, you need to complete the task order as soon as possible, so as not to delay the completion of subsequent tasks.</p>
    </div>
  );
}
export default HelpPage;
