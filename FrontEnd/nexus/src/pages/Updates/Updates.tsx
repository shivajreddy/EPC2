import { Separator } from "@/components/ui/separator"
import MainLayout from "@/templates/MainLayout"
import NexusThemes from "./NexusThemes"

function Updates() {
  return (
    <MainLayout>
      <div className="updates-page-container m-4">

        <p className="text-4xl">Nexus updates</p>
        <br /> <Separator /> <br />
        <NexusThemes />

      </div>
    </MainLayout>
  )
}

export default Updates