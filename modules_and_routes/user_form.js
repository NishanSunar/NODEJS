const userform = (req, resp) => {
    resp.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form page</title>
</head>
<body>
     <form action="/submit" method="post">
        <input type="text" placeholder="Enter name" name="name" />
        <input type="text" placeholder="Enter email" name="email" />
        <button>Submit</button>
        </form>
</body>
</html>
`)
}
module.exports = userform;