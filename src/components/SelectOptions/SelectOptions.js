import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { Options } from "../../services/productsService";

const customStyles = {
    indicatorSeparator: (provided) => ({
      display: 'none',
    }),
    input: (provided) => ({
      margin: 0,
    }),
    container: (provided, state) => ({
      ...provided,
      /* height: 40, */
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#ccc',
      height: 40,
    })
}



const SelectOptions = ({className, name, field, form, placeholder}) => {
        const [options, setOptions] = useState([])

    useEffect(() => {
      handleOptions(className);
    }, [])
    
    const onChange = (option) => {
        form.setFieldValue(field.name, option.value)
    }
    
    const handleOptions= async (className) => {
        
        let data = [];
        let newData = [];
        if (className === "categories") {
            const res = await Options('categories');

            for (let i = 0; i < res.length; i++) {
                newData.push({id: res[i].id, value: res[i].id, label: res[i].name});            
            }

        } else if (className === "brands") {
            const res = await Options('brands');        
            data = res;

        } else if (className === "colors" ) {
           const res = await Options('colors');           
           data = res;

        } else if (className === "using-statuses") {
            const res = await Options('using-statuses');            
            data = res;

        } else {
            console.log("Yanlış yer.")
        }

        for (let i = 0; i < data.length; i++) {
            newData.push({id: data[i].id, value: data[i].name, label: data[i].name});            
        }

        setOptions(newData);
        
    }
              
      return (
        <>
          <Select
              className={className}
              name={field.name}          
              onChange={onChange}
              placeholder={placeholder}
              options={options}  
              styles={customStyles}
          />      
        </>
      )
}


export default SelectOptions