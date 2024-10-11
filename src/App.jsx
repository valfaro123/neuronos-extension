import { MessageBox } from "./components/MessageBox"

function App() {

  return (
    <div className="bg-slate-900 w-96 h-full box-border py-5 ">
      <header className="w-full px-5">
        <h1 className="text-purple-100 text-2xl font-medium">Messages</h1>
      </header>
      <MessageBox/>
    </div>
  )
}

export default App
