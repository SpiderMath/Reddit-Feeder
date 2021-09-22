import * as vscode from 'vscode';

// Method called when Extension activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "hello-world" is now active!');

	let disposable = vscode.commands.registerCommand('hello-world.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from !');
	});

	context.subscriptions.push(disposable);
}

// Method is called when the extension is deactivated
export function deactivate() {}
