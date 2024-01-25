const CheckValidate = (email,password)=>{
    email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    if(!email) return "Invalid email";
    if(!password) return "Invalid password";
    return null;    
}
export default CheckValidate