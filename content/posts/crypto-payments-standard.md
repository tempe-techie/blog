---
title: "Standardizing Crypto Payments with QR Codes and Payment IDs"
date: 2023-07-11T09:23:42
draft: false
---

Recently, I listened to [Kartik's fireside chat with Vitalik at ETH Waterloo 2023](https://youtu.be/y2SfT8ugjCk?t=828). During their conversation, Vitalik raised an interesting point that despite being over a decade into the crypto revolution, everyday crypto payments are still not as user-friendly as they could be.

Imagine the convenience of paying for a cup of coffee or effortlessly sending a small payment to a friend who covered the restaurant bill. Vitalik emphasized the need for a simpler system, one that could easily integrate with QR codes and mobile devices. 

Let's dive deeper into this topic and explore some possibilities on how to create a payments standard.

### Static QR Codes for Crypto Payments

Firstly, let's consider the scenario where a merchant has a static QR code to receive crypto payments, identical for every customer. 

![](https://bafybeihj5m3axoyo57pb4xid36iwaollsvftmarul5fqddvomh6w3vosuu.ipfs.w3s.link/albert-hu-RII9HuLDz4M-unsplash.jpg)

The QR code contains information such as the merchant's crypto address, preferred cryptocurrencies, and supported networks or chains.

However, there is a drawback with this approach. Because the QR code is the same for every customer, the merchant can only process one customer at a time. 

They must wait for each payment to go through before attending to the next customer. Although this works well for smaller shops with lower traffic, it proves impractical for larger businesses.

### Dynamically Generated QR Codes

For larger businesses aiming to process multiple customers in parallel, QR codes need to be dynamic instead of static (meaning each customer gets a different QR code). 

In the past, the conventional approach involved generating a different receiver address for each customer. However, this method presents various drawbacks. Mainly, transferring received funds to a central address requires additional gas, incurring gas fees and leaving traces of dust on each receiving address in the EIP-1559 world. 

A better approach is to keep a static receiving address, but have a distinct identifier for each customer: A payment ID.

### The Role of Payment IDs

To differentiate between multiple customers paying simultaneously, payment IDs come to the rescue. There are three methods for incorporating payment IDs. 

One approach involves using a smart contract as the receiving wallet, which can accept parameters in its payment function, including a payment ID. However, this method requires a merchant to deploy the smart contract wallet on each supported chain. And these wallets need to have the same address.

For merchants preferring to use an ordinary (EOA) address as the receiving address (instead of a smart contract wallet), alternative methods are available. 

One option involves receiving payment ID in transaction calldata. Calldata is sometimes used for onchain communication, so why not using it for payment IDs?

Another interesting solution involves encoding the payment ID as the last 2-6 digits of the payment amount. For instance, if a payment amount is 16 DAI, the merchant could append a unique payment ID as the last 6 digits of the amount (e.g., 16.000000000000123456 DAI). 

If two users were to pay the same amount at the same time, they would receive different appended digits, differentiating their transactions.

### Establishing a Common Standard

In any case, a common standard for encoding payment data in a QR code is needed.

This standard would encompass the receiving address, supported coins or tokens, supported chains, payment amount (optional), and payment ID (optional). 

```json
{
  "receiver": "0xb29050965a5ac70ab487aa47546cdcbc97dae45d",
  "info": [
    {
      "chain": 100,
      "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
      "name": "USDC",
      "amount": 16
    },
    {
      "chain": 137,
      "address": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      "name": "USDC",
      "amount": 16
    },
    {
      "chain": 137,
      "address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "name": "USDT",
      "amount": 16
    }
  ],
  "id": "R7VB22"
}
```

By establishing a common standard and encouraging crypto wallet providers to incorporate it, the practicality of crypto payments will greatly improve, especially with the advent of low gas fees and fast confirmations on Layer 2 chains.

It is worth noting that privacy concerns remain a drawback, but establishing a common standard would represent an important step forward.