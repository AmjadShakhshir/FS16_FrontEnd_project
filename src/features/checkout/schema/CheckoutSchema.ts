import * as yup from 'yup';

export const CheckoutSchema = [
    yup.object().shape({
        billingAddress: yup.object().shape({
            firstName: yup.string().required('First name is required'),
            lastName: yup.string().required('Last name is required'),
            address1: yup.string().required('Address is required'),
            address2: yup.string(),
            city: yup.string().required('City is required'),
            state: yup.string().required('State is required'),
            zipCode: yup.string().required('Zip code is required'),
            country: yup.string().required('Country is required'),
        }),
        shipppingAddress: yup.object().shape({
            isSameAddress: yup.boolean(),
            firstName: yup.string().when('isSameAddress', {
                is: (isSameAddress: boolean) => isSameAddress === false,
                then: (firstNameSchema) => 
                firstNameSchema.required('First name is required'),
                otherwise: (firstNameSchema) => firstNameSchema.notRequired(),
            }),
            lastName: yup.string().when('isSameAddress', {
                is: (isSameAddress: boolean) => isSameAddress === false,
                then: (lastNameSchema) =>
                lastNameSchema.required('Last name is required'),
                otherwise: (lastNameSchema) => lastNameSchema.notRequired(),
            }),
            street1: yup.string().when('isSameAddress', {
                is: (isSameAddress: boolean) => isSameAddress === false,
                then: (address1Schema) =>
                address1Schema.required('Address is required'),
                otherwise: (address1Schema) => address1Schema.notRequired(),
            }),
            street2: yup.string().when('isSameAddress', {
                is: (isSameAddress: boolean) => isSameAddress === false,
                then: (address2Schema) => address2Schema.notRequired(),
            }),
            city: yup.string().when('isSameAddress', {
                is: (isSameAddress: boolean) => isSameAddress === false,
                then: (citySchema) => citySchema.required('City is required'),
                otherwise: (citySchema) => citySchema.notRequired(),
            }),
            state: yup.string().when('isSameAddress', {
                is: (isSameAddress: boolean) => isSameAddress === false,
                then: (stateSchema) => stateSchema.required('State is required'),
                otherwise: (stateSchema) => stateSchema.notRequired(),
            }),
            zipCode: yup.string().when('isSameAddress', {
                is: (isSameAddress: boolean) => isSameAddress === false,
                then: (zipSchema) => zipSchema.required('Zip code is required'),
                otherwise: (zipSchema) => zipSchema.notRequired(),
            }),
            country: yup.string().when('isSameAddress', {
                is: (isSameAddress: boolean) => isSameAddress === false,
                then: (countrySchema) => countrySchema.required('Country is required'),
                otherwise: (countrySchema) => countrySchema.notRequired(),
            }),
        }),
        email: yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: yup.string().required('Phone number is required'),
    }),  
]