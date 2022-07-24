import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  SearchIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  UserIcon
} from '@heroicons/react/outline'

function Header() {
  return (
    <header className="w-full text-center flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="flex mx-auto flex-grow">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
        <HeaderItem title="COLLECTION" Icon={CollectionIcon}/>
        <HeaderItem title="SEARCH" Icon={SearchIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        className="object-contain m-0"
        width={200}
        height={100}
        alt="hulu-logo"
      />
    </header>
  );
}

export default Header;
