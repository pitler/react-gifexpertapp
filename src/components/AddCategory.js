import React, { useState } from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInoutChange = (e) => {

        //console.log(e.target.value);
        setInputValue(e.target.value);

    };

    const handleSubmit = (e => {

        e.preventDefault();
        // console.log(e);
        if(inputValue.trim() !== "")
        {
            setCategorias( categorias => [inputValue, ...categorias,  ]);
            //Si 
            // setCategorias( categorias => [inputValue, ...categorias,  ]);
            setInputValue('');
        }
        

    });

    //Con el form agrupo todo por eso no se usa <> ni </>
    return (
      
            <form onSubmit={handleSubmit}> 
                <input 
                    type="text"
                    value={ inputValue } 
                    onChange = { handleInoutChange}
                />
            </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
    //otra: PropTypes.number
}
