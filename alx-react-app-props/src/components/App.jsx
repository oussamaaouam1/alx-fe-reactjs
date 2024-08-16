import userContext from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <userContext.Provider value={userData}>
    <ProfilePage />
    </userContext.Provider>
    
  );
}

export default App;