const generatePage = data => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
    <h1>My Team</h1>
    </header>
    <main>
        <div class="manager">${data.filter(manager => {
        manager.getRole === 'Manager'
    })}</div>
        <div class="engineer"></div>
        <div class="intern"></div>
    </main>
</body>
</html>
    `
}

module.exports = generatePage;