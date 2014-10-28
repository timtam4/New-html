


define(function (require, exports, module) {
    "use strict";
    var commandName         = "newHtml";
    var Menus               = brackets.getModule("command/Menus"),
        CommandManager      = brackets.getModule("command/CommandManager"),
        EditorManager       = brackets.getModule("editor/EditorManager");
    
    var template
    /*
     * Implementation
     */
    function loadhtml() {
        template = require('text!html-template.html');
      EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
    }
    /*
     * Command
     */
CommandManager.register("New html", commandName, loadhtml); 
    /*
     * Custom menu
     */
var menu = Menus.addMenu("Html", "edgedocks.custom.menu" );  
 menu.addMenuItem(commandName)
});


