export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly PYTHON = new Tag('Python', '#F6BE00');
    static readonly JAVA = new Tag('Java', 'darkgreen');
    static readonly SPRING = new Tag('Spring', 'green');
    static readonly R = new Tag('R', 'darkblue');
    static readonly SQL = new Tag('SQL', 'orange');
    static readonly HTML = new Tag('HTML', 'brown');
    static readonly CSS = new Tag('CSS', 'grey');
    static readonly FASTAPI = new Tag('FastAPI', 'purple');
    static readonly ELASTICSEARCH = new Tag('Elasticsearch', 'lightgreen');
    
    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}