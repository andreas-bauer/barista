(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(1),n=a(6),o=(a(0),a(116)),i={id:"barista-on-docker",title:"Building and Running Barista using Docker",sidebar_label:"barista-on-docker"},s={id:"barista-on-docker",title:"Building and Running Barista using Docker",description:"While you are free to buid and run Barista on your own, we find it easiest to use docker images to manage the process.  Using [docker-compose](https://docs.docker.com/compose/), one can get a demo version of Barista up and running in a short time with very few customizations.",source:"@site/docs/barista-on-docker.md",permalink:"/barista/docs/barista-on-docker",sidebar_label:"barista-on-docker",sidebar:"someSidebar",previous:{title:"How To Develop a Web Feature",permalink:"/barista/docs/develop-web-feature"}},c=[],p={rightToc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While you are free to buid and run Barista on your own, we find it easiest to use docker images to manage the process.  Using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"docker-compose"),", one can get a demo version of Barista up and running in a short time with very few customizations.\nThe compose configuration will build the application with docker and  run the 5 major components with a single command."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Postgres Database - stores the state of the application."),Object(o.b)("li",{parentName:"ul"},"Redis Server - a queue and ephemeral store for inter-server communication."),Object(o.b)("li",{parentName:"ul"},"barista-web - A web server (nginx) that presents the application to the user's browser and also performs as a reverse proxy for the browser to transact with the API server."),Object(o.b)("li",{parentName:"ul"},"barista-api - The main processing to manage the state of the application and service the users."),Object(o.b)("li",{parentName:"ul"},"barista-scan - The engine that takes care of scanning, building, and evaluating the software under test.")),Object(o.b)("p",null,"While a deployment based on docker-compose is certainly viable for a small instance, it would be a very good idea to use a system like ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes")," to to manage and schedule the containers.  This gives the administrator finer grained control over things like secrets, resources, and monitoring.  We have built out templates for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.okd.io/"}),"Openshift OKD")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://helm.sh/"}),"Helm"),", contact the authors for more info."),Object(o.b)("h1",{id:"barista-source-build-and-deploy-files"},"Barista Source, Build, and Deploy files"),Object(o.b)("p",null,"This set of files are used to build the application with docker and to deploy the components via docker-compose.  There are a few steps necessary to build the image."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Download the code from github.\n",Object(o.b)("inlineCode",{parentName:"p"},"git clone https://github.com/optum/Barista.git"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ensure ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"docker")," is running on your workstation or server.  Docker version 19.0.3 or greater is preferred, but anything over 18 should work.  (but has not been tested)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Be aware that RHEL and CentOs and others may ship earlier versions of docker and not be viable"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ensure ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"docker-compose")," is installed")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Optional - skip this step unless you want to build from source")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run commands to replace some specific symlinks with actual files.  (only needed if you do not use the pre-built docker images)"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"cd barista;\nrm -fr barista-scan/src/{models,services,shared} &&\ncp -r barista-api/src/{models,services,shared} barista-scan/src;\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"check the settings in the file barista-compose.env .  Make modifications as necessary.  (Things like SMTP server, usernames and passwords for internal Git servers, personal access token for public github server if private repos are in play)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Start the program using docker-compose, wait about 3 minutes for initialization (or watch the logs), then seed with basic data if you wish.."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker-compose -d  up ;\nsleep 180 ;\ndocker-compose exec barista-api yarn db:reset:seed;\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'You can watch container logs using "docker logs" command, or use\n',Object(o.b)("inlineCode",{parentName:"p"},"docker-compose logs [component]"),"  (where component is one of barista-api, barista-scan, barista-web, database, redis)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Point your browser to ","[http://your_servername/signin]"," (default username is Admin, password is $barista@admin, all case sensitive)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Add a project and initiate a scan.  There should be some projects already defined under "Organization", and you can easily add more using the plus button.  (See the ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"overview"}),"documentation")," for more info)"))))}l.isMDXComponent=!0},116:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},b=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?n.a.createElement(m,s({ref:t},p,{components:a})):n.a.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);