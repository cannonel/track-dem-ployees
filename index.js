const db = require('./db/connection');

// Start server after DB connection
db.connect(err => {
    if (err) throw err;

    console.log('Database connected.');
    
  promptUser()
  });

   //add inquirer prompts
   function promptUser() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'directory',
          message: 'What would you like to do?',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add department',
            'Add role',
            'Add employee',
            'Update employee role',
            'Exit',
          ],
        },
      ])
      .then((response) => {
        if (response.directory === 'View all departments') {
          viewDeps();
        } else if (response.directory === 'View all roles') {
          viewRoles();
        } else if (response.directory === 'View all employees') {
          viewEmps();
        } else if (response.directory === 'Add department') {
          addDep();
        } else if (response.directory === 'Add role') {
          addRole();
        } else if (response.directory === 'Add employee') {
          addEmp();
        } else if (response.directory === 'Update employee role') {
          updateRole();
        } else if (response.directory === 'Exit') {
          exit();
        }
      });
   }
//inquirer prompt functions
   //view all departments
function viewDeps(){
};
//view all roles
function viewRoles(){
};
//veiw all employee
function  viewEmps(){
};
//add a department
function addDep(){
};
// add a role
function addRole(){
};
// add an employee
function  addEmp(){
};
//update an existing role
function updateRole(){
};
//stop inquirer
function exit(){
};
