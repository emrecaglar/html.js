var html = (function () {
    'use strict'
    function getVariableType(variable) {
        if (typeof variable == 'object') {
            if (variable instanceof Function) {
                return 'function';
            } else if (variable instanceof Array) {
                return 'array';
            } else if (variable instanceof HTMLElement) {
                return 'html'
            }

            return 'object';
        }

        return typeof variable;
    }

    function attributeSetter(attributeType) {
        var attributeHandlers = {
            'class': function (element, attribute, value) {
                var type = getVariableType(value);

                if (type == 'array') {
                    element.className = value.join(' ');
                } else {
                    element.className = value;
                }
            },
            'style': function (element, attribute, value) {
                var type = getVariableType(value);

                if (type == 'object') {
                    for (var key in value) {
                        element.style.cssText += key + ':' + value[key] + ';';
                    }
                } else {
                    element.cssText = value;
                }
            }
        };

        return attributeHandlers[attributeType] || function (element, attribute, value) {
            attribute != 'events' && element.setAttribute(attribute, value);
        }
    }

    function setAttributes(element, args) {
        if (args.length > 0) {
            var type = getVariableType(args[0]);

            if (type == 'object' && type != 'array') {
                var attributes = args[0];

                for (var key in attributes) {
                    attributeSetter(key)(element, key, attributes[key]);
                }
            }
        }
    }

    function setEvents(element, args) {
        if (args.length > 0) {
            var events = args[0]['events'];

            if (events) {
                for (var event in events) {
                    element.addEventListener(event, events[event]);
                }
            }
        }
    }

    function setContent(element, args) {
        if (args.length > 0) {
            var type = getVariableType(args[0]);

            var startindex = type == 'object' ? 1 : 0;

            args = getVariableType(args[startindex]) == 'array'
                ? args[startindex]
                : args;

            for (var i = startindex; i < args.length; i++) {
                var currentType = getVariableType(args[i]);

                switch (currentType) {
                    case 'html':
                        element.appendChild(args[i]);
                        break;
                    default:
                        element.innerHTML += args[i];
                        break;
                }
            }
        }
    }

    function generateElement(type, args) {
        var element = document.createElement(type);

        setAttributes(element, args);

        setContent(element, args);

        setEvents(element, args);

        return element;
    }

    return {
        Div: function () {
            return generateElement('div', arguments);
        },
        Paragraph: function () {
            return generateElement('p', arguments);
        },
        Strong: function () {
            return generateElement('strong', arguments);
        },
        Table: function () {
            return generateElement('table', arguments);
        },
        THead: function () {
            return generateElement('thead', arguments);
        },
        TBody: function () {
            return generateElement('tbody', arguments);
        },
        Tr: function () {
            return generateElement('tr', arguments);
        },
        Td: function () {
            return generateElement('td', arguments);
        },
        Th: function () {
            return generateElement('th', arguments);
        },
        IFrame: function () {
            return generateElement('iframe', arguments);
        },
        Ul: function () {
            return generateElement('ul', arguments);
        },
        Li: function () {
            return generateElement('li', arguments);
        },
        Anchor: function () {
            return generateElement('a', arguments);
        },
        Br: function () {
            return generateElement('br', arguments);
        },
        Hr: function () {
            return generateElement('hr', arguments);
        },
        Select: function () {
            return generateElement('select', arguments);
        },
        Option: function () {
            return generateElement('option', arguments);
        },
        Input: function () {
            return generateElement('input', arguments);
        },
        TextArea: function () {
            return generateElement('textarea', arguments);
        },
        Checkbox: function () {
            return generateElement('checkbox', arguments);
        },
        Address: function () {
            return generateElement('address', arguments);
        },
        Area: function () {
            return generateElement('area', arguments);
        },
        B: function () {
            return generateElement('b', arguments);
        },
        Aside: function () {
            return generateElement('aside', arguments);
        },
        Article: function () {
            return generateElement('article', arguments);
        },
        Audio: function () {
            return generateElement('audio', arguments);
        },
        Button: function () {
            return generateElement('button', arguments);
        },
        Caption: function () {
            return generateElement('caption', arguments);
        },
        Cite: function () {
            return generateElement('cite', arguments);
        },
        Code: function () {
            return generateElement('code', arguments);
        },
        Col: function () {
            return generateElement('col', arguments);
        },
        ColGroup: function () {
            return generateElement('colgroup', arguments);
        },
        Dd: function () {
            return generateElement('dd', arguments);
        },
        Del: function () {
            return generateElement('del', arguments);
        },
        Dl: function () {
            return generateElement('dl', arguments);
        },
        Dt: function () {
            return generateElement('dt', arguments);
        },
        Em: function () {
            return generateElement('em', arguments);
        },
        Fieldset: function () {
            return generateElement('fieldset', arguments);
        },
        Legend: function () {
            return generateElement('legend', arguments);
        },
        Form: function () {
            return generateElement('form', arguments);
        },
        H1: function () {
            return generateElement('h1', arguments);
        },
        H2: function () {
            return generateElement('h2', arguments);
        },
        H3: function () {
            return generateElement('h3', arguments);
        },
        H4: function () {
            return generateElement('h4', arguments);
        },
        H5: function () {
            return generateElement('h5', arguments);
        },
        H6: function () {
            return generateElement('h6', arguments);
        },
        Header: function () {
            return generateElement('header', arguments);
        },
        Footer: function () {
            return generateElement('fooeter', arguments);
        },
        I: function () {
            return generateElement('i', arguments);
        },
        Image: function () {
            return generateElement('img', arguments);
        },
        Label: function () {
            return generateElement('label', arguments);
        },
        Nav: function () {
            return generateElement('nav', arguments);
        },
        Pre: function () {
            return generateElement('pre', arguments);
        },
        Small: function () {
            return generateElement('small', arguments);
        },
        Video: function () {
            return generateElement('video', arguments);
        },
        Svg: function () {
            return generateElement('svg', arguments);
        },
        Span: function () {
            return generateElement('span', arguments);
        },
        OptionGroup: function () {
            return generateElement('optgroup', arguments);
        },
        OtherElement: function (elementType) {
            return generateElement(elementType, arguments);
        }
    }
})();
