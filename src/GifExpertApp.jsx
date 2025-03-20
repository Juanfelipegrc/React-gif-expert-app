import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {


    const [categories, setCategories] = useState([])


    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

  return (
    <>
        <div className={categories.length === 0? "main-container-without-scroll" : "main-container"}>
          <h1>GifExpertApp</h1>

      
          <AddCategory onNewCategory={onAddCategory}/>

          {
            categories.length === 0?
            <div className="container-no-gifs">
              <p style={{fontSize: '1.2rem'}}>Search any gif</p>
            </div>
            :
            categories.map(category => (
              <GifGrid key={category} category={category}/>
            ))
          }
          
        </div>

        

    </>
  )
}
