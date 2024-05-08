import * as Yup from 'yup';
export const EmployeeDetailsSchema=Yup.object({
    employeeId:Yup.number().required("Employee Id Is Required").min(0,"Employee Id Can't Be Negative")
})