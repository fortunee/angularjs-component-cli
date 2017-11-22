// function shouldUseYarn() {
//     try {
//       execSync('yarnpkg --version', { stdio: 'ignore' });
//       return true;
//     } catch (e) {
//       return false;
//     }
//   }
  
//   const installPackages = () => {
//     console.log(chalk.white.bold('Installing Packages'));
//     return new Promise((resolve, reject) => {
//       let command;
//       let args = ['install'];
  
//       if (shouldUseYarn()) {
//         command = 'yarn';
//       } else {
//         command = 'npm';
//       }
  
//       const child = spawn(command, args, { stdio: 'inherit' });
//       child.on('close', code => {
//         if (code !== 0) {
//           reject({
//             command: `${command} ${args.join(' ')}`
//           });
//           return;
//         }
//         resolve();
//       })
//     })
//   }
  
//   const build = (appName) => {
//     cp('-r', __dirname + '/../src/.', appName);
//     console.log('----------------------------------------------------------');
//     figlet('angularjs-component-cli', function(err, data) {
//       if (err) {
//         return;
//       }
//       console.log(data);
//       console.log('----------------------------------------------------------');
//       console.log(chalk.white.bold('Welcome to angularjs-component-cli'));
//       console.log('----------------------------------------------------------');
//       cd(appName);
//       installPackages().then(() => {
//         console.log(chalk.white.bold('Let\'s get started'));
//         console.log(chalk.green('Step 1: cd into the newly created ' + appName + ' directory'));
//         console.log('----------------------------------------------------------');
//         // add your own custom messages here.
//         console.log('----------------------------------------------------------');
//       })
//       .catch(error => {
//         console.log(chalk.red('An unexpected error occurred'))
//         console.log(chalk.red(error));
//       });
//     });
//   }

  class AngularjsComponentCli {
    shouldUseYarn() {
        try {
            execSync('yarnpkg --version', { stdio: 'ignore' });
            return true;
          } catch (e) {
            return false;
          }
    }

    installPackages() {
        console.log(chalk.white.bold('Installing Packages'));
        return new Promise((resolve, reject) => {
          let command;
          let args = ['install'];
      
          if (this.shouldUseYarn()) {
            command = 'yarn';
          } else {
            command = 'npm';
          }
      
          const child = spawn(command, args, { stdio: 'inherit' });
          child.on('close', code => {
            if (code !== 0) {
              reject({
                command: `${command} ${args.join(' ')}`
              });
              return;
            }
            resolve();
          })
        })
    }

    build(appName) {
        cp('-r', __dirname + '/../src/.', appName);
        console.log('----------------------------------------------------------');
        figlet('angularjs-component-cli', function(err, data) {
          if (err) {
            return;
          }
          console.log(data);
          console.log('----------------------------------------------------------');
          console.log(chalk.white.bold('Welcome to angularjs-component-cli'));
          console.log('----------------------------------------------------------');
          cd(appName);
          this.installPackages().then(() => {
            console.log(chalk.white.bold('Let\'s get started'));
            console.log(chalk.green('Step 1: cd into the newly created ' + appName + ' directory'));
            console.log('----------------------------------------------------------');
            // add your own custom messages here.
            console.log('----------------------------------------------------------');
          })
          .catch(error => {
            console.log(chalk.red('An unexpected error occurred'))
            console.log(chalk.red(error));
          });
        });
    }
  }

  export default new AngularjsComponentCli;