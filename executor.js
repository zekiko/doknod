const { exec } = require("child_process");

const executeBinFile = (namespaceParam) => {
    exec(`./deneme.sh ${namespaceParam}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

}

module.exports = { executeBinFile }; 

///home/k8s