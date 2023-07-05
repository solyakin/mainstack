import Header from "./components/Header";
import Overview from "./components/Overview";
import SideBar from "./components/SideBar";
import './App.css'

export default function Example() {


  return (
    <div data-testid="app-1">
      <SideBar />
      <main className="py-4 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <Header />
          <Overview />
        </div>
      </main>
    </div>
  )
}
