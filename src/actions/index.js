const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regexname = RegExp(/^[A-Za-z]{3,30}$/);
const regexpass = RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()]).{8,}");

const valUser = (pdata) => {
    if (pdata.FName && pdata.LName && pdata.Email && pdata.PassWord && pdata.CPassword) {
        if (!regexname.test(pdata.FName) || !regexname.test(pdata.LName)) {
            alert("Name chould contain a minimum of 3 characters and should constain only alphabets");
        }
        else {
            console.log(`fname ${!regexname.test(pdata.FName)} lanme ${!regexname.test(pdata.LName)}`);
            console.log('pass passed');
            if (!regForEmail.test(pdata.Email)) {
                alert("Enter valid email")
            }
            else {
                if (!regexpass.test(pdata.PassWord)) {
                    alert("Password should must have atlesr 8 characters be Alphanumeric and contain 1 uppercase & 1 lowercase with a special char");
                }
                else {
                    if (pdata.PassWord == pdata.CPassword) {
                        const user = {
                            "email": pdata.Email,
                            "password": pdata.PassWord,
                            "name": `${pdata.FName} ${pdata.LName}`
                        };
                        return { type: "VAL", payload: user };
                    }
                    else {
                        alert("Password and confirm password must be same")
                    }
                }
            }

        }

    }
    else {
        alert("All Fields Are Necessary");

    }
    return { type: "ERR" }

}
export default valUser;
