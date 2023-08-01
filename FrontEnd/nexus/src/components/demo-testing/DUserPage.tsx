import "./DUserPage.css"
import { Button } from "@components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function DUserPage() {

  // Request for user details
  const defaultName = "John Doe"
  const defaultJobTitle = "Eagle employee"


  return (
    <div className="user-page m-10">
      <div className="user-page-header flex items-end ml-8">
        {/* <p className="font-bold text-4xl  ">Hello</p> */}
        <p className="font-extrabold text-6xl">{defaultName}</p>
        <p className="font-bold text-4xl">, {defaultJobTitle}</p>
      </div>

      <div className="user-page-container flex justify-center border-2 rounded-lg py-16">

        <Card className="w-[400px] mx-4">
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
            {/* <CardDescription>Your Nexus account details</CardDescription> */}
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={defaultName} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="job-title">Title</Label>
                <Input id="job-title" value={defaultJobTitle} />
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="w-[400px] mx-4">
          <CardHeader>
            <CardTitle>Preferances</CardTitle>
            {/* <CardDescription>Your Nexus preferances</CardDescription> */}
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Theme</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Light</SelectItem>
                    <SelectItem value="astro">Warm</SelectItem>
                    <SelectItem value="nuxt">Dark</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Update</Button>
              </div>
            </div>
          </CardContent>
        </Card>


        <Avatar className="w-60 h-60">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

      </div>
    </div>
  )
}

export default DUserPage
