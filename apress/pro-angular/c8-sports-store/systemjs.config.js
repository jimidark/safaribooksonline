(function(global) {
    var paths = {
        "rxjs": "node_modules/rxjs",
        "@angular": "node_modules/@angular"
    };
    var packages = {
        "app": {
            main: "main.js"
        },
        "rxjs": {
            main: "index.js"
        }
    };
    var angularModules = [
        "common", "compiler", "core", "platform-browser", "platform-browser-dynamic", "forms", "http", "router"
    ];
    angularModules.forEach(function(pkg) {
        packages["@angular/" + pkg] = {
            main: "bundles/" + pkg + ".umd.min.js"
        }
    });
    System.config({
        paths: paths,
        packages: packages
    })
})(this);