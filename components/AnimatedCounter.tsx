"use client";
import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp end={amount} prefix="₹ " decimal="." duration={1} decimals={2} />
  );
};

export default AnimatedCounter;
