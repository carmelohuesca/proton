(function() {
    'use strict';
    /**
     * Crea un hash de un string
     * @return {number}
     */
    String.prototype.hashCode = function() {
        var hash = 0,
            i = 0,
            len = this.length;
        while (i < len) {
            hash = ((hash << 5) - hash + this.charCodeAt(i++)) << 0;
        }
        return hash;
    };

    /**
     * Convierte la primera letra en mayúscula
     * @return {string}
     */
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    /**
     * Converte en camelCase
     * @return {string}
     */
    String.prototype.camelize = function() {
        return this
            .replace(/\s(\w)/ig, function(all, letter) {
                return letter.toUpperCase();
            })
            .replace(/(^\w)/, function($1) {
                return $1.toLowerCase();
            });
    };

    /**
     * Separa en guiones un texto en camelCase
     * @return {string}
     */
    String.prototype.dasherize = function() {
        return this
            .trim()
            .replace(/([A-Z])/g, '-$1')
            .replace(/[-_\s]+/g, '-')
            .toLowerCase();
    };

    /**
     * Crea espacios cuando encuentra una mayuscula o un underscore
     * @return {string}
     */
    String.prototype.spaced = function() {
        return this
            .trim()
            .replace(/([A-Z])/g, ' $1')
            .replace(/[-_\s]+/g, ' ')
            .toLowerCase();
    };

    /**
     * Escapa caracteres especiales de un string de HTML
     * @return {string}
     */
    String.prototype.escapeHTML = function() {
        return this
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };

})();