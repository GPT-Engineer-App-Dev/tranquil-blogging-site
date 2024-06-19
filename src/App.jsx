import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;