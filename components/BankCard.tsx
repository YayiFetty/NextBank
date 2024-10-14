import { formatAmount } from "@lib/utils";
import Image from "next/image";
import React from "react";

const BankCard = ({account, userName, showBalance =true}:CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="bank-card">
        {/* Background wave pattern */}
        <div className="absolute right-0 -top-4 h-[200px] w-[65px] pointer-events-none bg-bank-gradient">
          <Image
            src="/icons/lines.png"
            alt="lines"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/icons/lines.png"
            alt="lines"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        {/* Card content */}
        <div className="relative z-10 flex flex-col h-full gap-7">
          {/* for the header */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-16 font-semibold">{account.name || userName}</h2>
              <p className="text-white font-black font-ibm-plex-serif">{formatAmount(account.currentBalance)}</p>
            </div>
            <Image
              src="/icons/Paypass.svg"
              alt="paypass"
              width={23}
              height={23}
            />
          </div>

          {/* name */}
          <div className=" flex justify-between max-w-[140px] w-full">
            <h2 className="text-white text-12 font-semibold">{userName}</h2>
            <p className="text-white text-12 font-semibold">●●/●●</p>
          </div>

          {/* card number and logo */}
          <div className="flex justify-between items-center gap-5">
            <h3 className="text-white text-14 tracking-[1.1px">
              ●●●● ●●●● ●●●● <span className="text-16">2334</span>
            </h3>
            <Image
              src="/icons/mastercard.svg"
              alt="master"
              width={40}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
