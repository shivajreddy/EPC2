import { Separator } from "@/components/ui/separator"

function NexusThemes() {
  return (
    <div className="nexus-update-post">

      <div >
        <p className="text-4xl">Typography</p>
        <br /> <Separator /> <br />
        <div className="flex justify-around">
          <div>
            <p className="text-4xl font-sans">Sans</p>
            <p className="text-4xl font-serif">Serif</p>
            <p className="text-4xl font-mono">Mono</p>
          </div>
          <div>
            <p className="text-4xl font-thin">Font-Thin</p>
            <p className="text-4xl font-light">Font-Light</p>
            <p className="text-4xl font-normal">Font-Normal</p>
            <p className="text-4xl font-bold">Font-Bold</p>
            <p className="text-4xl font-extrabold">Font-ExtraBold</p>
            <p className="text-4xl font-black">Font-Black</p>
          </div>
          <div>
            <p className="text-sm">text-small</p>
            <p className="text-md">text-medium</p>
            <p className="text-lg">text-large</p>
            <p className="text-xl">text-xl</p>
            <p className="text-2xl">text-2xl</p>
            <p className="text-3xl">text-3xl</p>
            <p className="text-4xl">text-4xl</p>
            <p className="text-5xl">text-5xl</p>
            <p className="text-6xl">text-6xl</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          <p className="text-4xl">Color</p>
          <br /> <Separator /> <br />
        </div>
        <div>
          <p className="text-4xl">Accents</p>
          <br /> <Separator /> <br />
        </div>
      </div>

    </div >
  )
}

export default NexusThemes