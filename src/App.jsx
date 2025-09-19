import WeatherApp from "./WeatherApp"

function App() {
  console.log("DATA => ",import.meta.env.VITE_API_URL);
  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App