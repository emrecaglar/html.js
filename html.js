var html = (function(){
    function setClassAttribute(element, key, value){
        if(typeof value == 'object' && value instanceof Array){
            element.className = value.join(' ');
        }else {
            element.className = value;
        }
    }

    function setStyleAttribute(element,key, value){
        if(typeof value == 'object'){
            for(var key in value){
                element.style.cssText += key+':'+value[key]+';';
            }
        }else {
            element.cssText = value;
        }
    }

    function setDefaultAttribute(element, key, value){
        element.setAttribute(key, value);
    }

    function setAttributes(element, attributes){
        for(var key in attributes){
            switch(key){
                case 'class':
                    setClassAttribute(element,key, attributes[key]);
                    break;
                case 'style':
                    setStyleAttribute(element, key, attributes[key]);
                    break;
                default:
                    setDefaultAttribute(element, key, attributes[key]);
                    break;
            }
        }
    }

    function elementParameterHandler(element, args){
        if(args.length == 1){
            var type = typeof args[0];

            if(type == 'object' && args[0] instanceof Function){
                
                    element.innerHTML = args[0]();
            }
             else if(type =='string'){
                    element.innerHTML = args[0];
             }
              else{
                    setAttributes(element, args[0]);
            }
        }else{
            var startIndex = 1;

            if(typeof args[0] == 'object'){
                setAttributes(element, args[0]);
            }else{
                startIndex = 0;
            }

            
            for(var i = startIndex;i<args.length;i++){
                var type = typeof args[i];

                if(type == 'object'){
                    
                        element.appendChild(args[i]);
                }
                 else if(type == 'string'){
                        element.innerHTML += args[i];
                }
            }
        }
    }

    function Div(){
        var element = document.createElement('div');

        var args = arguments;

        elementParameterHandler(element, args);

        return element;
    }

    function P(){
        var element = document.createElement('p');

        var args = arguments;

        elementParameterHandler(element, args);

        return element;
    }

    function Strong(){
        var element = document.createElement('strong');

        var args = arguments;

        elementParameterHandler(element, args);

        return element;
    }

    return {
        Div: Div,
        P:P,
        Strong: Strong
    }
})();
