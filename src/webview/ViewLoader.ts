import * as vscode from 'vscode';
import { getContext } from '../context';

export default class ViewLoader {
  private _panel: vscode.WebviewPanel | undefined;
  constructor() {
    this._panel = vscode.window.createWebviewPanel(
      'vscode-mat-palette',
      'Material Design Palette Generator',
      vscode.ViewColumn.Two,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      },
    );
    this._panel.onDidDispose(() => {
      this._panel = undefined;
    });
    this._panel.webview.html = getWebviewContent();
  }
}

const getStylesCss = () =>
  vscode.Uri.file(getContext().asAbsolutePath('assets/css/styles.css')).with({
    scheme: 'vscode-resource',
  });

const getMainCss = () =>
  vscode.Uri.file(getContext().asAbsolutePath('assets/css/main.css')).with({
    scheme: 'vscode-resource',
  });

const getMainJs = () =>
  vscode.Uri.file(getContext().asAbsolutePath('assets/js/main.js')).with({
    scheme: 'vscode-resource',
  });

const getExportJs = () =>
  vscode.Uri.file(getContext().asAbsolutePath('assets/js/export.js')).with({
    scheme: 'vscode-resource',
  });

const getWebviewContent = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons%7CRoboto+Mono">
  <link rel="stylesheet" href="${getMainCss()}">
  <link rel="stylesheet" href="${getStylesCss()}">
</head>

<body>
    <div class="palettes" id="root-container"></div>

    <dialog id="exportModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>JSON color palette</h3>
          <button class="close" type="reset"><i class="material-icons">highlight_off</i></button>
        </div>
        <div class="modal-text">
          <textarea name="exportedPalettes" onclick="this.select()" readonly id="jsonText"></textarea>
        </div>
      </div>
    </dialog>
    <script src="${getMainJs()}" defer></script>
    <script src="${getExportJs()}" defer></script>
    <script> </script>
  </body>
</html>`;
