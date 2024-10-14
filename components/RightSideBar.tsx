import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";
import Card from "./Card";
import { Section } from "lucide-react";

const RightSideBar = ({ user, banks }: RightSidebarProps) => {
  return (
    <aside className=" right-sidebar">
      <section className="flex flex-col pb-4 w-full">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span>{user.firstName[0]}</span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>

      <section className="banks ">
        <div className="flex w-full justify-between ">
          <h2 className="header-2 ">My Banks</h2>
          <Link href="/" className="flex gap-1">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>

        {/* Bank Cards */}
        <div>
          {banks?.length > 0 && (
            <div className="relative flex flex-col flex-1">
              <div className="relative z-10">
                <Card
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>

              <div>
                {banks[1] && (
                  <div>
                    <div className="absolute top-8 left-6 z-0 w-full">
                      <Card
                        key={banks[0].$id}
                        account={banks[0]}
                        userName={`${user.firstName} ${user.lastName}`}
                        showBalance={false}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
      </section>
    </aside>
  );
};

export default RightSideBar;
