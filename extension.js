// Creates a system status notification icon for pidgin

const StatusIconDispatcher = imports.ui.statusIconDispatcher;

function enable() {
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['hotot-gtk3'] = 'hotot-gtk3';
}

function disable() {
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['hotot-gtk3'] = '';
}

// gnome-shell extension entry point
function init(metadata) {
    //do nothing?..//
}
