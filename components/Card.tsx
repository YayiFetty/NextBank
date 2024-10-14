import { formatAmount } from "@lib/utils";
import Image from "next/image";
import React from "react";

const Card = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="max-w-[280px] h-[170px] w-full bg-blue-gradient rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 border border-gray-100">
        <div className="relative flex flex-col border-2  border-white shadow-creditCard w-full max-w-[280px] h-[170px] gap-8 px-4 py-3  rounded-xl overflow-hidden">
          {/* Background wave pattern */}
          <div className="absolute right-0 -top-4 h-[200px] w-[67px] pointer-events-none bg-bank-gradient">
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
          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* for the header */}
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-sm font-semibold">
                  {account.name || userName}
                </h2>
                <p className="text-white text-[12px] font-bold">
                  {formatAmount(account.currentBalance)}
                </p>
              </div>
              <Image
                src="/icons/Paypass.svg"
                alt="paypass"
                width={25}
                height={25}
              />
            </div>

            {/* name */}
            <div className=" flex justify-between max-w-[180px] w-full">
              <h2 className="text-white text-sm">{userName}</h2>
              <p className="text-white text-sm">●●/●●</p>
            </div>

            {/* card number and logo */}
            <div className="flex justify-between items-center">
              <h3 className="text-white text-sm">
                ●●●● ●●●● ●●●● <span>1234</span>
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
    </div>
  );
};

export default Card;
