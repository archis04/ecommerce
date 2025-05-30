import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  // useLocation,
  // useNavigate,
  // useSearchParams,
} from "react-router-dom";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function MenuItems(){
   return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
       <Link
       className="text-sm font-medium cursor-pointer"
       key={menuItem.id}
       to={menuItem.path}
       >{menuItem.label}</Link>
      ))}
    </nav>
  );
}

function HeaderRightContent(){
  return(
  <div className="flex lg:items-center lg:flex-row flex-col gap-4">
     <Button
          // onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          // className="relative"
        >
          <ShoppingCart className="w-6 h-6" />
          {/* <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
            {cartItems?.items?.length || 0}
          </span> */}
          <span className="sr-only">User cart</span>
        </Button>
        <DropdownMenu>
           <Avatar className="bg-black">
            <AvatarFallback className="bg-black text-white font-extrabold">
              SM
            </AvatarFallback>
          </Avatar>
        </DropdownMenu>
  </div>
  )
}

function Shoppingheader() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
     <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <HousePlug className="h-6 w-6" />
          <span className="font-bold">Ecommerce</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
           <SheetContent side="left" className="w-full max-w-xs">
            <MenuItems/>
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems/>
        </div>
        {
            isAuthenticated?<div>
              <HeaderRightContent />
            </div>:null
          }
          </div>
          </header>
  )
}

export default Shoppingheader