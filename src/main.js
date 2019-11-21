import 'jquery.terminal/css/jquery.terminal.min.css';

var $ = require('jquery');
require('jquery.terminal');


$.get('https://unpkg.com/emoji-datasource').then(function(list) {
    $.terminal.emoji(list);
});

function printColor(text, color, term) {
    term.echo(text, {
        finalize: function (div) {
            div.css("color", color);
        }
    });
}


var helpMessage = "VITOR MARCELINO | DEVOPS/BACKEND DEVELOPER \n \
\n \
.%%..%%.%%%%%%.%%%%%%..%%%%..%%%%%..\n \
.%%..%%...%%.....%%...%%..%%.%%..%%.\n \
.%%..%%...%%.....%%...%%..%%.%%%%%..\n \
..%%%%....%%.....%%...%%..%%.%%..%%.\n \
...%%...%%%%%%...%%....%%%%..%%..%%.\n \
....................................\n \
    \n \
    Options: \n \
    h, help : for list commands  \n \
    s, skills : display my technology skills\n \
    e, experience : display my experiences\n \
    c, contact : display my contacts\n \
";

$('body').terminal(function (command) {
    if (command == 'help' || command == 'h') {
        this.echo(helpMessage);
    } else

        if (command == 'skills' || command == 's') {
            printColor("##### DevOps #####", 'green', this);
            this.echo("Docker/Docker Compose");
            this.echo("CircleCi");
            this.echo("Varnish");
            this.echo("Ansible");
            this.echo("Nginx");
            this.echo("Apache");
            this.echo("Git");
            this.echo("Prometheus");
            this.echo("Grafana");
            this.echo("Sentry");
            this.echo("Datadog");
            this.echo("NewRelic");
            this.echo("Kafka");
            this.echo("Deepstream");
            this.echo("Jenkins");

            printColor("##### Dev #####", 'green', this);
            this.echo("JavaScript/Node.js");
            this.echo("PHP");
            this.echo("Shell Script");
            this.echo("Java");
            this.echo("Python");

            printColor("##### Frontend #####", 'green', this);
            this.echo("React");
            this.echo("Webpack");
            this.echo("Bootstrap");
            this.echo("Gulp");
            this.echo("Jquery");

            printColor("##### Database #####", 'green', this);
            this.echo("MySQL/MariaDB");
            this.echo("RethinkDB");
            this.echo("Redis");

            printColor("##### Package Manager #####", 'green', this);
            this.echo("Composer");
            this.echo("Npm/Yarn");

            printColor("##### Open Sources Softwares #####", 'green', this);
            this.echo("Laravel");
            this.echo("Typo3 CMS");
            this.echo("Magento Ecommerce");
            this.echo("Wordpress CMS");
            this.echo("WooCommerce");
            this.echo("Moodle LMS");

            printColor("##### Mobile #####", 'green', this);
            this.echo("React Native");
            this.echo("Ionic");

            printColor("##### Others #####", 'green', this);
            this.echo("English");
            this.echo("Webpack");
            this.echo("Google Analytics");
            this.echo("GraphQL");

            printColor("##### SO #####", 'green', this);
            this.echo("Linux");
            this.echo("MacOS");
            this.echo("Windows");
        } else

            if (command == 'experience' || command == 'e') {
                printColor("Convergence Works", '#602693', this);
                this.echo("Backend Developer with emphasis on development of news portals using Typo3 CMS. Projects:");
                this.echo("Correio24horas (https://www.correio24horas.com.br)");
                this.echo("TNH1 (https://www.tnh1.com.br)");
                this.echo("Eleições 2018 (http://eleicoes.correio24horas.com.br/)");
                this.echo("SBP (http://sbp.com.br)");
                this.echo("AMIB (http://amib.org.br)\n");

                printColor("Start Interativa", '#2196F3', this);
                this.echo("Systems developer like Start Post and Events for social network management and events control");
                printColor("##### UFBA #####", 'green', this);
                this.echo("Developer of the first plugin of the Federal University of Bahia for the Moodle platform, where students can learn to program within the Moodle environment");
            } else

                if (command == 'contact' || command == 'c') {
                    printColor("##### Vitor Marcelino Contacts #####", 'green', this);
                    this.echo("GitHub: https://github.com/vitormarcelino");
                    this.echo("Email: vitormarcelino93@gmail.com");
                    this.echo("Phone: +5575991270468\n");

                    printColor("##### Social Networks #####", 'green', this);
                    this.echo("LinkedIn: https://www.linkedin.com/in/vitor-marcelino-06b32872/");
                    this.echo("Facebook: https://www.facebook.com/marcelinoVitor");
                    this.echo("Instagram: http://instagram.com/marcelinovitor\n");

                    this.echo("Salvador, BA - Brazil");
                } else

                    if (command == 'pwd') {
                        this.echo("vitormarcelino.com.br");
                    }

                    else {
                        this.echo(command + " not found, type help to more information");
                    }
}, {
        prompt: 'guest@vitormarcelino $ ', greetings: helpMessage
    });