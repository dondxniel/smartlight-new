import React from "react";
//icons
import CardIcon from "../assets/card-payment.svg";
import BankTransferIcon from "../assets/transfer-payment.svg";
import CryptoIcon from "../assets/crypto-payment.svg";
import USSDIcon from "../assets/ussd-payment.svg";

export const linedata = {
  labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [2.0, 4.5, 2.8, 5.0, 7.4, 8.3, 8.4],
    },
  ],
};

export const transactions = [
  {
    id: Math.floor(Math.random(1) * 1000),
    amount: 10000,
    meterInfo: {
      name: "Chinebere Emmanuel",
      no: 37144433351,
      icon: "../assets/avatar.png",
    },
  },
  {
    id: Math.floor(Math.random(1) * 1000),
    amount: 30000,
    meterInfo: {
      name: "Chinebere Emmanuel",
      no: 37144433351,
      icon: "../assets/avatar.png",
    },
  },
  {
    id: Math.floor(Math.random(1) * 1000),
    amount: 21000,
    meterInfo: {
      name: "Chinebere Emmanuel",
      no: 37144433351,
      icon: "../assets/avatar.png",
    },
  },
  {
    id: Math.floor(Math.random(1) * 1000),
    amount: 30000,
    meterInfo: {
      name: "Chinebere Emmanuel",
      no: 37144433351,
      icon: "../assets/avatar.png",
    },
  },
  {
    id: Math.floor(Math.random(1) * 1000),
    amount: 5000,
    meterInfo: {
      name: "Chinebere Emmanuel",
      no: 37144433351,
      icon: "../assets/avatar.png",
    },
  },
];

export const paymentMethods = [
  { type: "Card", icon: <CardIcon /> },
  { type: "Bank Transfer", icon: <BankTransferIcon /> },
  { type: "Crypto", icon: <CryptoIcon /> },
  { type: "USSD", icon: <USSDIcon /> },
];

export const meters = [
  {
    name: "Chibuzor Akachukwu",
    address: "U/Sunday Kaduna",
    meter_no: 37144433351,
  },
  {
    name: "Chibuzor Akachukwu",
    address: "U/Sunday Kaduna",
    meter_no: 37144433351,
  },
  {
    name: "Chibuzor Akachukwu",
    address: "U/Sunday Kaduna",
    meter_no: 37144433351,
  },
];
