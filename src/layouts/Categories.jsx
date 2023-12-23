import React, { useEffect, useState } from 'react'
import CategoryService from '../services/categoryService';

export default function Categories() {

  const[categories, setCategories] = useState([]);
  useEffect(()=>{
    let categoryService = new CategoryService();
    categoryService.getCategories().then(result=>setCategories(result.data));
  })
  

  return (
    <nav>
        <div class="list-group">
          {
            categories.map(category => (
              <a key={category.id} href="#" class="list-group-item list-group-item-action">{category.category}</a>
            ))
          }
        </div>
    </nav>
  )
}
