import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main, { useProductsStore } from "./pages/Main";
import Carpet from "./pages/Carpet";
import Error from "./pages/Error";
import { Toaster } from "react-hot-toast";
import { useEffect, useLayoutEffect } from "react";
import { StorageServices } from "./services/StorageServices/StorageServices";
import { read, utils } from "xlsx";


function App() {
  const setProducts = useProductsStore((state) => state.setProducts)
  useLayoutEffect(() => {
    const readFile = async () => {
      try {
        const link = await StorageServices.getExel("gs://amour-fleurs-ar.appspot.com/CarpetsTemplate2.xlsx")
        const workbook = read(link,{type:'binary'});
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        setProducts(utils.sheet_to_json(worksheet));
      } catch (error) {
        console.error('Error reading file:', error);
      }
    };

    readFile();
  }, []);
  return (
    <BrowserRouter>
      <Toaster />
      <div className="App">
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/carpet/:id" element={<Carpet />}/>
              <Route path="/*" element={<Error />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
