import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = ( ) =>{


    // const categorias = ['One punch', 'Samurai X', 'Dragon Ball'];
    
    const [categorias, setCategorias] = useState(['Nirvana'])

    // const handleAdd = () => {

    //      setCategorias( [...categorias, 'Nuevo valor']);
    //     //  setCategorias( cats => [...cats, 'Nuevo valor']);
    // };
      return (
            <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias= {setCategorias}/>
            <hr/>
           
                <ol>
                    { categorias.map( category => (   
                
                        // <li key= {category}> {category}</li>
                        <GifGrid 
                            key = {category} 
                            category = { category} 
                        />
                    ))
                }
            </ol>
           </>
        );
}

