import * as vscode from 'vscode';
import { setContext } from './context';
import ViewLoader from './webview/ViewLoader';

export function activate(context: vscode.ExtensionContext) {
  setContext(context);
  const disposable = vscode.commands.registerCommand('vscode-mat-palette.openPaletteGenerator', () => {
    new ViewLoader();
  });
  context.subscriptions.push(disposable);
}

export function deactivate() {}
