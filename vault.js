'use strict';
module.exports = function() {
    let _vault = {};
    
    function setValue(key, value) {
            _vault[key] = value;
  
    }

    function getValue(key) {
        if (!key){
            return null;
        }else if (!_vault.hasOwnProperty(key)){
            return null;
        }else{
            return _vault[key];
        }
    }

    return {
        setValue: setValue,
        getValue: getValue
    }
  
};