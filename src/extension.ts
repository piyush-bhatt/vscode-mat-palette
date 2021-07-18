import * as vscode from 'vscode';
import { setContext } from './context';
import { createStatusBarItem } from './statusBar';
import { ViewLoader } from './webview';

export function activate(context: vscode.ExtensionContext) {
  setContext(context);
  createStatusBarItem();
  const disposable = vscode.commands.registerCommand('vscode-mat-palette.openPaletteGenerator', () => {
    new ViewLoader();
  });
  context.subscriptions.push(disposable);
}

export function deactivate() {}
