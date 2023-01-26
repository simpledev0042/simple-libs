# Simple Libs

## - Install
```
npm install simple-libs
```

## - Learn More

### Create Object
```
const Lib = require("simple-libs")
```

### 1. String

#### - remove special chars in string

```
Lib.String.removeSpecialChars("ABCD1234:'\\//_")
```
```
ABCD1234_
```

### 2. Email

#### - InBlue

https://help.sendinblue.com/hc/en-us/articles/209467485-Create-or-delete-an-API-key

##### Send email via InBlue

```
const mail = new Lib.Email.InBlue("Your Api Key")
mail.sendMail(
    "sender@gmail.com", 
    "sender name", 
    ["receiver@gmail.com"],
    "Test subject",
    "email text content",
    "<div style='text-align:center'><h3>email html content</h3><label>Hello every one</label></div>"
)
```
