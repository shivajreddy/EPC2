import ThemeToggleSwitch from "./ThemeToggleSwitch";


function App() {


  return (
    <>
      <p className="color-primary">lab2</p>
      <p className="bg-skin-fill">lab2</p>
      <p>hi</p>
      <p className="text-slate-700">hi</p>
      <div className={`flex h-screen w-screen items-center justify-center bg-bgColor text-textColor`}>
        <div className="rounded-md bg-bgColor p-8 text-textColor">
          <ThemeToggleSwitch />
        </div>
      </div>
    </>
  )
}

export default App
