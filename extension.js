const vscode = require('vscode');

// Ye function tab call hota hai jab extension activate hota hai
function activate(context) {
    console.log('Congratulations, your extension "girdhar-extension" is now active!');

    // Command Register Karein
    let disposable = vscode.commands.registerCommand('girdhar-extension.helloWorld', function () {
        // Ye message show karega jab command run hogi
        vscode.window.showInformationMessage('Hello World from Girdhar Extension!');
    });

    // Command ko context mein add karein
    context.subscriptions.push(disposable);
}

// Ye function tab call hota hai jab extension deactivate hota hai
function deactivate() {
    console.log('Your extension "girdhar-extension" is now deactivated.');
}

// Export karein activate aur deactivate functions
module.exports = {
    activate,
    deactivate
};