import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"

const App = () => {
  return (
    <div>
      <div className="h-[300vh] w-full bg-[url(./assets/fond1.jpg)] bg-[rgba(0,0,0,0.2)] bg-blend-darken  bg-cover bg-fixed bg-center">
        <Page1/>
        <Page2/>
      </div>
    </div>
  )
}

export default App


