
function printColor(text, color, term) {
    term.echo(text, {
        finalize: function(div) {
            div.css("color", color);
        }
    });
}


var helpMessage = "VITOR MARCELINO | BACKEND DEVELOPER \n \
\n \
.%%..%%.%%%%%%.%%%%%%..%%%%..%%%%%.........%%...%%..%%%%..%%%%%...%%%%..%%%%%%.%%.....%%%%%%.%%..%%..%%%%..\n \
.%%..%%...%%.....%%...%%..%%.%%..%%........%%%.%%%.%%..%%.%%..%%.%%..%%.%%.....%%.......%%...%%%.%%.%%..%%.\n \
.%%..%%...%%.....%%...%%..%%.%%%%%.........%%.%.%%.%%%%%%.%%%%%..%%.....%%%%...%%.......%%...%%.%%%.%%..%%.\n \
..%%%%....%%.....%%...%%..%%.%%..%%........%%...%%.%%..%%.%%..%%.%%..%%.%%.....%%.......%%...%%..%%.%%..%%.\n \
...%%...%%%%%%...%%....%%%%..%%..%%........%%...%%.%%..%%.%%..%%..%%%%..%%%%%%.%%%%%%.%%%%%%.%%..%%..%%%%..\n \
...........................................................................................................\n \
    \n \
    Options: \n \
    h or help : for list commands  \n \
    s or skills : display my technology skills\n \
    e or experience : display my experiences\n \
    c or contact : display my contacts\n \
";

$('body').terminal(function(command, term) {
    if (command == 'help' || command == 'h') {
        this.echo(helpMessage);
    }
    
    if (command == 'skills' || command == 's') {
        printColor("SO and Containers", 'green', this);
        this.echo("Linux          * * * * -");
        this.echo("Docker         * * * * -");
        
        printColor("Version Control", 'green', this);
        this.echo("Git            * * * * -");
        
        printColor("Language", 'green', this);
        this.echo("PHP            * * * * -");
        this.echo("JavaScript     * * * * -");
        this.echo("Shell Script   * * * * -");
        this.echo("Python         * * * - -");
        this.echo("C/C++          * * * - -");

        printColor("Database", 'green', this);
        this.echo("MySQL          * * * * -");
        
        printColor("Package Manager", 'green', this);
        this.echo("Composer       * * * * -");
        this.echo("Npm/Yarn       * * * * -");
        
        printColor("Open Sources CMS and LMS", 'green', this);
        this.echo("Typo3 CMS      * * * * -");
        this.echo("Moodle LMS     * * * * -");
        this.echo("Wordpress CMS  * * * * -");
        
        printColor("DevOps", 'green', this);
        this.echo("CircleCi       * * * * -");
        this.echo("Jenkins        * * * - -");
        this.echo("Apache         * * * * -");
        this.echo("Nginx          * * * - -");
        this.echo("Prometheus     * * * * -");
        this.echo("Grafana        * * * * -");
        this.echo("Bind DNS       * * - - -");
        
        printColor("Mobile", 'green', this);
        this.echo("React Native   * * - - -");
        
        printColor("Others", 'green', this);
        this.echo("English        * * * * -");
        this.echo("Node.js        * * * - -");
        this.echo("GraphQL        * * - - -");
    }
    
    if (command == 'experience' || command == 'e') {
        printColor("Convergence Works", 'purple', this);
        this.echo("Backend Developer with emphasis on development of news portals using typo3");
        printColor("Start Interativa", 'blue', this);
        this.echo("Systems developer like Start Post and Events for social network management and events control");
        printColor("UFBA", 'green', this);
        this.echo("Developer of the first plugin of the Federal University of Bahia for the Moodle platform, where students can learn to program within the Moodle environment");
    }
    
    if (command == 'contact' || command == 'c') {
        printColor("Vitor Marcelino Contacts", 'yellow', this);
        this.echo("GitHub: https://github.com/vitormarcelino");
        this.echo("Email: vitormarcelino93@gmail.com");
        this.echo("Phone: +5575991270468");
        this.echo("Location: Salvador, BA - Brazil");

    }
}, { prompt: '$ ', greetings: helpMessage
});