'use strict';

let ApplicationRepository = (function() {

    let content = {};

    let Repository = function(splits, create, context) {
        let result = context || content;
        for(let i = 0, s; result && (s = splits[i]); i++) {
            result = (s in result ? result[s] : (create ? result[s] = {} : undefined));
        }
        return result;
    };

    return {
        set: function(name, value, context) {
            let splits = name.split('.'), s = splits.pop(), result = Repository(splits, true, context);
            return result && s ? (result[s] = value) : undefined;
        },
        get: function(name, create, context) {
            if (!name) {
                return null;
            }

            return Repository(name.split('.'), create, context);
        },
        exists: function(name, context) {
            return this.get(name, false, context) !== undefined;
        }
    };

})();

module.exports = ApplicationRepository;