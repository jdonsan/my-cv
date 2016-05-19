angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("src/app/template.html","<jds-drawer></jds-drawer>\r\n<jds-main>\r\n    <jds-toolbar></jds-toolbar>\r\n    <div ui-view></div>\r\n</jds-main>");
$templateCache.put("src/features/contact/template.html","<jds-jumbotron tittle=\"Contactos\"></jds-jumbotron>\r\n<jds-container>\r\n    <jds-loader resource=\"cc.contacts\">\r\n        <p>Si deseas saber más de mi y de mi trabajo, puedes encontrar más en los siguientes canales oficiales:</p>\r\n        <jds-list>\r\n            <jds-list-item ng-repeat=\"contact in cc.contacts\"\r\n                url=\"{{contact.url}}\"\r\n                image=\"{{contact.logo}}\"\r\n                title=\"{{contact.name}}\"\r\n                description=\"{{contact.description}}\">  \r\n            </jds-list-item>\r\n        </jds-list>\r\n    </jds-loader>\r\n</jds-container>");
$templateCache.put("src/features/home/template.html","<jds-jumbotron tittle=\"Bienvenido\"></jds-jumbotron>\r\n<jds-container>\r\n    <p>{{pc.profile.description}}</p>\r\n    <ul class=\"list\">\r\n        <li class=\"list-item\">\r\n            <a>\r\n                <div>\r\n                    <h3>Mi nombre</h3>\r\n                    <p>{{pc.profile.name}} {{pc.profile.surname}}</p>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        <li class=\"list-item\">\r\n            <a>\r\n                <div>\r\n                    <h3>Mi rol actual</h3>\r\n                    <p>{{pc.profile.rol}}</p>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        <li class=\"list-item\">\r\n            <a>\r\n                <div>\r\n                    <h3>Mi experiencia profesional</h3>\r\n                    <p>{{pc.profile.experience}} años</p>\r\n                </div>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</jds-container>");
$templateCache.put("src/features/jobs/template.html","<jds-jumbotron tittle=\"Experiencia\"></jds-jumbotron>\r\n<jds-container>\r\n    <p>Solo he trabajado en una única empresa. Sin embargo creo que mi experiencia es bastante diversa debido a que no he trabajado\r\n        siempre en el mismo proyecto. He trabajado en proyectos grandes, en proyectos pequeños, en proyectos de larga y corta duración.\r\n        Ayudando en las oficinas de los clientes o participando del día a día de la sede de mi empresa. He trabajado en proyectos Waterfall\r\n        y con metodologías ágiles. \r\n    </p>\r\n    <p>He trabajado con más de 100 profesionales de diferente edad, rol, profesionalidad y experiencia de los que\r\n        he aprendido y desaprendido mucho.\r\n    </p>\r\n    <jds-card ng-repeat=\"job in jc.jobs\">\r\n        <jds-card-media resource=\"{{job.urlLogo}}\"></jds-card-media>\r\n        \r\n        <jds-card-content\r\n            title=\"{{job.yearInit}} - {{job.yearEnd}}\"\r\n            subtitle=\"{{job.enterprise}}\"\r\n            detail=\"{{job.name}}\"\r\n            description=\"{{job.description}}\">\r\n        </jds-card-content> \r\n    </jds-card>\r\n</jds-container>");
$templateCache.put("src/features/skills/template.html","<jds-jumbotron tittle=\"Conocimientos\"></jds-jumbotron>\r\n<jds-container>\r\n    <p>\r\n        A lo largo de los años, he aprendido un elevado número de tecnologías gracias a la diversidad de proyectos en los que\r\n        he trabajado. Sin embargo, existe un grupo de tecnologías en el que me encuentro cómodo y puedo ayudar y ser productivo\r\n        en un corto periodo de tiempo. Son las siguientes:\r\n    </p>\r\n    <jds-card ng-repeat=\"skill in sc.skills\">\r\n        <jds-card-header \r\n            image=\"{{skill.logo}}\" \r\n            title=\"{{skill.name}}\" \r\n            subtitle=\"{{skill.yearsExperience}} años de experiencia\">\r\n        </jds-card-header>\r\n\r\n        <jds-card-media\r\n            progress=\"true\"\r\n            resource=\"{{skill.level}}\">\r\n        </jds-card-media>\r\n        \r\n        <jds-card-content\r\n            title=\"{{skill.type}}\"\r\n            subtitle=\"{{skill.category}}\"\r\n            description=\"{{skill.description}}\">\r\n        </jds-card-content>\r\n    </jds-card>\r\n</jds-container>");
$templateCache.put("src/features/study/template.html","<jds-jumbotron tittle=\"Estudios\"></jds-jumbotron>\r\n<jds-container>\r\n    <p>Me gusta mucho aprender cosas nuevas. Me apasionan las tecnologías de la información y me encuentro muymotivado con todo\r\n        aquello que tenga que ver con ordenadores. Por eso, siempre he intentado seguir formandome y no parar de mejorar\r\n        en mi día a día. Estos son los sitios en los que me he formado académicamente:\r\n    </p>\r\n    \r\n    <h3>Estudios oficiales</h3>\r\n    <jds-card ng-repeat=\"study in sc.studies\">\r\n        <jds-card-media resource=\"{{study.urlLogo}}\"></jds-card-media>\r\n        \r\n        <jds-card-content\r\n            title=\"{{study.yearInit}} - {{study.yearEnd}}\"\r\n            subtitle=\"{{study.name}}\"\r\n            detail=\"{{study.academy}}\"\r\n            description=\"{{study.description}}\">\r\n        </jds-card-content> \r\n    </jds-card>\r\n    \r\n    <h3>Otros cursos</h3>\r\n    <jds-card ng-repeat=\"course in sc.courses\">\r\n        <jds-card-media resource=\"{{course.urlLogo}}\"></jds-card-media>\r\n        \r\n        <jds-card-content\r\n            title=\"{{course.year}}\"\r\n            subtitle=\"{{course.name}}\"\r\n            detail=\"{{course.academy}}\"\r\n            description=\"{{course.description}}\">\r\n        </jds-card-content>\r\n    </jds-card>\r\n</jds-container>");
$templateCache.put("src/core/components/card/template.html","<div class=\"card\" ng-transclude=\"\"></div>");
$templateCache.put("src/core/components/card-content/template.html","<div class=\"card-content\">\r\n    <h3>{{$ctrl.title}}</h3>\r\n    <h4>{{$ctrl.subtitle}} <span ng-if=\"$ctrl.detail\">(<small>{{$ctrl.detail}}</small>)</span></h4>\r\n    <p>{{$ctrl.description}}</p>\r\n</div>");
$templateCache.put("src/core/components/card-header/template.html","<div class=\"card-header\">\r\n    <img ng-src=\"{{$ctrl.image}}\" alt=\"default\">\r\n    <div>\r\n        <h3>{{$ctrl.title}}</h3>\r\n        <h4>{{$ctrl.subtitle}}</h4>\r\n    </div>\r\n</div>");
$templateCache.put("src/core/components/card-media/template.html","<div class=\"card-media\">\r\n    <img ng-if=\"!$ctrl.progress\" ng-src={{$ctrl.resource}} alt=\"{{$ctrl.resource}}\">\r\n    <div ng-if=\"$ctrl.progress\" class=\"card-media-progress\">\r\n        <round-progress \r\n            max=\"100\" \r\n            current=\"$ctrl.resource\"\r\n            color=\"#45ccce\" \r\n            bgcolor=\"#eaeaea\" \r\n            radius=\"50\" \r\n            stroke=\"15\" \r\n            clockwise=\"true\"\r\n            responsive=\"true\" \r\n            duration=\"1250\" \r\n            animation=\"easeInOutQuart\" \r\n            animation-delay=\"0\">\r\n        </round-progress>\r\n    </div>\r\n</div>");
$templateCache.put("src/core/components/container/template.html","<div class=\"container\" ng-transclude=\"\"></div>");
$templateCache.put("src/core/components/drawer/template.html","<nav ng-class=\"[\'drawer\', {\'drawer-active\': dr.active}]\">\r\n    <header class=\"drawer-header\"></header>\r\n    <ul class=\"drawer-menu\">\r\n        <li ng-repeat=\"option in dr.options\">\r\n            <a ui-sref=\"{{option.link}}\" ng-click=\"dr.activeOption($index)\" ng-class=\"[\'drawer-option\', {\'drawer-option-active\':option.active}]\">\r\n                <i class=\"material-icons\">{{option.icon}}</i> {{option.text}}\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>");
$templateCache.put("src/core/components/jumbotron/template.html","<div class=\"jumbotron\">\r\n    <h2>{{$ctrl.tittle}}</h2>\r\n    <img src=\"/img/foto.jpg\" alt=\"Foto Perfil\">\r\n</div>");
$templateCache.put("src/core/components/list/template.html","<ul class=\"list\" ng-transclude=\"\"></ul>");
$templateCache.put("src/core/components/list-item/template.html","<li class=\"list-item\">\r\n    <a ng-href={{$ctrl.url}} target=\"_blank\">\r\n        <div class=\"list-item-media\">\r\n            <img ng-src={{$ctrl.image}} alt=\"$ctrl.title\">\r\n        </div>\r\n        <div class=\"list-item-content\">\r\n            <h3>{{$ctrl.title}}</h3>\r\n            <p>{{$ctrl.description}}</p>\r\n        </div>\r\n    </a>\r\n</li>");
$templateCache.put("src/core/components/loader/template.html","<div class=\"loader\" ng-if=\"!$ctrl.resource\">\r\n    <svg ng-if=\"$ctrl.show\" class=\"loader-spinner\" width=\"65px\" height=\"65px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\r\n   <circle class=\"loader-spinner-path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\r\n</svg>\r\n</div>\r\n\r\n<div ng-if=\"$ctrl.resource.length > 0\" ng-transclude=\"\">\r\n\r\n</div>\r\n\r\n<div ng-if=\"$ctrl.resource.length === 0\" ng-transclude=\"\">\r\n    <h1>No existen datos actualmente</h1>\r\n</div>");
$templateCache.put("src/core/components/main/template.html","<main class=\"main\" ng-transclude=\"\">\r\n\r\n</main>");
$templateCache.put("src/core/components/toolbar/template.html","<header class=\"toolbar\">\r\n    <div class=\"toolbar-menu\">\r\n        <button toggle-menu>\r\n            <i class=\"material-icons\">menu</i>\r\n        </button>\r\n    </div>\r\n    <div class=\"toolbar-title\">\r\n        <h1>José Antonio Dongil Sánchez</h1>\r\n    </div>\r\n</header>");}]);