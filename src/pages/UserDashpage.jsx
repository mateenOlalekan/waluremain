import Header from "../components/UserAdmin/Header";
import Sidebar from "../components/UserAdmin/Sidebar";
import Main from "../components/UserAdmin/Main";

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Top Header */}
      <Header />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <Sidebar/>
        </aside>
        

        {/* Main Section */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6">
          <Main />
        </main>
      </div>
    </div>
  );
}
