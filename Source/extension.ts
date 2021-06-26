import * as vscode from "vscode";

function wish(): string {
	const currentTime = new Date().getHours();

	if(currentTime > 5 && currentTime < 12) return "Good Morning";
	else if(currentTime >= 12 && currentTime < 17) return "Good Afternoon";
	else return "Good Evening";
}

export function activate() {
	vscode.window.showInformationMessage(wish());
}