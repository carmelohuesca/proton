export class StringExtended {

    static hashCode(str: string): number {
        let hash = 0,
            i = 0,
            len = str.length;
        while (i < len) {
            // tslint:disable-next-line:no-bitwise
            hash = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
        }
        return hash;
    }

    static hash(str: string): number {
        return this.hashCode(str);
    }

    static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static camelize(str: string): string {
        return str
            .replace(/\s(\w)/ig, (all: string, letter: string) => {
                return letter.toUpperCase();
            })
            .replace(/(^\w)/, ($1: string) => {
                return $1.toLowerCase();
            });
    }

    static between(str: string, left: string, right: string) {
        const startPos = str.indexOf(left);
        const endPos = str.indexOf(right, startPos + left.length);
        return str.substring(startPos + left.length, endPos);
    }

    static dasherize(str: string): string {
        return str
            .trim()
            .replace(/([A-Z])/g, '-$1')
            .replace(/[-_\s]+/g, '-')
            .toLowerCase();
    }

    static spaced(str: string): string {
        return str
            .trim()
            .replace(/([A-Z])/g, ' $1')
            .replace(/[-_\s]+/g, ' ')
            .toLowerCase();
    }

    static escapeHTML(str: string): string {
        return str
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    static interpolate(...args: any[]): string {
        let str = args[0];
        if (args && Object.keys(args).length > 0) {
            for (let i = 0; i <= args.length; i++) {
                str = str.split('{' + i + '}').join(args[i + 1]);
            }
        }
        return str;
    }


}

