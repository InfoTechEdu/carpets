import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main, { useProductsStore, useCategoriesStore } from "./pages/Main";
import Carpet from "./pages/Carpet";
import Error from "./pages/Error";
import { Toaster } from "react-hot-toast";
import { useEffect, useLayoutEffect, useState } from "react";
import { StorageServices } from "./services/StorageServices/StorageServices";
import { read, utils } from "xlsx";


function App() {
  const setProducts = useProductsStore((state) => state.setProducts)
  const setCategories = useCategoriesStore((state) => state.setCategories)
  const products = useProductsStore((state) => state.products)
  const [load, setload] = useState(true)
  useLayoutEffect(() => {
    const readFile = async () => {
      try {
        setload(true)
        const link = await StorageServices.getExel("gs://amour-fleurs-ar.appspot.com/CarpetsTemplate_2.xlsx")
        if (link) {
          const workbook = read(link,{type:'binary'});
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const prd = utils.sheet_to_json(worksheet)?.map((el) => {
          const url = StorageServices.getImage(el?.Изображение)
          return ({...el,Изображение: url})
        })
        setProducts(prd);

        const categoriesList = workbook.SheetNames.map((sheetName) => ({
          categoryru: sheetName, // Используем имя листа в качестве названия категории
          slug: sheetName, // Используем имя листа в качестве slug
        }));
        setCategories(categoriesList);

        }
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
              <Route path="/" element={<Main load={load} setload={setload}/>}/>
              <Route path="/carpet/:id" element={<Carpet />}/>
              <Route path="/*" element={<Error />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;