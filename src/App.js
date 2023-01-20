import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import UserContents from "./Components/UserContents";
import UserProfile from "./Components/UserProfile";
import useUser from "./Hooks/userHook";

function App() {
  const [user] = useUser();
  // the user state from the context created
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <UserProfile />
        {/* when we don't have a user & there is an error 
        the userContent component would not be rendered */}
        {user ? <UserContents /> : ""}
      </main>
      <Footer />
    </>
    // I am open to corrections. Thank you!
  );
}

export default App;
