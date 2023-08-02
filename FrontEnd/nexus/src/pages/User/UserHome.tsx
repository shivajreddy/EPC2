import MainLayout from "@/templates/MainLayout"
import { Button } from "@components/ui/button"
import {
  Card,
  CardContent,
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

import '@assets/pages/User/userhome.css'


function UserHome() {

  // Request for user details
  const defaultName = "John Doe"
  const defaultJobTitle = "Eagle employee"
  const defaultEmail = "jdoe@eagleofva.com"

  return (

    <MainLayout>
      <div className="user-page">
        <div className="user-page-header flex items-baseline ml-8">
          <p className="font-extrabold text-6xl">{defaultName},</p>
          <p className="font-bold text-4xl pl-4"> {defaultJobTitle}</p>
        </div>

        <div className="user-page-container">

          <Card className="w-[400px] mx-4">
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" defaultValue={defaultName} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="job-title">Title</Label>
                  <Input id="job-title" type="text" defaultValue={defaultJobTitle} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Title</Label>
                  <Input id="email" type="email" defaultValue={defaultEmail} />
                </div>
              </div>
            </CardContent>
          </Card>


          <Card className="w-[400px] mx-4">
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
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


    </MainLayout>
  )
}

export default UserHome