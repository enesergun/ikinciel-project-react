import * as yup from 'yup';

export const AddProductSchema = yup.object().shape({    
    name: yup
    .string()
    .max(100, 'Ürün ismi en fazla 100 karakter olmalıdır.')    
    .required('Ürün ismi zorunludur.'),
    
    description: yup
    .string()        
    .max(500, 'En fazla 500 karakterden oluşan açıklama yazılabilir.')
    .required('Açıklama yapmak zorundasınız.'),

    category: yup
    .string()
    .required('Kategori seçmek zorundasınız.'),
    
    color: yup
    .string()
    .required('Renk Seçmek Zorundasınız.'),

    condition: yup
    .string()
    .required('Kullanım durumunu belirtmek zorundasınız'),

    price: yup
    .number()
    .required('Zorunlu alan.')
    
});