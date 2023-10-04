import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main, { useProductsStore } from "./pages/Main";
import Carpet from "./pages/Carpet";
import Error from "./pages/Error";
import { Toaster } from "react-hot-toast";
import { useEffect, useLayoutEffect, useState } from "react";
import { StorageServices } from "./services/StorageServices/StorageServices";
import { read, utils } from "xlsx";


function App() {
  const setProducts = useProductsStore((state) => state.setProducts)
  const products = useProductsStore((state) => state.products)
  const [load, setload] = useState(true)
  useLayoutEffect(() => {
    const readFile = async () => {
      try {
        setload(true)
        const link = await StorageServices.getExel("gs://amour-fleurs-ar.appspot.com/CarpetsTemplate3.xlsx")
        const workbook = read(link,{type:'binary'});
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const prd = utils.sheet_to_json(worksheet)?.map((el) => {
          const url = StorageServices.getImage(el?.Изображение)
          return ({...el,Изображение: url})
        })
        setProducts(prd);
        setload(false)
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
              <Route path="/" element={<Main load={load} setload={setload} />}/>
              <Route path="/carpet/:id" element={<Carpet />}/>
              <Route path="/*" element={<Error />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
