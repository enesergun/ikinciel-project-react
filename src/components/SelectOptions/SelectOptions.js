import React from 'react';
import Select from 'react-select';

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



const SelectOptions = ({className, name, options, field, form, placeholder}) => {
    const onChange = (option) => {
        form.setFieldValue(field.name, option.value)
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