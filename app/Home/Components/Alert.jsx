import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
// import {} from "react-icons/bi";
  
export default function Alert({action}){
    return (
        <AlertDialog>
          <AlertDialogTrigger 
            className="border flex items-center gap-5 bg-white text-black font-bold border-1 p-4 px-[2.5rem] hover:bg-transparent hover:text-white rounded-lg">
              {
                (action === "Github")?
                  <BsGithub className=" text-2xl"/>
                :
                  <BsLinkedin className=" text-2xl"/>
              }
              {action}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action Redirects you to github.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link href={(action === "Github")?"https://github.com/Harish-M-2003":"linkedin"}>
                  
                  <AlertDialogAction>{action}</AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
          </AlertDialog>

    );
}