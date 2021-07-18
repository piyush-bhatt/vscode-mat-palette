import * as vscode from 'vscode';

const statusBarIcon: vscode.StatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1000);

const createStatusBarItem = () => {
  statusBarIcon.text = 'Material Palette';
  statusBarIcon.command = 'vscode-mat-palette.openPaletteGenerator';
  statusBarIcon.show();
};

export default createStatusBarItem;
