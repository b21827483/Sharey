import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import Subscription from "./pages/Subscription"
import MyFiles from "./pages/MyFiles"
import Upload from "./pages/Upload"
import Transactions from "./pages/Transactions"
import { SignIn } from "@clerk/clerk-react"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={
          <>
            <SignIn><Dashboard /></SignIn>
          </>
        } />
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-files" element={<MyFiles />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App