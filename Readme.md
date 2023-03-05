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
Lib.String.removeSpecialChars("ABCD1234:'\\//_"); // ABCD1234_;
```

#### - validate email

```
Lib.String.isEmail('example@gmail.com'); // true
Lib.String.isEmail('example-gmail.com'); // false
```

#### - random string

```
Lib.String.random(32); // qbjtwnjjsjkresbkwaxyajoxcjbbvrad
```

```
Lib.String.random( 25, 
    Lib.String.RANDOM_STRING_LOWER | 
    Lib.String.RANDOM_STRING_UPPER | 
    Lib.String.RANDOM_STRING_DIGIT | 
    Lib.String.RANDOM_STRING_SPECIAL
); // zL]t!f<tH14l1>($]&Qd]c4Rs
```

```
Lib.String.random( 25, 
    Lib.String.RANDOM_STRING_LOWER | 
    Lib.String.RANDOM_STRING_UPPER
); // SmBonrGFTiUusBIKaKwVmycpG
```


### 2. Math

#### - round

```
Lib.Math.round(0.225, 2); // 0.25
```

### 3. Email

#### - InBlue

https://help.sendinblue.com/hc/en-us/articles/209467485-Create-or-delete-an-API-key

##### Send email via InBlue

```
const mail = new Lib.Email.InBlue("Your Api Key");
mail.sendMail(
    "sender@gmail.com", 
    "sender name", 
    ["receiver@gmail.com"],
    "Test subject",
    "email text content",
    "<div style='text-align:center'><h3>email html content</h3><label>Hello every one</label></div>"
);
```
