import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"

export default function LoginButton({isRounded = false}: {isRounded?: boolean}) {
    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <Button className={`text-md w-full ${isRounded ? 'rounded-md' : 'rounded-none'}`} variant={"accent"}>Login/Signup</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-2">Customer Portal</DialogTitle>
                </DialogHeader>
                <div className="max-w-87.5 mx-auto w-full flex flex-col">
                    <Button asChild variant={"accent"} className="text-lg font-medium mb-7">
                        <a href="https://app2.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=507391" target="_blank" rel="noopener noreferrer">Customer Login</a>
                    </Button>
                    <p className="text-center font-bold text-lg pb-2 pt-3 border-t border-black/10">Need an Account?</p>
                    <Button asChild variant="secondary" className="text-lg font-medium mb-4">
                        <a href="https://app.jackrabbitclass.com/regv2.asp?id=507391" target="_blank" rel="noopener noreferrer">Create Account</a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
