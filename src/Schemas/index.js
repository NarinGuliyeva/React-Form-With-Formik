import * as yup from "yup"
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/

export const basicSchema = yup.object().shape({
email: yup.string().email("Please enter your email address in format: yourname@example.com").required("Email required"),
age: yup.number().positive("Please enter positive numbers").integer("Please enter your age as integer number"),
password: yup.string().min(5,"Password should have at least 5 character").matches(passwordRules,{message:"Password should have at least 1 uppercase letter , 1 lowercase letter and 1 number" }).required("Password required"),
confirmPassword:yup.string().oneOf([yup.ref("password")], "Passwords are not matching"   ).required("Confirm password required")
})

export const advanceSchema = yup.object().shape( {
username:yup.string().min(3, "Username should have at least 3 character").required(),
university:yup.string().oneOf(["Cambridge" , "Oxford" ,"ICL" ,"Birmingham"], "Please select your university"  ).required("Please select the university"),
isAccepted:yup.boolean().oneOf([true], "Please accept the agreement" )
// oneOf-da array içindeki elementlerden her hansi biri secilmediyi zaman xeta mesaji alinir.
} )