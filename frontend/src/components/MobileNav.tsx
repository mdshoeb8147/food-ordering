import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
const MobileNav = () => {
//   return (
// <Sheet>
// <SheetTrigger>
//     <Menu className="text-orange-500"/>
// </SheetTrigger>
// <SheetContent>
//     <SheetTitle>
//         <span>Welcome to Eats.com</span>
//     </SheetTitle>
//     <Separator/>
//     <SheetDescription className="flex">
// <Button className="flex-1 font-bold bg-orange-500 ">Log In</Button>
//     </SheetDescription>
// </SheetContent>
// </Sheet>
// )

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
         <span>Welcome to Eats.com!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
        <Button className="flex-1 font-bold bg-orange-500 ">Log In</Button>

        </SheetDescription>
      </SheetContent>
    </Sheet>
  );

}
export default MobileNav