'use strict';

var postcss = require('postcss');
var selectorParser = require('postcss-selector-parser');

var  conditionalGroupRules = ['media','supports','document'];

module.exports = scopify

function scopify(scope, options) {

    options = options || {};

    // special case for the '&' selector, resolves to scope
    var processor = selectorParser(function (selectors) {
        var hasNestingSelector = false;
        selectors.walkNesting(function (selector) {
            hasNestingSelector = true;
            selector.replaceWith(
                selectorParser.string({value: scope})
            );
        });
        if (!hasNestingSelector) {
            selectors.first.prepend(
                selectorParser.string({value: scope + ' '})
            );
        }
    });

    return function(root) {

        // guard statment-allow only valid scopes
        if(!isValidScope(scope)){
            throw root.error('invalid scope', { plugin: 'postcss-scopify' });
        }

        root.walkRules(function (rule) {

            // skip scoping of special rules (certain At-rules, nested, etc')
            if(!isRuleScopable(rule)){
                return rule;
            }

            rule.selectors = rule.selectors.map(function(selector) {
                if (isScopeApplied(selector,scope)) {
                    return selector;
                }

                return processor.processSync(selector);

            });
        });
    };
}

/**
 * Determine if selector is already scoped
 *
 * @param {string} selector
 * @param {string} scope
 */
function isScopeApplied(selector,scope) {
    var selectorTopScope = selector.split(" ",1)[0];
    return selectorTopScope === scope;
}

/**
 * Determine if scope is valid
 *
 * @param {string} scope
 */
function isValidScope(scope) {
    if (scope){
        return scope.indexOf(',') ===  -1;
    }
    else{
        return false;
    }

}

/**
 * Determine if rule should be scoped
 *
 * @param {rule} rule
 */
function isRuleScopable(rule){

    if(rule.parent.type !== 'root') {
        if (rule.parent.type === 'atrule' && conditionalGroupRules.indexOf(rule.parent.name) > -1){
            return true;
        }
        else {
            return false;
        }
    }

    else {
        return  true;
    }

}

