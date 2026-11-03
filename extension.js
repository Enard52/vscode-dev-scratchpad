const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let scratchpadUri = null;

  // Command: Open Scratchpad
  const openCmd = vscode.commands.registerCommand('devScratchpad.open', async () => {
    const savedContent = context.globalState.get('scratchpad_content', '# Dev Scratchpad\n\n// Type or paste anything here. It persists across VS Code restarts.\n');
    
    // Create an in-memory document with markdown language
    const doc = await vscode.workspace.openTextDocument({
      language: 'markdown',
      content: savedContent,
    });

    scratchpadUri = doc.uri;
    await vscode.window.showTextDocument(doc, { preview: false });
  });

  // Command: Clear Scratchpad
  const clearCmd = vscode.commands.registerCommand('devScratchpad.clear', async () => {
    const answer = await vscode.window.showWarningMessage('Are you sure you want to clear your scratchpad?', 'Yes', 'Cancel');
    if (answer === 'Yes') {
      await context.globalState.update('scratchpad_content', '');
      vscode.window.showInformationMessage('Scratchpad cleared.');
    }
  });

  // Auto-save changes on document change
  const changeListener = vscode.workspace.onDidChangeTextDocument((event) => {
    if (scratchpadUri && event.document.uri.toString() === scratchpadUri.toString()) {
      context.globalState.update('scratchpad_content', event.document.getText());
    }
  });

  context.subscriptions.push(openCmd, clearCmd, changeListener);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
