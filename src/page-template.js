let generatePage = teamArr => {  
    let card = "";
    
    for(let i = 0; i < teamArr.length; i++) {
        let lastThing = teamArr[i].school || teamArr[i].gitHub || teamArr[i].office
        let objectKeys = Object.keys(teamArr[i])
        let lastAtt = objectKeys[4]
        let finalProp = lastAtt + ": " + lastThing

        if(lastAtt === undefined){
            finalProp = " ";
            console.log(finalProp);
           }else if(lastAtt === 'gitHub'){
             finalProp = (`GitHub : <a href = 'https://www.github.com/${teamArr[i].gitHub}'> ${teamArr[i].gitHub}</a>`);
             console.log(finalProp);
           }
           else{
             console.log(finalProp);
           
         }
        //makes the cards

        let {name, role, email, id,} = teamArr[i]
        card += 
        `
        <div class="card col" style="width: 18rem;">
        <div class="card-body card-header">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item"> ${finalProp}</li>
        </ul>
        </div>`;
        
    }
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <title> My Team Page</title>
    </head>
    
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    
        <main class="container">
            <div class="row">
             ${card}
            </div>
        </main>
    </body>
    </html>`; 
}
 


module.exports = generatePage;