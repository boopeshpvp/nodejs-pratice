// Scenrio 2: Node js : 

// Write a nodejs program to accept three values, first name and last name, and an action called "Save/Get", if the user enters Save, it should save the value into a file called "users.txt". 

// If the user enters details that are already present, display a error saying user already exists. 

// If the user uses the action called "Get", the the application should respond with a message stating "first name and last name user found in the file"

const fs = require('fs');
const readline = require('readline');


const readinput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const prompt = (query) => new Promise(resolve => readinput.question(query,resolve))

async function main(){

    const firstName = await prompt("Enter first name: ");
    const lastName = await prompt("Enter last name: ");
    const action = await prompt("'Enter action (Save/Get): ");

    const filePath = 'users.txt';
    const userEntry = `${firstName} ${lastName}`

    // console.log(userEntry)

    if(action === 'Save' || action === 'save'){

        let userList = [];
        if(fs.existsSync(filePath)){
            const fileContent = fs.readFileSync(filePath, 'utf8');
            userList = fileContent.split('\n').filter(user => user.trim() !== '')

        }

        if(userList.includes(userEntry)){
            console.log("Error: User Already Exists.!!!")

        }
        else{

            fs.appendFileSync(filePath, userEntry+ '\n')
            console.log("User Saved Successfully...")
        }
    }
    else if(action ==='Get' || action === 'get'){
        if(!fs.existsSync(filePath)){
            console.log("User not found in the file")
        }
        else{
            // fs.appendFileSync(filePath,userEntry + '\n')
            const fileContent = fs.readFileSync(filePath, 'utf8')
            const userList = fileContent.split('\n').filter(user => user.trim() !== '')
            if(userList.includes(userEntry)){
                console.log(`${firstName} ${lastName} user found in the file`)
            }
            else{
                console.log("User not found in the file")
            }
        }
    }
    else{
        console.log("Invalid action. Please enter 'Save' or 'Get' ")
    }


    readinput.close();
}

main();


