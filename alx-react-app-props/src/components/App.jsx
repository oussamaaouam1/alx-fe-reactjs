import userContext from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;