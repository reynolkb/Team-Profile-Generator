const generateManager = data => {
    var managerArray = data.filter(manager => {
        return manager.getRole() === 'Manager';
    });

    return `
                <div class="cell small-12 large-4 manager">
                    <div class="card">
                        <div class="card-divider">
                            <h2>${managerArray[0].getName()}</h2>
                            <h2><i class="fas fa-coffee"></i>${managerArray[0].getRole()}</h2>
                        </div>
                        <div class="card-section">
                            <ul>                            
                                <li>ID: ${managerArray[0].getId()}</li>
                                <li>Email: <a href="mailto:${managerArray[0].getEmail()}" target="_blank">${managerArray[0].getEmail()}</a></li>
                                <li>Office Number: ${managerArray[0].getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
}

const generateEngineer = data => {
    var engineerArray = data.filter(engineer => {
        return engineer.getRole() === 'Engineer';
    });

    var newEngineerArray = engineerArray.map(engineer => {
        return `
                <div class="cell small-12 large-4 engineer">
                    <div class="card">
                        <div class="card-divider">
                            <h2>${engineer.getName()}</h2>
                            <h2><i class="fas fa-glasses"></i>${engineer.getRole()}</h2>
                        </div>
                        <div class="card-section">
                            <ul>                            
                                <li>ID: ${engineer.getId()}</li>
                                <li>Email: <a href="mailto:${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></li>
                                <li>Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
    })
        .join('')

    return newEngineerArray;
}

const generateIntern = data => {
    var internArray = data.filter(intern => {
        return intern.getRole() === 'Intern';
    });

    var newInternArray = internArray.map(intern => {
        return `
                <div class="cell small-12 large-4 engineer">
                    <div class="card">
                        <div class="card-divider">
                            <h2>${intern.getName()}</h2>
                            <h2><i class="fas fa-user-graduate"></i>${intern.getRole()}</h2>
                        </div>
                        <div class="card-section">
                            <ul>                            
                                <li>ID: ${intern.getId()}</li>
                                <li>Email: <a href="mailto:${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></li>
                                <li>School: ${intern.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
    })
        .join('')

    return newInternArray;
}

const generatePage = data => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css" integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <div class="grid-container">
            <div class="grid-x grid-margin-x">            
                ${generateManager(data)}
                ${generateEngineer(data)}
                ${generateIntern(data)}
            </div>        
        </div>
    </main>
    <script src="https://use.fontawesome.com/releases/v5.14.0/js/all.js" data-auto-replace-svg="nest"></script>
</body>
</html>
    `
}

module.exports = generatePage;