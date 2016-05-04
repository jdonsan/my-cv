angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("src/app/template.html","<jds-drawer></jds-drawer>\r\n<jds-main>\r\n    <jds-toolbar></jds-toolbar>\r\n    <jds-jumbotron></jds-jumbotron>\r\n    <div ui-view></div>\r\n</jds-main>");
$templateCache.put("src/features/home/template.html","<h1>Page Home</h1>");
$templateCache.put("src/features/jobs/template.html","<h1>Page jobs</h1>");
$templateCache.put("src/features/skills/template.html","<jds-container>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam earum, dignissimos eius fugiat numquam! Porro voluptates unde dolore omnis recusandae officiis, at atque dolorum enim, est esse. Accusamus, in, et!</p>\r\n    <jds-card ng-repeat=\"skill in sc.skills\">\r\n        <div class=\"card-media\"></div>\r\n        <div class=\"card-header\">\r\n            <h3>{{skill.name}}</h3>\r\n            <h4>Años de experiencia: {{skill.yearsExperience}}</h4>\r\n        </div>\r\n    </jds-card>\r\n</jds-container>");
$templateCache.put("src/core/components/card/template.html","<div class=\"card\" ng-transclude=\"\">\r\n    \r\n</div>");
$templateCache.put("src/core/components/container/template.html","<div class=\"container\" ng-transclude=\"\"></div>");
$templateCache.put("src/core/components/drawer/template.html","<nav class=\"drawer\">\r\n    <header class=\"drawer-header\"></header>\r\n    <ul class=\"drawer-menu\">\r\n        <li>\r\n            <a ui-sref=\"app.home\">\r\n                <i class=\"material-icons\">account_circle</i> Perfil\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a ui-sref=\"app.skills\">\r\n                <i class=\"material-icons\">vpn_key</i> Conocimientos\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a ui-sref=\"app.jobs\">\r\n                <i class=\"material-icons\">work</i> Trabajos\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a ui-sref=\"app.home\">\r\n                <i class=\"material-icons\">school</i> Estudios\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a ui-sref=\"app.jobs\">\r\n                <i class=\"material-icons\">rss_feed</i> Contacto\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>");
$templateCache.put("src/core/components/jumbotron/template.html","<div class=\"jumbotron\">\r\n    <h2>Bienvenido</h2>\r\n    <img src=\"/img/foto.jpg\" alt=\"Foto Perfil\">\r\n</div>");
$templateCache.put("src/core/components/main/template.html","<main class=\"main\" ng-transclude=\"\">\r\n\r\n</main>");
$templateCache.put("src/core/components/toolbar/template.html","<header class=\"toolbar\">\r\n    <div class=\"toolbar-menu\">\r\n        <button>\r\n            <i class=\"material-icons\">menu</i>\r\n        </button>\r\n    </div>\r\n    <div class=\"toolbar-title\">\r\n        <h1>José Antonio Dongil Sánchez</h1>\r\n    </div>\r\n</header>");}]);