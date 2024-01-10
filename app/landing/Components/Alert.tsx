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
  
export default function Alert({action} : any){
    return (
        <AlertDialog>
          <AlertDialogTrigger 
            className="md:border flex items-center gap-5 bg-white text-black font-bold border-1 p-4 px-[2.5rem] hover:bg-transparent hover:text-white rounded-lg max-md:px-[2rem]">
              {
                (action === "Github")?
                  <BsGithub className="max-md:text-3xl text-2xl"/>
                :
                  <BsLinkedin className="max-md:text-3xl text-2xl"/>
              }
              {action}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>🔍 Explore {action}?</AlertDialogTitle>
              <AlertDialogDescription>
                This action Redirects you to {action}.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              {/* <Link target="_blank" href={(action === "Github")?"https://github.com/Harish-M-2003":"linkedin"}>
                  
                  <AlertDialogAction>{action}</AlertDialogAction>
              </Link> */}
                  
                  <AlertDialogAction>
                      <Link target="_blank" href={(action === "Github")?"https://github.com/Harish-M-2003":"linkedin"}>
                            {action}
                      </Link>
                  </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
          </AlertDialog>

    );
}