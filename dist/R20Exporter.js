// ==UserScript==
// @name         Roll20 Campaign exporter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Export an entire Roll20 Campaign
// @author       KaKaRoTo
// @match        https://app.roll20.net/editor/
// @grant        none
// @require 	 https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js
// @require 	 https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.min.js
// @require 	 https://raw.githubusercontent.com/gildas-lormeau/zip.js/master/WebContent/zip.js
// @require 	 https://raw.githubusercontent.com/gildas-lormeau/zip.js/master/WebContent/zip-fs.js
// @require 	 https://raw.githubusercontent.com/gildas-lormeau/zip.js/master/WebContent/zip-ext.js
// @require 	 https://raw.githubusercontent.com/gildas-lormeau/zip.js/master/WebContent/deflate.js
// ==/UserScript==

window.saveAs = saveAs;
window.zip = zip;
(function(){
    "use strict";
    var ρσ_iterator_symbol = (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") ? Symbol.iterator : "iterator-Symbol-5d0927e5554349048cf0e3762a228256";
    var ρσ_kwargs_symbol = (typeof Symbol === "function") ? Symbol("kwargs-object") : "kwargs-object-Symbol-5d0927e5554349048cf0e3762a228256";
    var ρσ_cond_temp, ρσ_expr_temp, ρσ_last_exception;
    var ρσ_object_counter = 0;
var ρσ_len;
function ρσ_bool(val) {
    return !!val;
};
if (!ρσ_bool.__argnames__) Object.defineProperties(ρσ_bool, {
    __argnames__ : {value: ["val"]}
});

function ρσ_print() {
    var parts;
    if (typeof console === "object") {
        parts = [];
        for (var i = 0; i < arguments.length; i++) {
            parts.push(ρσ_str(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]));
        }
        console.log(parts.join(" "));
    }
};

function ρσ_int(val, base) {
    var ans;
    if (typeof val === "number") {
        ans = val | 0;
    } else {
        ans = parseInt(val, base || 10);
    }
    if (isNaN(ans)) {
        throw new ValueError("Invalid literal for int with base " + (base || 10) + ": " + val);
    }
    return ans;
};
if (!ρσ_int.__argnames__) Object.defineProperties(ρσ_int, {
    __argnames__ : {value: ["val", "base"]}
});

function ρσ_float(val) {
    var ans;
    if (typeof val === "number") {
        ans = val;
    } else {
        ans = parseFloat(val);
    }
    if (isNaN(ans)) {
        throw new ValueError("Could not convert string to float: " + arguments[0]);
    }
    return ans;
};
if (!ρσ_float.__argnames__) Object.defineProperties(ρσ_float, {
    __argnames__ : {value: ["val"]}
});

function ρσ_arraylike_creator() {
    var names;
    names = "Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
    if (typeof HTMLCollection === "function") {
        names = names.concat("HTMLCollection NodeList NamedNodeMap TouchList".split(" "));
    }
    return (function() {
        var ρσ_anonfunc = function (x) {
            if (Array.isArray(x) || typeof x === "string" || names.indexOf(Object.prototype.toString.call(x).slice(8, -1)) > -1) {
                return true;
            }
            return false;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["x"]}
        });
        return ρσ_anonfunc;
    })();
};

function options_object(f) {
    return function () {
        if (typeof arguments[arguments.length - 1] === "object") {
            arguments[ρσ_bound_index(arguments.length - 1, arguments)][ρσ_kwargs_symbol] = true;
        }
        return f.apply(this, arguments);
    };
};
if (!options_object.__argnames__) Object.defineProperties(options_object, {
    __argnames__ : {value: ["f"]}
});

function ρσ_id(x) {
    return x.ρσ_object_id;
};
if (!ρσ_id.__argnames__) Object.defineProperties(ρσ_id, {
    __argnames__ : {value: ["x"]}
});

function ρσ_dir(item) {
    var arr;
    arr = ρσ_list_decorate([]);
    for (var i in item) {
        arr.push(i);
    }
    return arr;
};
if (!ρσ_dir.__argnames__) Object.defineProperties(ρσ_dir, {
    __argnames__ : {value: ["item"]}
});

function ρσ_ord(x) {
    var ans, second;
    ans = x.charCodeAt(0);
    if (55296 <= ans && ans <= 56319) {
        second = x.charCodeAt(1);
        if (56320 <= second && second <= 57343) {
            return (ans - 55296) * 1024 + second - 56320 + 65536;
        }
        throw new TypeError("string is missing the low surrogate char");
    }
    return ans;
};
if (!ρσ_ord.__argnames__) Object.defineProperties(ρσ_ord, {
    __argnames__ : {value: ["x"]}
});

function ρσ_chr(code) {
    if (code <= 65535) {
        return String.fromCharCode(code);
    }
    code -= 65536;
    return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
};
if (!ρσ_chr.__argnames__) Object.defineProperties(ρσ_chr, {
    __argnames__ : {value: ["code"]}
});

function ρσ_callable(x) {
    return typeof x === "function";
};
if (!ρσ_callable.__argnames__) Object.defineProperties(ρσ_callable, {
    __argnames__ : {value: ["x"]}
});

function ρσ_bin(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(2);
    if (ans[0] === "-") {
        ans = "-" + "0b" + ans.slice(1);
    } else {
        ans = "0b" + ans;
    }
    return ans;
};
if (!ρσ_bin.__argnames__) Object.defineProperties(ρσ_bin, {
    __argnames__ : {value: ["x"]}
});

function ρσ_hex(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(16);
    if (ans[0] === "-") {
        ans = "-" + "0x" + ans.slice(1);
    } else {
        ans = "0x" + ans;
    }
    return ans;
};
if (!ρσ_hex.__argnames__) Object.defineProperties(ρσ_hex, {
    __argnames__ : {value: ["x"]}
});

function ρσ_enumerate(iterable) {
    var ans, iterator;
    ans = {"_i":-1};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    if (ρσ_arraylike(iterable)) {
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':[this._i, iterable[this._i]]};
            }
            return {'done':true};
        };
        return ans;
    }
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans["_iterator"] = iterator;
        ans["next"] = function () {
            var r;
            r = this._iterator.next();
            if (r.done) {
                return {'done':true};
            }
            this._i += 1;
            return {'done':false, 'value':[this._i, r.value]};
        };
        return ans;
    }
    return ρσ_enumerate(Object.keys(iterable));
};
if (!ρσ_enumerate.__argnames__) Object.defineProperties(ρσ_enumerate, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_reversed(iterable) {
    var ans;
    if (ρσ_arraylike(iterable)) {
        ans = {"_i": iterable.length};
        ans["next"] = function () {
            this._i -= 1;
            if (this._i > -1) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        return ans;
    }
    throw new TypeError("reversed() can only be called on arrays or strings");
};
if (!ρσ_reversed.__argnames__) Object.defineProperties(ρσ_reversed, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_iter(iterable) {
    var ans;
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        return (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
    }
    if (ρσ_arraylike(iterable)) {
        ans = {"_i":-1};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        return ans;
    }
    return ρσ_iter(Object.keys(iterable));
};
if (!ρσ_iter.__argnames__) Object.defineProperties(ρσ_iter, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_range_next(step, length) {
    var ρσ_unpack;
    this._i += step;
    this._idx += 1;
    if (this._idx >= length) {
        ρσ_unpack = [this.__i, -1];
        this._i = ρσ_unpack[0];
        this._idx = ρσ_unpack[1];
        return {'done':true};
    }
    return {'done':false, 'value':this._i};
};
if (!ρσ_range_next.__argnames__) Object.defineProperties(ρσ_range_next, {
    __argnames__ : {value: ["step", "length"]}
});

function ρσ_range(start, stop, step) {
    var length, ans;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    ans = {start:start, step:step, stop:stop};
    ans[ρσ_iterator_symbol] = function () {
        var it;
        it = {"_i": start - step, "_idx": -1};
        it.next = ρσ_range_next.bind(it, step, length);
        it[ρσ_iterator_symbol] = function () {
            return this;
        };
        return it;
    };
    ans.count = (function() {
        var ρσ_anonfunc = function (val) {
            if (!this._cached) {
                this._cached = list(this);
            }
            return this._cached.count(val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val"]}
        });
        return ρσ_anonfunc;
    })();
    ans.index = (function() {
        var ρσ_anonfunc = function (val) {
            if (!this._cached) {
                this._cached = list(this);
            }
            return this._cached.index(val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val"]}
        });
        return ρσ_anonfunc;
    })();
    if (typeof Proxy === "function") {
        ans = new Proxy(ans, (function(){
            var ρσ_d = {};
            ρσ_d["get"] = (function() {
                var ρσ_anonfunc = function (obj, prop) {
                    var iprop;
                    if (typeof prop === "string") {
                        iprop = parseInt(prop);
                        if (!isNaN(iprop)) {
                            prop = iprop;
                        }
                    }
                    if (typeof prop === "number") {
                        if (!obj._cached) {
                            obj._cached = list(obj);
                        }
                        return (ρσ_expr_temp = obj._cached)[(typeof prop === "number" && prop < 0) ? ρσ_expr_temp.length + prop : prop];
                    }
                    return obj[(typeof prop === "number" && prop < 0) ? obj.length + prop : prop];
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["obj", "prop"]}
                });
                return ρσ_anonfunc;
            })();
            return ρσ_d;
        }).call(this));
    }
    return ans;
};
if (!ρσ_range.__argnames__) Object.defineProperties(ρσ_range, {
    __argnames__ : {value: ["start", "stop", "step"]}
});

function ρσ_getattr(obj, name, defval) {
    var ret;
    try {
        ret = obj[(typeof name === "number" && name < 0) ? obj.length + name : name];
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            if (defval === undefined) {
                throw new AttributeError("The attribute " + name + " is not present");
            }
            return defval;
        } else {
            throw ρσ_Exception;
        }
    }
    if (ret === undefined && !(name in obj)) {
        if (defval === undefined) {
            throw new AttributeError("The attribute " + name + " is not present");
        }
        ret = defval;
    }
    return ret;
};
if (!ρσ_getattr.__argnames__) Object.defineProperties(ρσ_getattr, {
    __argnames__ : {value: ["obj", "name", "defval"]}
});

function ρσ_setattr(obj, name, value) {
    obj[(typeof name === "number" && name < 0) ? obj.length + name : name] = value;
};
if (!ρσ_setattr.__argnames__) Object.defineProperties(ρσ_setattr, {
    __argnames__ : {value: ["obj", "name", "value"]}
});

function ρσ_hasattr(obj, name) {
    return name in obj;
};
if (!ρσ_hasattr.__argnames__) Object.defineProperties(ρσ_hasattr, {
    __argnames__ : {value: ["obj", "name"]}
});

ρσ_len = function () {
    function len(obj) {
        if (ρσ_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        if (obj instanceof Set || obj instanceof Map) {
            return obj.size;
        }
        return Object.keys(obj).length;
    };
    if (!len.__argnames__) Object.defineProperties(len, {
        __argnames__ : {value: ["obj"]}
    });

    function len5(obj) {
        if (ρσ_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        return Object.keys(obj).length;
    };
    if (!len5.__argnames__) Object.defineProperties(len5, {
        __argnames__ : {value: ["obj"]}
    });

    return (typeof Set === "function" && typeof Map === "function") ? len : len5;
}();
function ρσ_get_module(name) {
    return ρσ_modules[(typeof name === "number" && name < 0) ? ρσ_modules.length + name : name];
};
if (!ρσ_get_module.__argnames__) Object.defineProperties(ρσ_get_module, {
    __argnames__ : {value: ["name"]}
});

function ρσ_pow(x, y, z) {
    var ans;
    ans = Math.pow(x, y);
    if (z !== undefined) {
        ans %= z;
    }
    return ans;
};
if (!ρσ_pow.__argnames__) Object.defineProperties(ρσ_pow, {
    __argnames__ : {value: ["x", "y", "z"]}
});

function ρσ_type(x) {
    return x.constructor;
};
if (!ρσ_type.__argnames__) Object.defineProperties(ρσ_type, {
    __argnames__ : {value: ["x"]}
});

function ρσ_divmod(x, y) {
    var d;
    if (y === 0) {
        throw new ZeroDivisionError("integer division or modulo by zero");
    }
    d = Math.floor(x / y);
    return [d, x - d * y];
};
if (!ρσ_divmod.__argnames__) Object.defineProperties(ρσ_divmod, {
    __argnames__ : {value: ["x", "y"]}
});

function ρσ_max() {
    var kwargs = arguments[arguments.length-1];
    if (kwargs === null || typeof kwargs !== "object" || kwargs [ρσ_kwargs_symbol] !== true) kwargs = {};
    var args = Array.prototype.slice.call(arguments, 0);
    if (kwargs !== null && typeof kwargs === "object" && kwargs [ρσ_kwargs_symbol] === true) args.pop();
    var args, x;
    if (args.length === 0) {
        if (kwargs.defval !== undefined) {
            return kwargs.defval;
        }
        throw new TypeError("expected at least one argument");
    }
    if (args.length === 1) {
        args = args[0];
    }
    if (kwargs.key) {
        args = (function() {
            var ρσ_Iter = ρσ_Iterable(args), ρσ_Result = [], x;
            for (var ρσ_Index = 0; ρσ_Index < ρσ_Iter.length; ρσ_Index++) {
                x = ρσ_Iter[ρσ_Index];
                ρσ_Result.push(kwargs.key(x));
            }
            ρσ_Result = ρσ_list_constructor(ρσ_Result);
            return ρσ_Result;
        })();
    }
    if (!Array.isArray(args)) {
        args = list(args);
    }
    if (args.length) {
        return this.apply(null, args);
    }
    if (kwargs.defval !== undefined) {
        return kwargs.defval;
    }
    throw new TypeError("expected at least one argument");
};
if (!ρσ_max.__handles_kwarg_interpolation__) Object.defineProperties(ρσ_max, {
    __handles_kwarg_interpolation__ : {value: true}
});

var abs = Math.abs, max = ρσ_max.bind(Math.max), min = ρσ_max.bind(Math.min), bool = ρσ_bool, type = ρσ_type;
var float = ρσ_float, int = ρσ_int, arraylike = ρσ_arraylike_creator(), ρσ_arraylike = arraylike;
var print = ρσ_print, id = ρσ_id, get_module = ρσ_get_module, pow = ρσ_pow, divmod = ρσ_divmod;
var dir = ρσ_dir, ord = ρσ_ord, chr = ρσ_chr, bin = ρσ_bin, hex = ρσ_hex, callable = ρσ_callable;
var enumerate = ρσ_enumerate, iter = ρσ_iter, reversed = ρσ_reversed, len = ρσ_len;
var range = ρσ_range, getattr = ρσ_getattr, setattr = ρσ_setattr, hasattr = ρσ_hasattr;function ρσ_equals(a, b) {
    var ρσ_unpack, akeys, bkeys, key;
    if (a === b) {
        return true;
    }
    if (a && typeof a.__eq__ === "function") {
        return a.__eq__(b);
    }
    if (b && typeof b.__eq__ === "function") {
        return b.__eq__(a);
    }
    if (ρσ_arraylike(a) && ρσ_arraylike(b)) {
        if ((a.length !== b.length && (typeof a.length !== "object" || ρσ_not_equals(a.length, b.length)))) {
            return false;
        }
        for (var i=0; i < a.length; i++) {
            if (!((a[(typeof i === "number" && i < 0) ? a.length + i : i] === b[(typeof i === "number" && i < 0) ? b.length + i : i] || typeof a[(typeof i === "number" && i < 0) ? a.length + i : i] === "object" && ρσ_equals(a[(typeof i === "number" && i < 0) ? a.length + i : i], b[(typeof i === "number" && i < 0) ? b.length + i : i])))) {
                return false;
            }
        }
        return true;
    }
    if (typeof a === "object" && typeof b === "object" && a !== null && b !== null && (a.constructor === Object && b.constructor === Object || Object.getPrototypeOf(a) === null && Object.getPrototypeOf(b) === null)) {
        ρσ_unpack = [Object.keys(a), Object.keys(b)];
        akeys = ρσ_unpack[0];
        bkeys = ρσ_unpack[1];
        if (akeys.length !== bkeys.length) {
            return false;
        }
        for (var j=0; j < akeys.length; j++) {
            key = akeys[(typeof j === "number" && j < 0) ? akeys.length + j : j];
            if (!((a[(typeof key === "number" && key < 0) ? a.length + key : key] === b[(typeof key === "number" && key < 0) ? b.length + key : key] || typeof a[(typeof key === "number" && key < 0) ? a.length + key : key] === "object" && ρσ_equals(a[(typeof key === "number" && key < 0) ? a.length + key : key], b[(typeof key === "number" && key < 0) ? b.length + key : key])))) {
                return false;
            }
        }
        return true;
    }
    return false;
};
if (!ρσ_equals.__argnames__) Object.defineProperties(ρσ_equals, {
    __argnames__ : {value: ["a", "b"]}
});

function ρσ_not_equals(a, b) {
    if (a === b) {
        return false;
    }
    if (a && typeof a.__ne__ === "function") {
        return a.__ne__(b);
    }
    if (b && typeof b.__ne__ === "function") {
        return b.__ne__(a);
    }
    return !ρσ_equals(a, b);
};
if (!ρσ_not_equals.__argnames__) Object.defineProperties(ρσ_not_equals, {
    __argnames__ : {value: ["a", "b"]}
});

var equals = ρσ_equals;
function ρσ_list_extend(iterable) {
    var start, iterator, result;
    if (Array.isArray(iterable) || typeof iterable === "string") {
        start = this.length;
        this.length += iterable.length;
        for (var i = 0; i < iterable.length; i++) {
            (ρσ_expr_temp = this)[ρσ_bound_index(start + i, ρσ_expr_temp)] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            this.push(result.value);
            result = iterator.next();
        }
    }
};
if (!ρσ_list_extend.__argnames__) Object.defineProperties(ρσ_list_extend, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_list_index(val, start, stop) {
    var idx;
    start = start || 0;
    if (start < 0) {
        start = this.length + start;
    }
    if (start < 0) {
        throw new ValueError(val + " is not in list");
    }
    if (stop === undefined) {
        idx = this.indexOf(val, start);
        if (idx === -1) {
            throw new ValueError(val + " is not in list");
        }
        return idx;
    }
    if (stop < 0) {
        stop = this.length + stop;
    }
    for (var i = start; i < stop; i++) {
        if (((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === val || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], val))) {
            return i;
        }
    }
    throw new ValueError(val + " is not in list");
};
if (!ρσ_list_index.__argnames__) Object.defineProperties(ρσ_list_index, {
    __argnames__ : {value: ["val", "start", "stop"]}
});

function ρσ_list_pop(index) {
    var ans;
    if (this.length === 0) {
        throw new IndexError("list is empty");
    }
    if (index === undefined) {
        index = -1;
    }
    ans = this.splice(index, 1);
    if (!ans.length) {
        throw new IndexError("pop index out of range");
    }
    return ans[0];
};
if (!ρσ_list_pop.__argnames__) Object.defineProperties(ρσ_list_pop, {
    __argnames__ : {value: ["index"]}
});

function ρσ_list_remove(value) {
    var idx;
    idx = this.indexOf(value);
    if (idx === -1) {
        throw new ValueError(value + " not in list");
    }
    this.splice(idx, 1);
};
if (!ρσ_list_remove.__argnames__) Object.defineProperties(ρσ_list_remove, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_to_string() {
    return "[" + this.join(", ") + "]";
};

function ρσ_list_insert(index, val) {
    if (index < 0) {
        index += this.length;
    }
    index = min(this.length, max(index, 0));
    if (index === 0) {
        this.unshift(val);
        return;
    }
    for (var i = this.length; i > index; i--) {
        (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = (ρσ_expr_temp = this)[ρσ_bound_index(i - 1, ρσ_expr_temp)];
    }
    (ρσ_expr_temp = this)[(typeof index === "number" && index < 0) ? ρσ_expr_temp.length + index : index] = val;
};
if (!ρσ_list_insert.__argnames__) Object.defineProperties(ρσ_list_insert, {
    __argnames__ : {value: ["index", "val"]}
});

function ρσ_list_copy() {
    return ρσ_list_constructor(this);
};

function ρσ_list_clear() {
    this.length = 0;
};

function ρσ_list_as_array() {
    return Array.prototype.slice.call(this);
};

function ρσ_list_count(value) {
    return this.reduce((function() {
        var ρσ_anonfunc = function (n, val) {
            return n + (val === value);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["n", "val"]}
        });
        return ρσ_anonfunc;
    })(), 0);
};
if (!ρσ_list_count.__argnames__) Object.defineProperties(ρσ_list_count, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_sort_key(value) {
    var t;
    t = typeof value;
    if (t === "string" || t === "number") {
        return value;
    }
    return value.toString();
};
if (!ρσ_list_sort_key.__argnames__) Object.defineProperties(ρσ_list_sort_key, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_sort_cmp(a, b, ap, bp) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return ap - bp;
};
if (!ρσ_list_sort_cmp.__argnames__) Object.defineProperties(ρσ_list_sort_cmp, {
    __argnames__ : {value: ["a", "b", "ap", "bp"]}
});

function ρσ_list_sort() {
    var key = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_list_sort.__defaults__.key : arguments[0];
    var reverse = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_list_sort.__defaults__.reverse : arguments[1];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "key")){
        key = ρσ_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "reverse")){
        reverse = ρσ_kwargs_obj.reverse;
    }
    var mult, keymap, posmap, k;
    key = key || ρσ_list_sort_key;
    mult = (reverse) ? -1 : 1;
    keymap = dict();
    posmap = dict();
    for (var i=0; i < this.length; i++) {
        k = (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        keymap.set(k, key(k));
        posmap.set(k, i);
    }
    this.sort((function() {
        var ρσ_anonfunc = function (a, b) {
            return mult * ρσ_list_sort_cmp(keymap.get(a), keymap.get(b), posmap.get(a), posmap.get(b));
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["a", "b"]}
        });
        return ρσ_anonfunc;
    })());
};
if (!ρσ_list_sort.__defaults__) Object.defineProperties(ρσ_list_sort, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["key", "reverse"]}
});

function ρσ_list_concat() {
    var ans;
    ans = Array.prototype.concat.apply(this, arguments);
    ρσ_list_decorate(ans);
    return ans;
};

function ρσ_list_slice() {
    var ans;
    ans = Array.prototype.slice.apply(this, arguments);
    ρσ_list_decorate(ans);
    return ans;
};

function ρσ_list_iterator(value) {
    var self;
    self = this;
    return (function(){
        var ρσ_d = {};
        ρσ_d["_i"] = -1;
        ρσ_d["_list"] = self;
        ρσ_d["next"] = function () {
            this._i += 1;
            if (this._i >= this._list.length) {
                return (function(){
                    var ρσ_d = {};
                    ρσ_d["done"] = true;
                    return ρσ_d;
                }).call(this);
            }
            return (function(){
                var ρσ_d = {};
                ρσ_d["done"] = false;
                ρσ_d["value"] = (ρσ_expr_temp = this._list)[ρσ_bound_index(this._i, ρσ_expr_temp)];
                return ρσ_d;
            }).call(this);
        };
        return ρσ_d;
    }).call(this);
};
if (!ρσ_list_iterator.__argnames__) Object.defineProperties(ρσ_list_iterator, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_len() {
    return this.length;
};

function ρσ_list_contains(val) {
    for (var i = 0; i < this.length; i++) {
        if (((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === val || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], val))) {
            return true;
        }
    }
    return false;
};
if (!ρσ_list_contains.__argnames__) Object.defineProperties(ρσ_list_contains, {
    __argnames__ : {value: ["val"]}
});

function ρσ_list_eq(other) {
    if (!ρσ_arraylike(other)) {
        return false;
    }
    if ((this.length !== other.length && (typeof this.length !== "object" || ρσ_not_equals(this.length, other.length)))) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (!(((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === other[(typeof i === "number" && i < 0) ? other.length + i : i] || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], other[(typeof i === "number" && i < 0) ? other.length + i : i])))) {
            return false;
        }
    }
    return true;
};
if (!ρσ_list_eq.__argnames__) Object.defineProperties(ρσ_list_eq, {
    __argnames__ : {value: ["other"]}
});

function ρσ_list_decorate(ans) {
    ans.append = Array.prototype.push;
    ans.toString = ρσ_list_to_string;
    ans.inspect = ρσ_list_to_string;
    ans.extend = ρσ_list_extend;
    ans.index = ρσ_list_index;
    ans.pypop = ρσ_list_pop;
    ans.remove = ρσ_list_remove;
    ans.insert = ρσ_list_insert;
    ans.copy = ρσ_list_copy;
    ans.clear = ρσ_list_clear;
    ans.count = ρσ_list_count;
    ans.concat = ρσ_list_concat;
    ans.pysort = ρσ_list_sort;
    ans.slice = ρσ_list_slice;
    ans.as_array = ρσ_list_as_array;
    ans.__len__ = ρσ_list_len;
    ans.__contains__ = ρσ_list_contains;
    ans.__eq__ = ρσ_list_eq;
    ans.constructor = ρσ_list_constructor;
    if (typeof ans[ρσ_iterator_symbol] !== "function") {
        ans[ρσ_iterator_symbol] = ρσ_list_iterator;
    }
    return ans;
};
if (!ρσ_list_decorate.__argnames__) Object.defineProperties(ρσ_list_decorate, {
    __argnames__ : {value: ["ans"]}
});

function ρσ_list_constructor(iterable) {
    var ans, iterator, result;
    if (iterable === undefined) {
        ans = [];
    } else if (ρσ_arraylike(iterable)) {
        ans = new Array(iterable.length);
        for (var i = 0; i < iterable.length; i++) {
            ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans = ρσ_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
    } else if (typeof iterable === "number") {
        ans = new Array(iterable);
    } else {
        ans = Object.keys(iterable);
    }
    return ρσ_list_decorate(ans);
};
if (!ρσ_list_constructor.__argnames__) Object.defineProperties(ρσ_list_constructor, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_list_constructor.__name__ = "list";
var list = ρσ_list_constructor, list_wrap = ρσ_list_decorate;
function sorted() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var key = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sorted.__defaults__.key : arguments[1];
    var reverse = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sorted.__defaults__.reverse : arguments[2];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "key")){
        key = ρσ_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "reverse")){
        reverse = ρσ_kwargs_obj.reverse;
    }
    var ans;
    ans = ρσ_list_constructor(iterable);
    ans.pysort(key, reverse);
    return ans;
};
if (!sorted.__defaults__) Object.defineProperties(sorted, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable", "key", "reverse"]}
});

var ρσ_global_object_id = 0, ρσ_set_implementation;
function ρσ_set_keyfor(x) {
    var t, ans;
    t = typeof x;
    if (t === "string" || t === "number" || t === "boolean") {
        return "_" + t[0] + x;
    }
    if (x === null) {
        return "__!@#$0";
    }
    ans = x.ρσ_hash_key_prop;
    if (ans === undefined) {
        ans = "_!@#$" + (++ρσ_global_object_id);
        Object.defineProperty(x, "ρσ_hash_key_prop", (function(){
            var ρσ_d = {};
            ρσ_d["value"] = ans;
            return ρσ_d;
        }).call(this));
    }
    return ans;
};
if (!ρσ_set_keyfor.__argnames__) Object.defineProperties(ρσ_set_keyfor, {
    __argnames__ : {value: ["x"]}
});

function ρσ_set_polyfill() {
    this._store = {};
    this.size = 0;
};

ρσ_set_polyfill.prototype.add = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
            (ρσ_expr_temp = this._store)[(typeof key === "number" && key < 0) ? ρσ_expr_temp.length + key : key] = x;
        }
        return this;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.clear = (function() {
    var ρσ_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.delete = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.has = (function() {
    var ρσ_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, ρσ_set_keyfor(x));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.values = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
if (typeof Set !== "function" || typeof Set.prototype.delete !== "function") {
    ρσ_set_implementation = ρσ_set_polyfill;
} else {
    ρσ_set_implementation = Set;
}
function ρσ_set(iterable) {
    var ans, s, iterator, result, keys;
    if (this instanceof ρσ_set) {
        this.jsset = new ρσ_set_implementation;
        ans = this;
        if (iterable === undefined) {
            return ans;
        }
        s = ans.jsset;
        if (ρσ_arraylike(iterable)) {
            for (var i = 0; i < iterable.length; i++) {
                s.add(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i]);
            }
        } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
            iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
            result = iterator.next();
            while (!result.done) {
                s.add(result.value);
                result = iterator.next();
            }
        } else {
            keys = Object.keys(iterable);
            for (var j=0; j < keys.length; j++) {
                s.add(keys[(typeof j === "number" && j < 0) ? keys.length + j : j]);
            }
        }
        return ans;
    } else {
        return new ρσ_set(iterable);
    }
};
if (!ρσ_set.__argnames__) Object.defineProperties(ρσ_set, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_set.prototype.__name__ = "set";
Object.defineProperties(ρσ_set.prototype, (function(){
    var ρσ_d = {};
    ρσ_d["length"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsset.size;
        };
        return ρσ_d;
    }).call(this);
    ρσ_d["size"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsset.size;
        };
        return ρσ_d;
    }).call(this);
    return ρσ_d;
}).call(this));
ρσ_set.prototype.__len__ = function () {
    return this.jsset.size;
};
ρσ_set.prototype.has = ρσ_set.prototype.__contains__ = (function() {
    var ρσ_anonfunc = function (x) {
        return this.jsset.has(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.add = (function() {
    var ρσ_anonfunc = function (x) {
        this.jsset.add(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.clear = function () {
    this.jsset.clear();
};
ρσ_set.prototype.copy = function () {
    return ρσ_set(this);
};
ρσ_set.prototype.discard = (function() {
    var ρσ_anonfunc = function (x) {
        this.jsset.delete(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype[ρσ_iterator_symbol] = function () {
    return this.jsset.values();
};
ρσ_set.prototype.difference = function () {
    var ans, s, iterator, r, x, has;
    ans = new ρσ_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = false;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = true;
                break;
            }
        }
        if (!has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
ρσ_set.prototype.difference_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
ρσ_set.prototype.intersection = function () {
    var ans, s, iterator, r, x, has;
    ans = new ρσ_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = true;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = false;
                break;
            }
        }
        if (has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
ρσ_set.prototype.intersection_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
ρσ_set.prototype.isdisjoint = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.issubset = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.issuperset = (function() {
    var ρσ_anonfunc = function (other) {
        var s, iterator, r, x;
        s = this.jsset;
        iterator = other.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!s.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.pop = function () {
    var iterator, r;
    iterator = this.jsset.values();
    r = iterator.next();
    if (r.done) {
        throw new KeyError("pop from an empty set");
    }
    this.jsset.delete(r.value);
    return r.value;
};
ρσ_set.prototype.remove = (function() {
    var ρσ_anonfunc = function (x) {
        if (!this.jsset.delete(x)) {
            throw new KeyError(x.toString());
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.symmetric_difference = (function() {
    var ρσ_anonfunc = function (other) {
        return this.union(other).difference(this.intersection(other));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.symmetric_difference_update = (function() {
    var ρσ_anonfunc = function (other) {
        var common;
        common = this.intersection(other);
        this.update(other);
        this.difference_update(common);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.union = function () {
    var ans;
    ans = ρσ_set(this);
    ans.update.apply(ans, arguments);
    return ans;
};
ρσ_set.prototype.update = function () {
    var s, iterator, r;
    s = this.jsset;
    for (var i=0; i < arguments.length; i++) {
        iterator = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i][ρσ_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            s.add(r.value);
            r = iterator.next();
        }
    }
};
ρσ_set.prototype.toString = ρσ_set.prototype.__repr__ = ρσ_set.prototype.__str__ = ρσ_set.prototype.inspect = function () {
    return "{" + list(this).join(", ") + "}";
};
ρσ_set.prototype.__eq__ = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r;
        if (!other instanceof this.constructor) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other[ρσ_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            if (!this.has(r.value)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
function ρσ_set_wrap(x) {
    var ans;
    ans = new ρσ_set;
    ans.jsset = x;
    return ans;
};
if (!ρσ_set_wrap.__argnames__) Object.defineProperties(ρσ_set_wrap, {
    __argnames__ : {value: ["x"]}
});

var set = ρσ_set, set_wrap = ρσ_set_wrap;
var ρσ_dict_implementation;
function ρσ_dict_polyfill() {
    this._store = {};
    this.size = 0;
};

ρσ_dict_polyfill.prototype.set = (function() {
    var ρσ_anonfunc = function (x, value) {
        var key;
        key = ρσ_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
        }
        (ρσ_expr_temp = this._store)[(typeof key === "number" && key < 0) ? ρσ_expr_temp.length + key : key] = [x, value];
        return this;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.clear = (function() {
    var ρσ_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.delete = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.has = (function() {
    var ρσ_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, ρσ_set_keyfor(x));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.get = (function() {
    var ρσ_anonfunc = function (x) {
        try {
            return (ρσ_expr_temp = this._store)[ρσ_bound_index(ρσ_set_keyfor(x), ρσ_expr_temp)][1];
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            if (ρσ_Exception instanceof TypeError) {
                return undefined;
            } else {
                throw ρσ_Exception;
            }
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.values = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][1]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.keys = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][0]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.entries = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
if (typeof Map !== "function" || typeof Map.prototype.delete !== "function") {
    ρσ_dict_implementation = ρσ_dict_polyfill;
} else {
    ρσ_dict_implementation = Map;
}
function ρσ_dict() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var kw = arguments[arguments.length-1];
    if (kw === null || typeof kw !== "object" || kw [ρσ_kwargs_symbol] !== true) kw = {};
    if (this instanceof ρσ_dict) {
        this.jsmap = new ρσ_dict_implementation;
        if (iterable !== undefined) {
            this.update(iterable);
        }
        this.update(kw);
        return this;
    } else {
        return ρσ_interpolate_kwargs_constructor.call(Object.create(ρσ_dict.prototype), false, ρσ_dict, [iterable].concat([ρσ_desugar_kwargs(kw)]));
    }
};
if (!ρσ_dict.__handles_kwarg_interpolation__) Object.defineProperties(ρσ_dict, {
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable"]}
});

ρσ_dict.prototype.__name__ = "dict";
Object.defineProperties(ρσ_dict.prototype, (function(){
    var ρσ_d = {};
    ρσ_d["length"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsmap.size;
        };
        return ρσ_d;
    }).call(this);
    ρσ_d["size"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsmap.size;
        };
        return ρσ_d;
    }).call(this);
    return ρσ_d;
}).call(this));
ρσ_dict.prototype.__len__ = function () {
    return this.jsmap.size;
};
ρσ_dict.prototype.has = ρσ_dict.prototype.__contains__ = (function() {
    var ρσ_anonfunc = function (x) {
        return this.jsmap.has(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.set = ρσ_dict.prototype.__setitem__ = (function() {
    var ρσ_anonfunc = function (key, value) {
        this.jsmap.set(key, value);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.__delitem__ = (function() {
    var ρσ_anonfunc = function (key) {
        this.jsmap.delete(key);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.clear = function () {
    this.jsmap.clear();
};
ρσ_dict.prototype.copy = function () {
    return ρσ_dict(this);
};
ρσ_dict.prototype.keys = function () {
    return this.jsmap.keys();
};
ρσ_dict.prototype.values = function () {
    return this.jsmap.values();
};
ρσ_dict.prototype.items = ρσ_dict.prototype.entries = function () {
    return this.jsmap.entries();
};
ρσ_dict.prototype[ρσ_iterator_symbol] = function () {
    return this.jsmap.keys();
};
ρσ_dict.prototype.__getitem__ = (function() {
    var ρσ_anonfunc = function (key) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            throw new KeyError(key + "");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.get = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            return (defval === undefined) ? null : defval;
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.set_default = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var j;
        j = this.jsmap;
        if (!j.has(key)) {
            j.set(key, defval);
            return defval;
        }
        return j.get(key);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.fromkeys = ρσ_dict.prototype.fromkeys = (function() {
    var ρσ_anonfunc = function () {
        var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var value = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_anonfunc.__defaults__.value : arguments[1];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "value")){
            value = ρσ_kwargs_obj.value;
        }
        var ans, iterator, r;
        ans = ρσ_dict();
        iterator = iter(iterable);
        r = iterator.next();
        while (!r.done) {
            ans.set(r.value, value);
            r = iterator.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__defaults__) Object.defineProperties(ρσ_anonfunc, {
        __defaults__ : {value: {value:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["iterable", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.pop = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            if (defval === undefined) {
                throw new KeyError(key);
            }
            return defval;
        }
        this.jsmap.delete(key);
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.popitem = function () {
    var r;
    r = this.jsmap.entries().next();
    if (r.done) {
        throw new KeyError("dict is empty");
    }
    this.jsmap.delete(r.value[0]);
    return r.value;
};
ρσ_dict.prototype.update = function () {
    var m, iterable, iterator, result, keys;
    if (arguments.length === 0) {
        return;
    }
    m = this.jsmap;
    iterable = arguments[0];
    if (Array.isArray(iterable)) {
        for (var i = 0; i < iterable.length; i++) {
            m.set(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][0], iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][1]);
        }
    } else if (iterable instanceof ρσ_dict) {
        iterator = iterable.items();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof Map === "function" && iterable instanceof Map) {
        iterator = iterable.entries();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else {
        keys = Object.keys(iterable);
        for (var j=0; j < keys.length; j++) {
            if (keys[(typeof j === "number" && j < 0) ? keys.length + j : j] !== ρσ_iterator_symbol) {
                m.set(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable)]);
            }
        }
    }
    if (arguments.length > 1) {
        ρσ_dict.prototype.update.call(this, arguments[1]);
    }
};
ρσ_dict.prototype.toString = ρσ_dict.prototype.inspect = ρσ_dict.prototype.__str__ = ρσ_dict.prototype.__repr__ = function () {
    var entries, iterator, r;
    entries = [];
    iterator = this.jsmap.entries();
    r = iterator.next();
    while (!r.done) {
        entries.push(ρσ_repr(r.value[0]) + ": " + ρσ_repr(r.value[1]));
        r = iterator.next();
    }
    return "{" + entries.join(", ") + "}";
};
ρσ_dict.prototype.__eq__ = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        if (!(other instanceof this.constructor)) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other.items();
        r = iterator.next();
        while (!r.done) {
            x = this.jsmap.get(r.value[0]);
            if (x === undefined && !this.jsmap.has(r.value[0]) || x !== r.value[1]) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.as_object = (function() {
    var ρσ_anonfunc = function (other) {
        var ans, iterator, r;
        ans = {};
        iterator = this.jsmap.entries();
        r = iterator.next();
        while (!r.done) {
            ans[ρσ_bound_index(r.value[0], ans)] = r.value[1];
            r = iterator.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
function ρσ_dict_wrap(x) {
    var ans;
    ans = new ρσ_dict;
    ans.jsmap = x;
    return ans;
};
if (!ρσ_dict_wrap.__argnames__) Object.defineProperties(ρσ_dict_wrap, {
    __argnames__ : {value: ["x"]}
});

var dict = ρσ_dict, dict_wrap = ρσ_dict_wrap;// }}}
var NameError;
NameError = ReferenceError;
function Exception() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    Exception.prototype.__init__.apply(this, arguments);
}
ρσ_extends(Exception, Error);
Exception.prototype.__init__ = function __init__(message) {
    var self = this;
    self.message = message;
    self.stack = (new Error).stack;
    self.name = self.constructor.name;
};
if (!Exception.prototype.__init__.__argnames__) Object.defineProperties(Exception.prototype.__init__, {
    __argnames__ : {value: ["message"]}
});
Exception.__argnames__ = Exception.prototype.__init__.__argnames__;
Exception.__handles_kwarg_interpolation__ = Exception.prototype.__init__.__handles_kwarg_interpolation__;
Exception.prototype.__repr__ = function __repr__() {
    var self = this;
    return self.name + ": " + self.message;
};
Exception.prototype.__str__ = function __str__ () {
    if(Error.prototype.__str__) return Error.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(Exception.prototype, "__bases__", {value: [Error]});

function AttributeError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    AttributeError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(AttributeError, Exception);
AttributeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AttributeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
AttributeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AttributeError.prototype, "__bases__", {value: [Exception]});


function IndexError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    IndexError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(IndexError, Exception);
IndexError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
IndexError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
IndexError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(IndexError.prototype, "__bases__", {value: [Exception]});


function KeyError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    KeyError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(KeyError, Exception);
KeyError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
KeyError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
KeyError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(KeyError.prototype, "__bases__", {value: [Exception]});


function ValueError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    ValueError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(ValueError, Exception);
ValueError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ValueError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
ValueError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ValueError.prototype, "__bases__", {value: [Exception]});


function UnicodeDecodeError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    UnicodeDecodeError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(UnicodeDecodeError, Exception);
UnicodeDecodeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
UnicodeDecodeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
UnicodeDecodeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(UnicodeDecodeError.prototype, "__bases__", {value: [Exception]});


function AssertionError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    AssertionError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(AssertionError, Exception);
AssertionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AssertionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
AssertionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AssertionError.prototype, "__bases__", {value: [Exception]});


function ZeroDivisionError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    ZeroDivisionError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(ZeroDivisionError, Exception);
ZeroDivisionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ZeroDivisionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
ZeroDivisionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ZeroDivisionError.prototype, "__bases__", {value: [Exception]});

var ρσ_in, ρσ_desugar_kwargs, ρσ_exists;
function ρσ_eslice(arr, step, start, end) {
    var is_string;
    if (typeof arr === "string" || arr instanceof String) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        step = -step;
        arr = arr.slice().reverse();
        if (typeof start !== "undefined") {
            start = arr.length - start - 1;
        }
        if (typeof end !== "undefined") {
            end = arr.length - end - 1;
        }
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    arr = arr.slice(start, end).filter((function() {
        var ρσ_anonfunc = function (e, i) {
            return i % step === 0;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["e", "i"]}
        });
        return ρσ_anonfunc;
    })());
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
if (!ρσ_eslice.__argnames__) Object.defineProperties(ρσ_eslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function ρσ_delslice(arr, step, start, end) {
    var is_string, ρσ_unpack, indices;
    if (typeof arr === "string" || arr instanceof String) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        if (typeof start === "undefined") {
            start = arr.length;
        }
        if (typeof end === "undefined") {
            end = 0;
        }
        ρσ_unpack = [end, start, -step];
        start = ρσ_unpack[0];
        end = ρσ_unpack[1];
        step = ρσ_unpack[2];
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    if (step === 1) {
        arr.splice(start, end - start);
    } else {
        if (end > start) {
            indices = [];
            for (var i = start; i < end; i += step) {
                indices.push(i);
            }
            for (var i = indices.length - 1; i >= 0; i--) {
                arr.splice(indices[(typeof i === "number" && i < 0) ? indices.length + i : i], 1);
            }
        }
    }
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
if (!ρσ_delslice.__argnames__) Object.defineProperties(ρσ_delslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function ρσ_flatten(arr) {
    var ans, value;
    ans = ρσ_list_decorate([]);
    for (var i=0; i < arr.length; i++) {
        value = arr[(typeof i === "number" && i < 0) ? arr.length + i : i];
        if (Array.isArray(value)) {
            ans = ans.concat(ρσ_flatten(value));
        } else {
            ans.push(value);
        }
    }
    return ans;
};
if (!ρσ_flatten.__argnames__) Object.defineProperties(ρσ_flatten, {
    __argnames__ : {value: ["arr"]}
});

function ρσ_unpack_asarray(num, iterable) {
    var ans, iterator, result;
    if (ρσ_arraylike(iterable)) {
        return iterable;
    }
    ans = [];
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done && ans.length < num) {
            ans.push(result.value);
            result = iterator.next();
        }
    }
    return ans;
};
if (!ρσ_unpack_asarray.__argnames__) Object.defineProperties(ρσ_unpack_asarray, {
    __argnames__ : {value: ["num", "iterable"]}
});

function ρσ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};
if (!ρσ_extends.__argnames__) Object.defineProperties(ρσ_extends, {
    __argnames__ : {value: ["child", "parent"]}
});

ρσ_in = function () {
    if (typeof Map === "function" && typeof Set === "function") {
        return (function() {
            var ρσ_anonfunc = function (val, arr) {
                if (typeof arr === "string") {
                    return arr.indexOf(val) !== -1;
                }
                if (typeof arr.__contains__ === "function") {
                    return arr.__contains__(val);
                }
                if (arr instanceof Map || arr instanceof Set) {
                    return arr.has(val);
                }
                if (ρσ_arraylike(arr)) {
                    return ρσ_list_contains.call(arr, val);
                }
                return Object.prototype.hasOwnProperty.call(arr, val);
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["val", "arr"]}
            });
            return ρσ_anonfunc;
        })();
    }
    return (function() {
        var ρσ_anonfunc = function (val, arr) {
            if (typeof arr === "string") {
                return arr.indexOf(val) !== -1;
            }
            if (typeof arr.__contains__ === "function") {
                return arr.__contains__(val);
            }
            if (ρσ_arraylike(arr)) {
                return ρσ_list_contains.call(arr, val);
            }
            return Object.prototype.hasOwnProperty.call(arr, val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val", "arr"]}
        });
        return ρσ_anonfunc;
    })();
}();
function ρσ_Iterable(iterable) {
    var iterator, ans, result;
    if (ρσ_arraylike(iterable)) {
        return iterable;
    }
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans = ρσ_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
        return ans;
    }
    return Object.keys(iterable);
};
if (!ρσ_Iterable.__argnames__) Object.defineProperties(ρσ_Iterable, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_desugar_kwargs = function () {
    if (typeof Object.assign === "function") {
        return function () {
            var ans;
            ans = Object.create(null);
            ans[ρσ_kwargs_symbol] = true;
            for (var i = 0; i < arguments.length; i++) {
                Object.assign(ans, arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            }
            return ans;
        };
    }
    return function () {
        var ans, keys;
        ans = Object.create(null);
        ans[ρσ_kwargs_symbol] = true;
        for (var i = 0; i < arguments.length; i++) {
            keys = Object.keys(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            for (var j = 0; j < keys.length; j++) {
                ans[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ans)] = (ρσ_expr_temp = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i])[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ρσ_expr_temp)];
            }
        }
        return ans;
    };
}();
function ρσ_interpolate_kwargs(f, supplied_args) {
    var has_prop, kwobj, args, prop;
    if (!f.__argnames__) {
        return f.apply(this, supplied_args);
    }
    has_prop = Object.prototype.hasOwnProperty;
    kwobj = supplied_args.pop();
    if (f.__handles_kwarg_interpolation__) {
        args = new Array(Math.max(supplied_args.length, f.__argnames__.length) + 1);
        args[args.length-1] = kwobj;
        for (var i = 0; i < args.length - 1; i++) {
            if (i < f.__argnames__.length) {
                prop = (ρσ_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
                if (has_prop.call(kwobj, prop)) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
                    delete kwobj[prop];
                } else if (i < supplied_args.length) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
                }
            } else {
                args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
            }
        }
        return f.apply(this, args);
    }
    for (var i = 0; i < f.__argnames__.length; i++) {
        prop = (ρσ_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        if (has_prop.call(kwobj, prop)) {
            supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
        }
    }
    return f.apply(this, supplied_args);
};
if (!ρσ_interpolate_kwargs.__argnames__) Object.defineProperties(ρσ_interpolate_kwargs, {
    __argnames__ : {value: ["f", "supplied_args"]}
});

function ρσ_interpolate_kwargs_constructor(apply, f, supplied_args) {
    if (apply) {
        f.apply(this, supplied_args);
    } else {
        ρσ_interpolate_kwargs.call(this, f, supplied_args);
    }
    return this;
};
if (!ρσ_interpolate_kwargs_constructor.__argnames__) Object.defineProperties(ρσ_interpolate_kwargs_constructor, {
    __argnames__ : {value: ["apply", "f", "supplied_args"]}
});

function ρσ_getitem(obj, key) {
    if (obj.__getitem__) {
        return obj.__getitem__(key);
    }
    if (typeof key === "number" && key < 0) {
        key += obj.length;
    }
    return obj[(typeof key === "number" && key < 0) ? obj.length + key : key];
};
if (!ρσ_getitem.__argnames__) Object.defineProperties(ρσ_getitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function ρσ_setitem(obj, key, val) {
    if (obj.__setitem__) {
        obj.__setitem__(key, val);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        obj[(typeof key === "number" && key < 0) ? obj.length + key : key] = val;
    }
};
if (!ρσ_setitem.__argnames__) Object.defineProperties(ρσ_setitem, {
    __argnames__ : {value: ["obj", "key", "val"]}
});

function ρσ_delitem(obj, key) {
    if (obj.__delitem__) {
        obj.__delitem__(key);
    } else if (typeof obj.splice === "function") {
        obj.splice(key, 1);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        delete obj[key];
    }
};
if (!ρσ_delitem.__argnames__) Object.defineProperties(ρσ_delitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function ρσ_bound_index(idx, arr) {
    if (typeof idx === "number" && idx < 0) {
        idx += arr.length;
    }
    return idx;
};
if (!ρσ_bound_index.__argnames__) Object.defineProperties(ρσ_bound_index, {
    __argnames__ : {value: ["idx", "arr"]}
});

function ρσ_splice(arr, val, start, end) {
    start = start || 0;
    if (start < 0) {
        start += arr.length;
    }
    if (end === undefined) {
        end = arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }
    Array.prototype.splice.apply(arr, [start, end - start].concat(val));
};
if (!ρσ_splice.__argnames__) Object.defineProperties(ρσ_splice, {
    __argnames__ : {value: ["arr", "val", "start", "end"]}
});

ρσ_exists = (function(){
    var ρσ_d = {};
    ρσ_d["n"] = (function() {
        var ρσ_anonfunc = function (expr) {
            return expr !== undefined && expr !== null;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["d"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (expr === undefined || expr === null) {
                return Object.create(null);
            }
            return expr;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["c"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (typeof expr === "function") {
                return expr;
            }
            return function () {
                return undefined;
            };
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["g"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (expr === undefined || expr === null || typeof expr.__getitem__ !== "function") {
                return (function(){
                    var ρσ_d = {};
                    ρσ_d["__getitem__"] = function () {
                        return undefined;
                    };
                    return ρσ_d;
                }).call(this);
            }
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["e"] = (function() {
        var ρσ_anonfunc = function (expr, alt) {
            return (expr === undefined || expr === null) ? alt : expr;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr", "alt"]}
        });
        return ρσ_anonfunc;
    })();
    return ρσ_d;
}).call(this);
function ρσ_mixin() {
    var seen, resolved_props, p, target, props, name;
    seen = Object.create(null);
    seen.__argnames__ = seen.__handles_kwarg_interpolation__ = seen.__init__ = seen.__annotations__ = seen.__doc__ = seen.__bind_methods__ = seen.__bases__ = seen.constructor = seen.__class__ = true;
    resolved_props = {};
    p = target = arguments[0].prototype;
    while (p && p !== Object.prototype) {
        props = Object.getOwnPropertyNames(p);
        for (var i = 0; i < props.length; i++) {
            seen[ρσ_bound_index(props[(typeof i === "number" && i < 0) ? props.length + i : i], seen)] = true;
        }
        p = Object.getPrototypeOf(p);
    }
    for (var c = 1; c < arguments.length; c++) {
        p = arguments[(typeof c === "number" && c < 0) ? arguments.length + c : c].prototype;
        while (p && p !== Object.prototype) {
            props = Object.getOwnPropertyNames(p);
            for (var i = 0; i < props.length; i++) {
                name = props[(typeof i === "number" && i < 0) ? props.length + i : i];
                if (seen[(typeof name === "number" && name < 0) ? seen.length + name : name]) {
                    continue;
                }
                seen[(typeof name === "number" && name < 0) ? seen.length + name : name] = true;
                resolved_props[(typeof name === "number" && name < 0) ? resolved_props.length + name : name] = Object.getOwnPropertyDescriptor(p, name);
            }
            p = Object.getPrototypeOf(p);
        }
    }
    Object.defineProperties(target, resolved_props);
};

function ρσ_instanceof() {
    var obj, bases, q, cls, p;
    obj = arguments[0];
    bases = "";
    if (obj && obj.constructor && obj.constructor.prototype) {
        bases = obj.constructor.prototype.__bases__ || "";
    }
    for (var i = 1; i < arguments.length; i++) {
        q = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i];
        if (obj instanceof q) {
            return true;
        }
        if ((q === Array || q === ρσ_list_constructor) && Array.isArray(obj)) {
            return true;
        }
        if (q === ρσ_str && (typeof obj === "string" || obj instanceof String)) {
            return true;
        }
        if (bases.length > 1) {
            for (var c = 1; c < bases.length; c++) {
                cls = bases[(typeof c === "number" && c < 0) ? bases.length + c : c];
                while (cls) {
                    if (q === cls) {
                        return true;
                    }
                    p = Object.getPrototypeOf(cls.prototype);
                    if (!p) {
                        break;
                    }
                    cls = p.constructor;
                }
            }
        }
    }
    return false;
};
function sum(iterable, start) {
    var ans, iterator, r;
    if (Array.isArray(iterable)) {
        return iterable.reduce((function() {
            var ρσ_anonfunc = function (prev, cur) {
                return prev + cur;
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["prev", "cur"]}
            });
            return ρσ_anonfunc;
        })(), start || 0);
    }
    ans = start || 0;
    iterator = iter(iterable);
    r = iterator.next();
    while (!r.done) {
        ans += r.value;
        r = iterator.next();
    }
    return ans;
};
if (!sum.__argnames__) Object.defineProperties(sum, {
    __argnames__ : {value: ["iterable", "start"]}
});

function map() {
    var iterators, func, args, ans;
    iterators = new Array(arguments.length - 1);
    func = arguments[0];
    args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
        iterators[ρσ_bound_index(i - 1, iterators)] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_func':func, '_iterators':iterators, '_args':args};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        for (var i = 0; i < this._iterators.length; i++) {
            r = (ρσ_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            (ρσ_expr_temp = this._args)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = r.value;
        }
        return {'done':false, 'value':this._func.apply(undefined, this._args)};
    };
    return ans;
};

function filter(func_or_none, iterable) {
    var func, ans;
    func = (func_or_none === null) ? ρσ_bool : func_or_none;
    ans = {'_func':func, '_iterator':ρσ_iter(iterable)};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        r = this._iterator.next();
        while (!r.done) {
            if (this._func(r.value)) {
                return r;
            }
            r = this._iterator.next();
        }
        return {'done':true};
    };
    return ans;
};
if (!filter.__argnames__) Object.defineProperties(filter, {
    __argnames__ : {value: ["func_or_none", "iterable"]}
});

function zip() {
    var iterators, ans;
    iterators = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        iterators[(typeof i === "number" && i < 0) ? iterators.length + i : i] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_iterators':iterators};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var args, r;
        args = new Array(this._iterators.length);
        for (var i = 0; i < this._iterators.length; i++) {
            r = (ρσ_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            args[(typeof i === "number" && i < 0) ? args.length + i : i] = r.value;
        }
        return {'done':false, 'value':args};
    };
    return ans;
};

function any(iterable) {
    var i;
    var ρσ_Iter0 = ρσ_Iterable(iterable);
    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
        i = ρσ_Iter0[ρσ_Index0];
        if (i) {
            return true;
        }
    }
    return false;
};
if (!any.__argnames__) Object.defineProperties(any, {
    __argnames__ : {value: ["iterable"]}
});

function all(iterable) {
    var i;
    var ρσ_Iter1 = ρσ_Iterable(iterable);
    for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
        i = ρσ_Iter1[ρσ_Index1];
        if (!i) {
            return false;
        }
    }
    return true;
};
if (!all.__argnames__) Object.defineProperties(all, {
    __argnames__ : {value: ["iterable"]}
});
var define_str_func, ρσ_unpack, ρσ_orig_split, ρσ_orig_replace;
function ρσ_repr_js_builtin(x, as_array) {
    var ans, b, keys, key;
    ans = [];
    b = "{}";
    if (as_array) {
        b = "[]";
        for (var i = 0; i < x.length; i++) {
            ans.push(ρσ_repr(x[(typeof i === "number" && i < 0) ? x.length + i : i]));
        }
    } else {
        keys = Object.keys(x);
        for (var k = 0; k < keys.length; k++) {
            key = keys[(typeof k === "number" && k < 0) ? keys.length + k : k];
            ans.push(JSON.stringify(key) + ":" + ρσ_repr(x[(typeof key === "number" && key < 0) ? x.length + key : key]));
        }
    }
    return b[0] + ans.join(", ") + b[1];
};
if (!ρσ_repr_js_builtin.__argnames__) Object.defineProperties(ρσ_repr_js_builtin, {
    __argnames__ : {value: ["x", "as_array"]}
});

function ρσ_html_element_to_string(elem) {
    var attrs, val, attr, ans;
    attrs = [];
    var ρσ_Iter0 = ρσ_Iterable(elem.attributes);
    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
        attr = ρσ_Iter0[ρσ_Index0];
        if (attr.specified) {
            val = attr.value;
            if (val.length > 10) {
                val = val.slice(0, 15) + "...";
            }
            val = JSON.stringify(val);
            attrs.push("" + ρσ_str.format("{}", attr.name) + "=" + ρσ_str.format("{}", val) + "");
        }
    }
    attrs = (attrs.length) ? " " + attrs.join(" ") : "";
    ans = "<" + ρσ_str.format("{}", elem.tagName) + "" + ρσ_str.format("{}", attrs) + ">";
    return ans;
};
if (!ρσ_html_element_to_string.__argnames__) Object.defineProperties(ρσ_html_element_to_string, {
    __argnames__ : {value: ["elem"]}
});

function ρσ_repr(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = ρσ_repr_js_builtin(x, true);
    } else if (typeof x === "function") {
        ans = x.toString();
    } else if (typeof x === "object" && !x.toString) {
        ans = ρσ_repr_js_builtin(x);
    } else {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (ρσ_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var ρσ_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return ρσ_anonfunc;
            })()).join(", ") + "])";
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            ans = ρσ_html_element_to_string(x);
        } else {
            ans = (typeof x.toString === "function") ? x.toString() : x;
        }
        if (ans === "[object Object]") {
            return ρσ_repr_js_builtin(x);
        }
        try {
            ans = JSON.stringify(x);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
            } 
        }
    }
    return ans + "";
};
if (!ρσ_repr.__argnames__) Object.defineProperties(ρσ_repr, {
    __argnames__ : {value: ["x"]}
});

function ρσ_str(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__str__ === "function") {
        ans = x.__str__();
    } else if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = ρσ_repr_js_builtin(x, true);
    } else if (typeof x.toString === "function") {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (ρσ_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var ρσ_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return ρσ_anonfunc;
            })()).join(", ") + "])";
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            ans = ρσ_html_element_to_string(x);
        } else {
            ans = x.toString();
        }
        if (ans === "[object Object]") {
            ans = ρσ_repr_js_builtin(x);
        }
    } else if (typeof x === "object" && !x.toString) {
        ans = ρσ_repr_js_builtin(x);
    }
    return ans + "";
};
if (!ρσ_str.__argnames__) Object.defineProperties(ρσ_str, {
    __argnames__ : {value: ["x"]}
});

define_str_func = (function() {
    var ρσ_anonfunc = function (name, func) {
        var f;
        (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = func;
        ρσ_str[(typeof name === "number" && name < 0) ? ρσ_str.length + name : name] = f = func.call.bind(func);
        if (func.__argnames__) {
            Object.defineProperty(f, "__argnames__", (function(){
                var ρσ_d = {};
                ρσ_d["value"] = ['string'].concat(func.__argnames__);
                return ρσ_d;
            }).call(this));
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["name", "func"]}
    });
    return ρσ_anonfunc;
})();
ρσ_unpack = [String.prototype.split.call.bind(String.prototype.split), String.prototype.replace.call.bind(String.prototype.replace)];
ρσ_orig_split = ρσ_unpack[0];
ρσ_orig_replace = ρσ_unpack[1];
define_str_func("format", function () {
    var template, args, kwargs, explicit, implicit, idx, split, ans, pos, in_brace, markup, ch;
    template = this;
    if (template === undefined) {
        throw new TypeError("Template is required");
    }
    args = Array.prototype.slice.call(arguments);
    kwargs = {};
    if (args[args.length-1] && args[args.length-1][ρσ_kwargs_symbol] !== undefined) {
        kwargs = args[args.length-1];
        args = args.slice(0, -1);
    }
    explicit = implicit = false;
    idx = 0;
    split = ρσ_orig_split;
    if (ρσ_str.format._template_resolve_pat === undefined) {
        ρσ_str.format._template_resolve_pat = /[.\[]/;
    }
    function resolve(arg, object) {
        var ρσ_unpack, first, key, rest, ans;
        if (!arg) {
            return object;
        }
        ρσ_unpack = [arg[0], arg.slice(1)];
        first = ρσ_unpack[0];
        arg = ρσ_unpack[1];
        key = split(arg, ρσ_str.format._template_resolve_pat, 1)[0];
        rest = arg.slice(key.length);
        ans = (first === "[") ? object[ρσ_bound_index(key.slice(0, -1), object)] : getattr(object, key);
        if (ans === undefined) {
            throw new KeyError((first === "[") ? key.slice(0, -1) : key);
        }
        return resolve(rest, ans);
    };
    if (!resolve.__argnames__) Object.defineProperties(resolve, {
        __argnames__ : {value: ["arg", "object"]}
    });

    function resolve_format_spec(format_spec) {
        if (ρσ_str.format._template_resolve_fs_pat === undefined) {
            ρσ_str.format._template_resolve_fs_pat = /[{]([a-zA-Z0-9_]+)[}]/g;
        }
        return format_spec.replace(ρσ_str.format._template_resolve_fs_pat, (function() {
            var ρσ_anonfunc = function (match, key) {
                if (!Object.prototype.hasOwnProperty.call(kwargs, key)) {
                    return "";
                }
                return "" + kwargs[(typeof key === "number" && key < 0) ? kwargs.length + key : key];
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["match", "key"]}
            });
            return ρσ_anonfunc;
        })());
    };
    if (!resolve_format_spec.__argnames__) Object.defineProperties(resolve_format_spec, {
        __argnames__ : {value: ["format_spec"]}
    });

    function set_comma(ans, comma) {
        var sep;
        if (comma !== ",") {
            sep = 1234;
            sep = sep.toLocaleString(undefined, {useGrouping: true})[1];
            ans = str.replace(ans, sep, comma);
        }
        return ans;
    };
    if (!set_comma.__argnames__) Object.defineProperties(set_comma, {
        __argnames__ : {value: ["ans", "comma"]}
    });

    function safe_comma(value, comma) {
        try {
            return set_comma(value.toLocaleString(undefined, {useGrouping: true}), comma);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
                return value.toString(10);
            } 
        }
    };
    if (!safe_comma.__argnames__) Object.defineProperties(safe_comma, {
        __argnames__ : {value: ["value", "comma"]}
    });

    function safe_fixed(value, precision, comma) {
        if (!comma) {
            return value.toFixed(precision);
        }
        try {
            return set_comma(value.toLocaleString(undefined, {useGrouping: true, minimumFractionDigits: precision, maximumFractionDigits: precision}), comma);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
                return value.toFixed(precision);
            } 
        }
    };
    if (!safe_fixed.__argnames__) Object.defineProperties(safe_fixed, {
        __argnames__ : {value: ["value", "precision", "comma"]}
    });

    function apply_formatting(value, format_spec) {
        var ρσ_unpack, fill, align, sign, fhash, zeropad, width, comma, precision, ftype, is_numeric, is_int, lftype, code, prec, exp, nval, is_positive, left, right;
        if (format_spec.indexOf("{") !== -1) {
            format_spec = resolve_format_spec(format_spec);
        }
        if (ρσ_str.format._template_format_pat === undefined) {
            ρσ_str.format._template_format_pat = /([^{}](?=[<>=^]))?([<>=^])?([-+\x20])?(\#)?(0)?(\d+)?([,_])?(?:\.(\d+))?([bcdeEfFgGnosxX%])?/;
        }
        try {
            ρσ_unpack = format_spec.match(ρσ_str.format._template_format_pat).slice(1);
ρσ_unpack = ρσ_unpack_asarray(9, ρσ_unpack);
            fill = ρσ_unpack[0];
            align = ρσ_unpack[1];
            sign = ρσ_unpack[2];
            fhash = ρσ_unpack[3];
            zeropad = ρσ_unpack[4];
            width = ρσ_unpack[5];
            comma = ρσ_unpack[6];
            precision = ρσ_unpack[7];
            ftype = ρσ_unpack[8];
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            if (ρσ_Exception instanceof TypeError) {
                return value;
            } else {
                throw ρσ_Exception;
            }
        }
        if (zeropad) {
            fill = fill || "0";
            align = align || "=";
        } else {
            fill = fill || " ";
            align = align || ">";
        }
        is_numeric = Number(value) === value;
        is_int = is_numeric && value % 1 === 0;
        precision = parseInt(precision, 10);
        lftype = (ftype || "").toLowerCase();
        if (ftype === "n") {
            is_numeric = true;
            if (is_int) {
                if (comma) {
                    throw new ValueError("Cannot specify ',' with 'n'");
                }
                value = parseInt(value, 10).toLocaleString();
            } else {
                value = parseFloat(value).toLocaleString();
            }
        } else if (['b', 'c', 'd', 'o', 'x'].indexOf(lftype) !== -1) {
            value = parseInt(value, 10);
            is_numeric = true;
            if (!isNaN(value)) {
                if (ftype === "b") {
                    value = (value >>> 0).toString(2);
                    if (fhash) {
                        value = "0b" + value;
                    }
                } else if (ftype === "c") {
                    if (value > 65535) {
                        code = value - 65536;
                        value = String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
                    } else {
                        value = String.fromCharCode(value);
                    }
                } else if (ftype === "d") {
                    if (comma) {
                        value = safe_comma(value, comma);
                    } else {
                        value = value.toString(10);
                    }
                } else if (ftype === "o") {
                    value = value.toString(8);
                    if (fhash) {
                        value = "0o" + value;
                    }
                } else if (lftype === "x") {
                    value = value.toString(16);
                    value = (ftype === "x") ? value.toLowerCase() : value.toUpperCase();
                    if (fhash) {
                        value = "0x" + value;
                    }
                }
            }
        } else if (['e','f','g','%'].indexOf(lftype) !== -1) {
            is_numeric = true;
            value = parseFloat(value);
            prec = (isNaN(precision)) ? 6 : precision;
            if (lftype === "e") {
                value = value.toExponential(prec);
                value = (ftype === "E") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "f") {
                value = safe_fixed(value, prec, comma);
                value = (ftype === "F") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "%") {
                value *= 100;
                value = safe_fixed(value, prec, comma) + "%";
            } else if (lftype === "g") {
                prec = max(1, prec);
                exp = parseInt(split(value.toExponential(prec - 1).toLowerCase(), "e")[1], 10);
                if (-4 <= exp && exp < prec) {
                    value = safe_fixed(value, prec - 1 - exp, comma);
                } else {
                    value = value.toExponential(prec - 1);
                }
                value = value.replace(/0+$/g, "");
                if (value[value.length-1] === ".") {
                    value = value.slice(0, -1);
                }
                if (ftype === "G") {
                    value = value.toUpperCase();
                }
            }
        } else {
            if (comma) {
                value = parseInt(value, 10);
                if (isNaN(value)) {
                    throw new ValueError("Must use numbers with , or _");
                }
                value = safe_comma(value, comma);
            }
            value += "";
            if (!isNaN(precision)) {
                value = value.slice(0, precision);
            }
        }
        value += "";
        if (is_numeric && sign) {
            nval = Number(value);
            is_positive = !isNaN(nval) && nval >= 0;
            if (is_positive && (sign === " " || sign === "+")) {
                value = sign + value;
            }
        }
        function repeat(char, num) {
            return (new Array(num+1)).join(char);
        };
        if (!repeat.__argnames__) Object.defineProperties(repeat, {
            __argnames__ : {value: ["char", "num"]}
        });

        if (is_numeric && width && width[0] === "0") {
            width = width.slice(1);
            ρσ_unpack = ["0", "="];
            fill = ρσ_unpack[0];
            align = ρσ_unpack[1];
        }
        width = parseInt(width || "-1", 10);
        if (isNaN(width)) {
            throw new ValueError("Invalid width specification: " + width);
        }
        if (fill && value.length < width) {
            if (align === "<") {
                value = value + repeat(fill, width - value.length);
            } else if (align === ">") {
                value = repeat(fill, width - value.length) + value;
            } else if (align === "^") {
                left = Math.floor((width - value.length) / 2);
                right = width - left - value.length;
                value = repeat(fill, left) + value + repeat(fill, right);
            } else if (align === "=") {
                if (ρσ_in(value[0], "+- ")) {
                    value = value[0] + repeat(fill, width - value.length) + value.slice(1);
                } else {
                    value = repeat(fill, width - value.length) + value;
                }
            } else {
                throw new ValueError("Unrecognized alignment: " + align);
            }
        }
        return value;
    };
    if (!apply_formatting.__argnames__) Object.defineProperties(apply_formatting, {
        __argnames__ : {value: ["value", "format_spec"]}
    });

    function parse_markup(markup) {
        var key, transformer, format_spec, pos, state, ch;
        key = transformer = format_spec = "";
        pos = 0;
        state = 0;
        while (pos < markup.length) {
            ch = markup[(typeof pos === "number" && pos < 0) ? markup.length + pos : pos];
            if (state === 0) {
                if (ch === "!") {
                    state = 1;
                } else if (ch === ":") {
                    state = 2;
                } else {
                    key += ch;
                }
            } else if (state === 1) {
                if (ch === ":") {
                    state = 2;
                } else {
                    transformer += ch;
                }
            } else {
                format_spec += ch;
            }
            pos += 1;
        }
        return [key, transformer, format_spec];
    };
    if (!parse_markup.__argnames__) Object.defineProperties(parse_markup, {
        __argnames__ : {value: ["markup"]}
    });

    function render_markup(markup) {
        var ρσ_unpack, key, transformer, format_spec, lkey, nvalue, object, ans;
        ρσ_unpack = parse_markup(markup);
ρσ_unpack = ρσ_unpack_asarray(3, ρσ_unpack);
        key = ρσ_unpack[0];
        transformer = ρσ_unpack[1];
        format_spec = ρσ_unpack[2];
        if (transformer && ['a', 'r', 's'].indexOf(transformer) === -1) {
            throw new ValueError("Unknown conversion specifier: " + transformer);
        }
        lkey = key.length && split(key, /[.\[]/, 1)[0];
        if (lkey) {
            explicit = true;
            if (implicit) {
                throw new ValueError("cannot switch from automatic field numbering to manual field specification");
            }
            nvalue = parseInt(lkey);
            object = (isNaN(nvalue)) ? kwargs[(typeof lkey === "number" && lkey < 0) ? kwargs.length + lkey : lkey] : args[(typeof nvalue === "number" && nvalue < 0) ? args.length + nvalue : nvalue];
            if (object === undefined) {
                if (isNaN(nvalue)) {
                    throw new KeyError(lkey);
                }
                throw new IndexError(lkey);
            }
            object = resolve(key.slice(lkey.length), object);
        } else {
            implicit = true;
            if (explicit) {
                throw new ValueError("cannot switch from manual field specification to automatic field numbering");
            }
            if (idx >= args.length) {
                throw new IndexError("Not enough arguments to match template: " + template);
            }
            object = args[(typeof idx === "number" && idx < 0) ? args.length + idx : idx];
            idx += 1;
        }
        if (typeof object === "function") {
            object = object();
        }
        ans = "" + object;
        if (format_spec) {
            ans = apply_formatting(ans, format_spec);
        }
        return ans;
    };
    if (!render_markup.__argnames__) Object.defineProperties(render_markup, {
        __argnames__ : {value: ["markup"]}
    });

    ans = "";
    pos = 0;
    in_brace = 0;
    markup = "";
    while (pos < template.length) {
        ch = template[(typeof pos === "number" && pos < 0) ? template.length + pos : pos];
        if (in_brace) {
            if (ch === "{") {
                in_brace += 1;
                markup += "{";
            } else if (ch === "}") {
                in_brace -= 1;
                if (in_brace > 0) {
                    markup += "}";
                } else {
                    ans += render_markup(markup);
                }
            } else {
                markup += ch;
            }
        } else {
            if (ch === "{") {
                if (template[ρσ_bound_index(pos + 1, template)] === "{") {
                    pos += 1;
                    ans += "{";
                } else {
                    in_brace = 1;
                    markup = "";
                }
            } else {
                ans += ch;
                if (ch === "}" && template[ρσ_bound_index(pos + 1, template)] === "}") {
                    pos += 1;
                }
            }
        }
        pos += 1;
    }
    if (in_brace) {
        throw new ValueError("expected '}' before end of string");
    }
    return ans;
});
define_str_func("capitalize", function () {
    var string;
    string = this;
    if (string) {
        string = string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    return string;
});
define_str_func("center", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var left, right;
        left = Math.floor((width - this.length) / 2);
        right = width - left - this.length;
        fill = fill || " ";
        return new Array(left+1).join(fill) + this + new Array(right+1).join(fill);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("count", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var string, ρσ_unpack, pos, step, ans;
        string = this;
        start = start || 0;
        end = end || string.length;
        if (start < 0 || end < 0) {
            string = string.slice(start, end);
            ρσ_unpack = [0, string.length];
            start = ρσ_unpack[0];
            end = ρσ_unpack[1];
        }
        pos = start;
        step = needle.length;
        if (!step) {
            return 0;
        }
        ans = 0;
        while (pos !== -1) {
            pos = string.indexOf(needle, pos);
            if (pos !== -1) {
                ans += 1;
                pos += step;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("endswith", (function() {
    var ρσ_anonfunc = function (suffixes, start, end) {
        var string, q;
        string = this;
        start = start || 0;
        if (typeof suffixes === "string") {
            suffixes = [suffixes];
        }
        if (end !== undefined) {
            string = string.slice(0, end);
        }
        for (var i = 0; i < suffixes.length; i++) {
            q = suffixes[(typeof i === "number" && i < 0) ? suffixes.length + i : i];
            if (string.indexOf(q, Math.max(start, string.length - q.length)) !== -1) {
                return true;
            }
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["suffixes", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("startswith", (function() {
    var ρσ_anonfunc = function (prefixes, start, end) {
        var prefix;
        start = start || 0;
        if (typeof prefixes === "string") {
            prefixes = [prefixes];
        }
        for (var i = 0; i < prefixes.length; i++) {
            prefix = prefixes[(typeof i === "number" && i < 0) ? prefixes.length + i : i];
            end = (end === undefined) ? this.length : end;
            if (end - start >= prefix.length && prefix === this.slice(start, start + prefix.length)) {
                return true;
            }
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["prefixes", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("find", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        while (start < 0) {
            start += this.length;
        }
        ans = this.indexOf(needle, start);
        if (end !== undefined && ans !== -1) {
            while (end < 0) {
                end += this.length;
            }
            if (ans >= end - needle.length) {
                return -1;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rfind", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        while (end < 0) {
            end += this.length;
        }
        ans = this.lastIndexOf(needle, end - 1);
        if (start !== undefined && ans !== -1) {
            while (start < 0) {
                start += this.length;
            }
            if (ans < start) {
                return -1;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("index", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        ans = ρσ_str.prototype.find.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rindex", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        ans = ρσ_str.prototype.rfind.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("islower", function () {
    return this.length > 0 && this.toLowerCase() === this.toString();
});
define_str_func("isupper", function () {
    return this.length > 0 && this.toUpperCase() === this.toString();
});
define_str_func("isspace", function () {
    return this.length > 0 && /^\s+$/.test(this);
});
define_str_func("join", (function() {
    var ρσ_anonfunc = function (iterable) {
        var ans, r;
        if (Array.isArray(iterable)) {
            return iterable.join(this);
        }
        ans = "";
        r = iterable.next();
        while (!r.done) {
            if (ans) {
                ans += this;
            }
            ans += r.value;
            r = iterable.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["iterable"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("ljust", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string += new Array(width - string.length + 1).join(fill);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rjust", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string = new Array(width - string.length + 1).join(fill) + string;
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("lower", function () {
    return this.toLowerCase();
});
define_str_func("upper", function () {
    return this.toUpperCase();
});
define_str_func("lstrip", (function() {
    var ρσ_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = 0;
        chars = chars || ρσ_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos += 1;
        }
        if (pos) {
            string = string.slice(pos);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rstrip", (function() {
    var ρσ_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = string.length - 1;
        chars = chars || ρσ_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos -= 1;
        }
        if (pos < string.length - 1) {
            string = string.slice(0, pos + 1);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("strip", (function() {
    var ρσ_anonfunc = function (chars) {
        return ρσ_str.prototype.lstrip.call(ρσ_str.prototype.rstrip.call(this, chars), chars);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("partition", (function() {
    var ρσ_anonfunc = function (sep) {
        var idx;
        idx = this.indexOf(sep);
        if (idx === -1) {
            return [this, "", ""];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rpartition", (function() {
    var ρσ_anonfunc = function (sep) {
        var idx;
        idx = this.lastIndexOf(sep);
        if (idx === -1) {
            return ["", "", this];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("replace", (function() {
    var ρσ_anonfunc = function (old, repl, count) {
        var string, pos, idx;
        string = this;
        if (count === 1) {
            return ρσ_orig_replace(string, old, repl);
        }
        if (count < 1) {
            return string;
        }
        count = count || Number.MAX_VALUE;
        pos = 0;
        while (count > 0) {
            count -= 1;
            idx = string.indexOf(old, pos);
            if (idx === -1) {
                break;
            }
            pos = idx + repl.length;
            string = string.slice(0, idx) + repl + string.slice(idx + old.length);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["old", "repl", "count"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("split", (function() {
    var ρσ_anonfunc = function (sep, maxsplit) {
        var split, ans, extra, parts;
        if (maxsplit === 0) {
            return ρσ_list_decorate([ this ]);
        }
        split = ρσ_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = split(this, /(\s+)/);
                extra = "";
                parts = [];
                for (var i = 0; i < ans.length; i++) {
                    if (parts.length >= maxsplit + 1) {
                        extra += ans[(typeof i === "number" && i < 0) ? ans.length + i : i];
                    } else if (i % 2 === 0) {
                        parts.push(ans[(typeof i === "number" && i < 0) ? ans.length + i : i]);
                    }
                }
                parts[parts.length-1] += extra;
                ans = parts;
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = split(this, sep);
            if (maxsplit > 0 && ans.length > maxsplit) {
                extra = ans.slice(maxsplit).join(sep);
                ans = ans.slice(0, maxsplit);
                ans.push(extra);
            }
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rsplit", (function() {
    var ρσ_anonfunc = function (sep, maxsplit) {
        var split, ans, is_space, pos, current, spc, ch, end, idx;
        if (!maxsplit) {
            return ρσ_str.prototype.split.call(this, sep);
        }
        split = ρσ_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = [];
                is_space = /\s/;
                pos = this.length - 1;
                current = "";
                while (pos > -1 && maxsplit > 0) {
                    spc = false;
                    ch = (ρσ_expr_temp = this)[(typeof pos === "number" && pos < 0) ? ρσ_expr_temp.length + pos : pos];
                    while (pos > -1 && is_space.test(ch)) {
                        spc = true;
                        ch = this[--pos];
                    }
                    if (spc) {
                        if (current) {
                            ans.push(current);
                            maxsplit -= 1;
                        }
                        current = ch;
                    } else {
                        current += ch;
                    }
                    pos -= 1;
                }
                ans.push(this.slice(0, pos + 1) + current);
                ans.reverse();
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = [];
            pos = end = this.length;
            while (pos > -1 && maxsplit > 0) {
                maxsplit -= 1;
                idx = this.lastIndexOf(sep, pos);
                if (idx === -1) {
                    break;
                }
                ans.push(this.slice(idx + sep.length, end));
                pos = idx - 1;
                end = idx;
            }
            ans.push(this.slice(0, end));
            ans.reverse();
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("splitlines", (function() {
    var ρσ_anonfunc = function (keepends) {
        var split, parts, ans;
        split = ρσ_orig_split;
        if (keepends) {
            parts = split(this, /((?:\r?\n)|\r)/);
            ans = [];
            for (var i = 0; i < parts.length; i++) {
                if (i % 2 === 0) {
                    ans.push(parts[(typeof i === "number" && i < 0) ? parts.length + i : i]);
                } else {
                    ans[ans.length-1] += parts[(typeof i === "number" && i < 0) ? parts.length + i : i];
                }
            }
        } else {
            ans = split(this, /(?:\r?\n)|\r/);
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["keepends"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("swapcase", function () {
    var ans, a, b;
    ans = new Array(this.length);
    for (var i = 0; i < ans.length; i++) {
        a = (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        b = a.toLowerCase();
        if (a === b) {
            b = a.toUpperCase();
        }
        ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = b;
    }
    return ans.join("");
});
define_str_func("zfill", (function() {
    var ρσ_anonfunc = function (width) {
        var string;
        string = this;
        if (width > string.length) {
            string = new Array(width - string.length + 1).join("0") + string;
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width"]}
    });
    return ρσ_anonfunc;
})());
ρσ_str.uchrs = (function() {
    var ρσ_anonfunc = function (string, with_positions) {
        return (function(){
            var ρσ_d = {};
            ρσ_d["_string"] = string;
            ρσ_d["_pos"] = 0;
            ρσ_d[ρσ_iterator_symbol] = function () {
                return this;
            };
            ρσ_d["next"] = function () {
                var length, pos, value, ans, extra;
                length = this._string.length;
                if (this._pos >= length) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = true;
                        return ρσ_d;
                    }).call(this);
                }
                pos = this._pos;
                value = this._string.charCodeAt(this._pos++);
                ans = "\ufffd";
                if (55296 <= value && value <= 56319) {
                    if (this._pos < length) {
                        extra = this._string.charCodeAt(this._pos++);
                        if ((extra & 56320) === 56320) {
                            ans = String.fromCharCode(value, extra);
                        }
                    }
                } else if ((value & 56320) !== 56320) {
                    ans = String.fromCharCode(value);
                }
                if (with_positions) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = false;
                        ρσ_d["value"] = ρσ_list_decorate([ pos, ans ]);
                        return ρσ_d;
                    }).call(this);
                } else {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = false;
                        ρσ_d["value"] = ans;
                        return ρσ_d;
                    }).call(this);
                }
            };
            return ρσ_d;
        }).call(this);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string", "with_positions"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.uslice = (function() {
    var ρσ_anonfunc = function (string, start, end) {
        var items, iterator, r;
        items = [];
        iterator = ρσ_str.uchrs(string);
        r = iterator.next();
        while (!r.done) {
            items.push(r.value);
            r = iterator.next();
        }
        return items.slice(start || 0, (end === undefined) ? items.length : end).join("");
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string", "start", "end"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.ulen = (function() {
    var ρσ_anonfunc = function (string) {
        var iterator, r, ans;
        iterator = ρσ_str.uchrs(string);
        r = iterator.next();
        ans = 0;
        while (!r.done) {
            r = iterator.next();
            ans += 1;
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";
ρσ_str.ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
ρσ_str.ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
ρσ_str.digits = "0123456789";
ρσ_str.punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
ρσ_str.printable = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\u000b\f";
ρσ_str.whitespace = " \t\n\r\u000b\f";
define_str_func = undefined;
var str = ρσ_str, repr = ρσ_repr;;
    var ρσ_modules = {};
    ρσ_modules.encodings = {};
    ρσ_modules.uuid = {};

    (function(){
        var __name__ = "encodings";
        var utf8_decoder_table, _u8enc, utf8_encode;
        function base64encode(bytes, altchars, pad_char) {
            var l, remainder, main_length, encodings, ans, chunk;
            l = bytes.length;
            remainder = l % 3;
            main_length = l - remainder;
            encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + (altchars || "+/");
            pad_char = (pad_char === undefined) ? "=" : pad_char;
            ans = [];
            for (var i = 0; i < main_length; i += 3) {
                chunk = bytes[(typeof i === "number" && i < 0) ? bytes.length + i : i] << 16 | bytes[ρσ_bound_index(i + 1, bytes)] << 8 | bytes[ρσ_bound_index(i + 2, bytes)];
                ans.push(encodings[ρσ_bound_index((chunk & 16515072) >> 18, encodings)], encodings[ρσ_bound_index((chunk & 258048) >> 12, encodings)], encodings[ρσ_bound_index((chunk & 4032) >> 6, encodings)], encodings[ρσ_bound_index(chunk & 63, encodings)]);
            }
            if (remainder === 1) {
                chunk = bytes[(typeof main_length === "number" && main_length < 0) ? bytes.length + main_length : main_length];
                ans.push(encodings[ρσ_bound_index((chunk & 252) >> 2, encodings)], encodings[ρσ_bound_index((chunk & 3) << 4, encodings)], pad_char, pad_char);
            } else if (remainder === 2) {
                chunk = bytes[(typeof main_length === "number" && main_length < 0) ? bytes.length + main_length : main_length] << 8 | bytes[ρσ_bound_index(main_length + 1, bytes)];
                ans.push(encodings[ρσ_bound_index((chunk & 64512) >> 10, encodings)], encodings[ρσ_bound_index((chunk & 1008) >> 4, encodings)], encodings[ρσ_bound_index((chunk & 15) << 2, encodings)], pad_char);
            }
            return ans.join("");
        };
        if (!base64encode.__argnames__) Object.defineProperties(base64encode, {
            __argnames__ : {value: ["bytes", "altchars", "pad_char"]}
        });

        function base64decode(string) {
            var chars, ans, i;
            if (typeof window !== "undefined") {
                chars = window.atob(string);
            } else {
                chars = new Buffer(string, "base64").toString("binary");
            }
            ans = new Uint8Array(chars.length);
            for (var ρσ_Index0 = 0; ρσ_Index0 < ans.length; ρσ_Index0++) {
                i = ρσ_Index0;
                ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = chars.charCodeAt(i);
            }
            return ans;
        };
        if (!base64decode.__argnames__) Object.defineProperties(base64decode, {
            __argnames__ : {value: ["string"]}
        });

        function urlsafe_b64encode(bytes, pad_char) {
            return base64encode(bytes, "-_", pad_char);
        };
        if (!urlsafe_b64encode.__argnames__) Object.defineProperties(urlsafe_b64encode, {
            __argnames__ : {value: ["bytes", "pad_char"]}
        });

        function urlsafe_b64decode(string) {
            string = String.prototype.replace.call(string, /[_-]/g, (function() {
                var ρσ_anonfunc = function (m) {
                    return (m === "-") ? "+" : "/";
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["m"]}
                });
                return ρσ_anonfunc;
            })());
            return base64decode(string);
        };
        if (!urlsafe_b64decode.__argnames__) Object.defineProperties(urlsafe_b64decode, {
            __argnames__ : {value: ["string"]}
        });

        function hexlify(bytes) {
            var ans, x;
            ans = [];
            for (var i = 0; i < bytes.length; i++) {
                x = bytes[(typeof i === "number" && i < 0) ? bytes.length + i : i].toString(16);
                if (x.length === 1) {
                    x = "0" + x;
                }
                ans.push(x);
            }
            return ans.join("");
        };
        if (!hexlify.__argnames__) Object.defineProperties(hexlify, {
            __argnames__ : {value: ["bytes"]}
        });

        function unhexlify(string) {
            var num, ans, x;
            num = Math.floor(string.length / 2);
            if (num * 2 !== string.length) {
                throw new ValueError("string length is not a multiple of two");
            }
            ans = new Uint8Array(num);
            for (var i = 0; i < num; i++) {
                x = parseInt(string.slice(i * 2, i * 2 + 2), 16);
                if (isNaN(x)) {
                    throw new ValueError("string is not hex-encoded");
                }
                ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = x;
            }
            return ans;
        };
        if (!unhexlify.__argnames__) Object.defineProperties(unhexlify, {
            __argnames__ : {value: ["string"]}
        });

        utf8_decoder_table = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // 00..1f
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // 20..3f
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // 40..5f
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // 60..7f
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9, // 80..9f
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7, // a0..bf
  8,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, // c0..df
  0xa,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x4,0x3,0x3, // e0..ef
  0xb,0x6,0x6,0x6,0x5,0x8,0x8,0x8,0x8,0x8,0x8,0x8,0x8,0x8,0x8,0x8, // f0..ff
  0x0,0x1,0x2,0x3,0x5,0x8,0x7,0x1,0x1,0x1,0x4,0x6,0x1,0x1,0x1,0x1, // s0..s0
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1, // s1..s2
  1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1, // s3..s4
  1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,1,1,1, // s5..s6
  1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1, // s7..s8
];
        function _from_code_point(x) {
            if (x <= 65535) {
                return String.fromCharCode(x);
            }
            x -= 65536;
            return String.fromCharCode((x >> 10) + 55296, x % 1024 + 56320);
        };
        if (!_from_code_point.__argnames__) Object.defineProperties(_from_code_point, {
            __argnames__ : {value: ["x"]}
        });

        function utf8_decode(bytes, errors, replacement) {
            var state, ans, byte, typ, codep;
            state = 0;
            ans = [];
            for (var i = 0, l = bytes.length; i < l; i++) {
                byte = bytes[(typeof i === "number" && i < 0) ? bytes.length + i : i];
                typ = utf8_decoder_table[(typeof byte === "number" && byte < 0) ? utf8_decoder_table.length + byte : byte];
                codep = (state !== 0) ? byte & 63 | codep << 6 : 255 >> typ & byte;
                state = utf8_decoder_table[ρσ_bound_index(256 + state * 16 + typ, utf8_decoder_table)];
                if (state === 0) {
                    ans.push(_from_code_point(codep));
                } else if (state === 1) {
                    if (!errors || errors === "strict") {
                        throw new UnicodeDecodeError(str.format("The byte 0x{:02x} at position {} is not valid UTF-8", byte, i));
                    } else if (errors === "replace") {
                        ans.push(replacement || "?");
                    }
                }
            }
            return ans.join("");
        };
        if (!utf8_decode.__argnames__) Object.defineProperties(utf8_decode, {
            __argnames__ : {value: ["bytes", "errors", "replacement"]}
        });

        function utf8_encode_js(string) {
            var escstr, ans, ch, i;
            escstr = encodeURIComponent(string);
            ans = [];
            for (var i = 0; i < escstr.length; i++) {
                ch = escstr[(typeof i === "number" && i < 0) ? escstr.length + i : i];
                if (ch === "%") {
                    ans.push(parseInt(escstr.slice(i + 1, i + 3), 16));
                    i += 2;
                } else {
                    ans.push(ch.charCodeAt(0));
                }
            }
            return new Uint8Array(ans);
        };
        if (!utf8_encode_js.__argnames__) Object.defineProperties(utf8_encode_js, {
            __argnames__ : {value: ["string"]}
        });

        if (typeof TextEncoder === "function") {
            _u8enc = new TextEncoder("utf-8");
            utf8_encode = _u8enc.encode.bind(_u8enc);
            _u8enc = undefined;
        } else {
            utf8_encode = utf8_encode_js;
        }
        function utf8_encode_native(string) {
            return _u8enc.encode(string);
        };
        if (!utf8_encode_native.__argnames__) Object.defineProperties(utf8_encode_native, {
            __argnames__ : {value: ["string"]}
        });

        ρσ_modules.encodings.utf8_decoder_table = utf8_decoder_table;
        ρσ_modules.encodings._u8enc = _u8enc;
        ρσ_modules.encodings.utf8_encode = utf8_encode;
        ρσ_modules.encodings.base64encode = base64encode;
        ρσ_modules.encodings.base64decode = base64decode;
        ρσ_modules.encodings.urlsafe_b64encode = urlsafe_b64encode;
        ρσ_modules.encodings.urlsafe_b64decode = urlsafe_b64decode;
        ρσ_modules.encodings.hexlify = hexlify;
        ρσ_modules.encodings.unhexlify = unhexlify;
        ρσ_modules.encodings._from_code_point = _from_code_point;
        ρσ_modules.encodings.utf8_decode = utf8_decode;
        ρσ_modules.encodings.utf8_encode_js = utf8_encode_js;
        ρσ_modules.encodings.utf8_encode_native = utf8_encode_native;
    })();

    (function(){
        var __name__ = "uuid";
        var RFC_4122, random_bytes;
        var hexlify = ρσ_modules.encodings.hexlify;
        var urlsafe_b64decode = ρσ_modules.encodings.urlsafe_b64decode;
        var urlsafe_b64encode = ρσ_modules.encodings.urlsafe_b64encode;

        RFC_4122 = 1;
        if (typeof crypto === "object" && crypto.getRandomValues) {
            random_bytes = (function() {
                var ρσ_anonfunc = function (num) {
                    var ans;
                    ans = new Uint8Array(num || 16);
                    crypto.getRandomValues(ans);
                    return ans;
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["num"]}
                });
                return ρσ_anonfunc;
            })();
        } else {
            random_bytes = (function() {
                var ρσ_anonfunc = function (num) {
                    var ans, i;
                    ans = new Uint8Array(num || 16);
                    for (var ρσ_Index0 = 0; ρσ_Index0 < ans.length; ρσ_Index0++) {
                        i = ρσ_Index0;
                        ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = Math.floor(Math.random() * 256);
                    }
                    return ans;
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["num"]}
                });
                return ρσ_anonfunc;
            })();
        }
        function uuid4_bytes() {
            var data;
            data = random_bytes();
            data[6] = 64 | data[6] & 15;
            data[8] = (data[8] >> 4 & 3 | 8) << 4 | data[8] & 15;
            return data;
        };

        function as_str() {
            var h;
            h = this.hex;
            return h.slice(0, 8) + "-" + h.slice(8, 12) + "-" + h.slice(12, 16) + "-" + h.slice(16, 20) + "-" + h.slice(20);
        };

        function uuid4() {
            var b;
            b = uuid4_bytes();
            return (function(){
                var ρσ_d = Object.create(null);
                ρσ_d["hex"] = hexlify(b);
                ρσ_d["bytes"] = b;
                ρσ_d["variant"] = RFC_4122;
                ρσ_d["version"] = 4;
                ρσ_d["__str__"] = as_str;
                ρσ_d["toString"] = as_str;
                return ρσ_d;
            }).call(this);
        };

        function num_to_string(numbers, alphabet, pad_to_length) {
            var ans, alphabet_len, x, number;
            ans = [];
            alphabet_len = alphabet.length;
            numbers = Array.prototype.slice.call(numbers);
            for (var i = 0; i < numbers.length - 1; i++) {
                x = divmod(numbers[(typeof i === "number" && i < 0) ? numbers.length + i : i], alphabet_len);
                numbers[(typeof i === "number" && i < 0) ? numbers.length + i : i] = x[0];
                numbers[ρσ_bound_index(i + 1, numbers)] += x[1];
            }
            for (var i = 0; i < numbers.length; i++) {
                number = numbers[(typeof i === "number" && i < 0) ? numbers.length + i : i];
                while (number) {
                    x = divmod(number, alphabet_len);
                    number = x[0];
                    ans.push(alphabet[ρσ_bound_index(x[1], alphabet)]);
                }
            }
            if (pad_to_length && pad_to_length > ans.length) {
                ans.push(alphabet[0].repeat(pad_to_length - ans.length));
            }
            return ans.join("");
        };
        if (!num_to_string.__argnames__) Object.defineProperties(num_to_string, {
            __argnames__ : {value: ["numbers", "alphabet", "pad_to_length"]}
        });

        function short_uuid() {
            return urlsafe_b64encode(random_bytes(), "");
        };

        function short_uuid4() {
            return urlsafe_b64encode(uuid4_bytes(), "");
        };

        function decode_short_uuid(val) {
            return urlsafe_b64decode(val + "==");
        };
        if (!decode_short_uuid.__argnames__) Object.defineProperties(decode_short_uuid, {
            __argnames__ : {value: ["val"]}
        });

        ρσ_modules.uuid.RFC_4122 = RFC_4122;
        ρσ_modules.uuid.random_bytes = random_bytes;
        ρσ_modules.uuid.uuid4_bytes = uuid4_bytes;
        ρσ_modules.uuid.as_str = as_str;
        ρσ_modules.uuid.uuid4 = uuid4;
        ρσ_modules.uuid.num_to_string = num_to_string;
        ρσ_modules.uuid.short_uuid = short_uuid;
        ρσ_modules.uuid.short_uuid4 = short_uuid4;
        ρσ_modules.uuid.decode_short_uuid = decode_short_uuid;
    })();

    (function(){

        var __name__ = "__main__";


        var uuid = ρσ_modules.uuid;

        function toJSON(obj) {
            return JSON.stringify(obj, undefined, 4);
        };
        if (!toJSON.__argnames__) Object.defineProperties(toJSON, {
            __argnames__ : {value: ["obj"]}
        });

        function toBlob(obj) {
            return new Blob(ρσ_list_decorate([ toJSON(obj) ]), (function(){
                var ρσ_d = {};
                ρσ_d["type"] = "text/json";
                return ρσ_d;
            }).call(this));
        };
        if (!toBlob.__argnames__) Object.defineProperties(toBlob, {
            __argnames__ : {value: ["obj"]}
        });

        function Campaign() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Campaign.prototype.__init__.apply(this, arguments);
        }
        Campaign.prototype.__init__ = function __init__(title) {
            var self = this;
            self.title = title;
            self.campaign = {};
            self.zip = null;
            self._pending_operations = ρσ_list_decorate([]);
            self._total_size = 0;
        };
        if (!Campaign.prototype.__init__.__argnames__) Object.defineProperties(Campaign.prototype.__init__, {
            __argnames__ : {value: ["title"]}
        });
        Campaign.__argnames__ = Campaign.prototype.__init__.__argnames__;
        Campaign.__handles_kwarg_interpolation__ = Campaign.prototype.__init__.__handles_kwarg_interpolation__;
        Campaign.prototype.newPendingOperation = function newPendingOperation() {
            var self = this;
            var id;
            id = str(uuid.uuid4());
            self._pending_operations.append(id);
            return id;
        };
        Campaign.prototype.hasPendingOperation = function hasPendingOperation() {
            var self = this;
            return self._pending_operations.length > 0;
        };
        Campaign.prototype.completedOperation = function completedOperation(id) {
            var self = this;
            var left, display;
            try {
                self._pending_operations.remove(id);
            } catch (ρσ_Exception) {
                ρσ_last_exception = ρσ_Exception;
                {
                } 
            }
            left = self._pending_operations.length;
            display = left > 100 && ρσ_equals(left % 100, 0) || left < 100 && ρσ_equals(left % 10, 0);
            if (display) {
                console.log("Download operations still in progress : ", left);
            }
            return !self.hasPendingOperation();
        };
        if (!Campaign.prototype.completedOperation.__argnames__) Object.defineProperties(Campaign.prototype.completedOperation, {
            __argnames__ : {value: ["id"]}
        });
        Campaign.prototype.clearPendingOperations = function clearPendingOperations() {
            var self = this;
            self._pending_operations = ρσ_list_decorate([]);
        };
        Campaign.prototype.findID = function findID() {
            var self = this;
            var id = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var obj_type = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? findID.__defaults__.obj_type : arguments[1];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "obj_type")){
                obj_type = ρσ_kwargs_obj.obj_type;
            }
            var find_id, handout, page, char, track;
            find_id = (function() {
                var ρσ_anonfunc = function (o) {
                    return (o.id === id || typeof o.id === "object" && ρσ_equals(o.id, id));
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["o"]}
                });
                return ρσ_anonfunc;
            })();
            if ((obj_type === "handout" || typeof obj_type === "object" && ρσ_equals(obj_type, "handout")) || obj_type === null) {
                handout = self.campaign.handouts.find(find_id);
                if ((typeof handout !== "undefined" && handout !== null)) {
                    return handout;
                }
            }
            if ((obj_type === "page" || typeof obj_type === "object" && ρσ_equals(obj_type, "page")) || obj_type === null) {
                page = self.campaign.pages.find(find_id);
                if ((typeof page !== "undefined" && page !== null)) {
                    return page;
                }
            }
            if ((obj_type === "character" || typeof obj_type === "object" && ρσ_equals(obj_type, "character")) || obj_type === null) {
                char = self.campaign.characters.find(find_id);
                if ((typeof char !== "undefined" && char !== null)) {
                    return char;
                }
            }
            if ((obj_type === "track" || typeof obj_type === "object" && ρσ_equals(obj_type, "track")) || obj_type === null) {
                track = self.campaign.jukebox.find(find_id);
                if ((typeof track !== "undefined" && track !== null)) {
                    return track;
                }
            }
            return null;
        };
        if (!Campaign.prototype.findID.__defaults__) Object.defineProperties(Campaign.prototype.findID, {
            __defaults__ : {value: {obj_type:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["id", "obj_type"]}
        });
        Campaign.prototype._createZipFile = function _createZipFile() {
            var self = this;
            return (new window.zip.fs.FS).root;
        };
        Campaign.prototype._addZipFolder = function _addZipFolder(zip, filename) {
            var self = this;
            return zip.addDirectory(filename);
        };
        if (!Campaign.prototype._addZipFolder.__argnames__) Object.defineProperties(Campaign.prototype._addZipFolder, {
            __argnames__ : {value: ["zip", "filename"]}
        });
        Campaign.prototype._addFileToZip = function _addFileToZip(zip, filename, content) {
            var self = this;
            zip.addBlob(filename, content);
            if (ρσ_exists.n(content.size)) {
                self._total_size += content.size;
            } else if (ρσ_exists.n(content.length)) {
                self._total_size += content.length;
            }
        };
        if (!Campaign.prototype._addFileToZip.__argnames__) Object.defineProperties(Campaign.prototype._addFileToZip, {
            __argnames__ : {value: ["zip", "filename", "content"]}
        });
        Campaign.prototype._exportZip = function _exportZip(zip, fileEntry, onend, onprogress, onerror) {
            var self = this;
            var done, addEntryToZipWriter, addEntryToZipWriterDelayed, zipWriterCreated;
            window.zip.useWebWorkers = false;
            self._current_size = 0;
            done = (function() {
                var ρσ_anonfunc = function (writer) {
                    writer.close(onend);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["writer"]}
                });
                return ρσ_anonfunc;
            })();
            addEntryToZipWriter = (function() {
                var ρσ_anonfunc = function (writer, zip) {
                    setTimeout(function () {
                        addEntryToZipWriterDelayed(writer, zip);
                    }, 0);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["writer", "zip"]}
                });
                return ρσ_anonfunc;
            })();
            addEntryToZipWriterDelayed = (function() {
                var ρσ_anonfunc = function (writer, zip) {
                    var makeCB, partialprogress, current, idx;
                    makeCB = (function() {
                        var ρσ_anonfunc = function (c) {
                            return function () {
                                self._current_size += (ρσ_exists.n(c.data)) ? c.data.size : 0;
                                onprogress(self._current_size, self._total_size);
                                addEntryToZipWriter(writer, zip);
                            };
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["c"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    partialprogress = (function() {
                        var ρσ_anonfunc = function (bytes) {
                            onprogress(self._current_size + bytes, self._total_size);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["bytes"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    current = zip;
                    var ρσ_Iter0 = ρσ_Iterable(self._zip_add_indices);
                    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                        idx = ρσ_Iter0[ρσ_Index0];
                        current = (ρσ_expr_temp = current.children)[(typeof idx === "number" && idx < 0) ? ρσ_expr_temp.length + idx : idx];
                    }
                    if (!(typeof current !== "undefined" && current !== null)) {
                        self._zip_add_indices.pop();
                        if ((self._zip_add_indices.length === 0 || typeof self._zip_add_indices.length === "object" && ρσ_equals(self._zip_add_indices.length, 0))) {
                            done(writer);
                        } else {
                            (ρσ_expr_temp = self._zip_add_indices)[ρσ_expr_temp.length-1] += 1;
                            addEntryToZipWriterDelayed(writer, zip);
                        }
                        return;
                    }
                    if (current.directory) {
                        self._zip_add_indices.append(0);
                        writer.add(current.getFullname(), null, makeCB(current), partialprogress, (function(){
                            var ρσ_d = {};
                            ρσ_d["directory"] = current.directory;
                            ρσ_d["version"] = current.zipVersion;
                            return ρσ_d;
                        }).call(this));
                    } else {
                        (ρσ_expr_temp = self._zip_add_indices)[ρσ_expr_temp.length-1] += 1;
                        writer.add(current.getFullname(), new current.Reader(current.data, onerror), makeCB(current), partialprogress, (function(){
                            var ρσ_d = {};
                            ρσ_d["version"] = current.zipVersion;
                            return ρσ_d;
                        }).call(this));
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["writer", "zip"]}
                });
                return ρσ_anonfunc;
            })();
            zipWriterCreated = (function() {
                var ρσ_anonfunc = function (writer) {
                    self._zip_add_indices = ρσ_list_decorate([ 0 ]);
                    addEntryToZipWriter(writer, zip);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["writer"]}
                });
                return ρσ_anonfunc;
            })();
            window.zip.createWriter(new window.zip.FileWriter(fileEntry, "application/zip"), zipWriterCreated, onerror);
        };
        if (!Campaign.prototype._exportZip.__argnames__) Object.defineProperties(Campaign.prototype._exportZip, {
            __argnames__ : {value: ["zip", "fileEntry", "onend", "onprogress", "onerror"]}
        });
        Campaign.prototype._saveZipToFile = function _saveZipToFile(zip, filename) {
            var self = this;
            var BYTES, DIV, size, div, requestFileSystem, createTempFile;
            BYTES = ρσ_list_decorate([ "Bytes", "KB", "MB", "GB" ]);
            DIV = ρσ_list_decorate([ 1, 1024, 1024 * 1024, 1024 * 1024 * 1024 ]);
            size = self._total_size;
            div = 0;
            while (size / 1024 > 1 && div + 1 < DIV.length) {
                size /= 1024;
                div += 1;
            }
            console.log("Done downloading resources!");
            console.log("Generating ZIP file with ", size.toFixed(2), BYTES[(typeof div === "number" && div < 0) ? BYTES.length + div : div] + " of data");
            console.warn("It is highly recommended to keep this tab focused and the window non-minimized during the entire process\notherwise it could take hours instead of minutes to generate the ZIP file for your campaign.\nYou can separate the tab into its own window if you want to keep using your browser in the meantime.");
            requestFileSystem = window.webkitRequestFileSystem || window.mozRequestFileSystem || window.requestFileSystem;
            createTempFile = (function() {
                var ρσ_anonfunc = function (tempCB) {
                    var tmpFilename;
                    tmpFilename = "tmp.zip";
                    requestFileSystem(window.TEMPORARY, 4 * 1024 * 1024 * 1024, (function() {
                        var ρσ_anonfunc = function (filesystem) {
                            var create;
                            create = function () {
                                filesystem.root.getFile(tmpFilename, (function(){
                                    var ρσ_d = {};
                                    ρσ_d["create"] = true;
                                    return ρσ_d;
                                }).call(this), (function() {
                                    var ρσ_anonfunc = function (zipFile) {
                                        tempCB(zipFile);
                                    };
                                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                        __argnames__ : {value: ["zipFile"]}
                                    });
                                    return ρσ_anonfunc;
                                })());
                            };
                            filesystem.root.getFile(tmpFilename, null, (function() {
                                var ρσ_anonfunc = function (entry) {
                                    entry.remove(create, create);
                                };
                                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                    __argnames__ : {value: ["entry"]}
                                });
                                return ρσ_anonfunc;
                            })(), create);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["filesystem"]}
                        });
                        return ρσ_anonfunc;
                    })());
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["tempCB"]}
                });
                return ρσ_anonfunc;
            })();
            createTempFile((function() {
                var ρσ_anonfunc = function (fileEntry) {
                    self._last_progress = -5;
                    self._exportZip(zip, fileEntry, function () {
                        console.log("Congratulations! The Campaign.zip file was generated successfully.\nStarting download.");
                        fileEntry.file((function() {
                            var ρσ_anonfunc = function (f) {
                                window.saveAs(f, filename);
                            };
                            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                __argnames__ : {value: ["f"]}
                            });
                            return ρσ_anonfunc;
                        })());
                    }, (function() {
                        var ρσ_anonfunc = function (current, total) {
                            var percent;
                            percent = 100 * current / total;
                            if (percent - self._last_progress >= 5) {
                                console.log("Zip file generated : " + percent.toFixed(2) + " %");
                                self._last_progress = Math.floor(percent / 5) * 5;
                            }
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["current", "total"]}
                        });
                        return ρσ_anonfunc;
                    })(), (function() {
                        var ρσ_anonfunc = function (message) {
                            console.log("Error creating zip file writer : ", message);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["message"]}
                        });
                        return ρσ_anonfunc;
                    })());
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["fileEntry"]}
                });
                return ρσ_anonfunc;
            })());
        };
        if (!Campaign.prototype._saveZipToFile.__argnames__) Object.defineProperties(Campaign.prototype._saveZipToFile, {
            __argnames__ : {value: ["zip", "filename"]}
        });
        Campaign.prototype.parsePage = function parsePage(page) {
            var self = this;
            var data, path;
            data = page.toJSON();
            data.zorder = data.zorder.split(",");
            data.graphics = (ρσ_exists.n(page.thegraphics)) ? page.thegraphics.toJSON() : ρσ_list_decorate([]);
            data.texts = (ρσ_exists.n(page.thetexts)) ? page.thetexts.toJSON() : ρσ_list_decorate([]);
            data.paths = (ρσ_exists.n(page.thepaths)) ? page.thepaths.toJSON() : ρσ_list_decorate([]);
            var ρσ_Iter1 = ρσ_Iterable(data.paths);
            for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                path = ρσ_Iter1[ρσ_Index1];
                path.path = JSON.parse(path.path);
            }
            return data;
        };
        if (!Campaign.prototype.parsePage.__argnames__) Object.defineProperties(Campaign.prototype.parsePage, {
            __argnames__ : {value: ["page"]}
        });
        Campaign.prototype.parsePages = function parsePages(pages) {
            var self = this;
            var array, id, makeCB, page;
            array = ρσ_list_decorate([]);
            var ρσ_Iter2 = ρσ_Iterable(pages.models);
            for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
                page = ρσ_Iter2[ρσ_Index2];
                if (page.fullyLoaded) {
                    array.append(self.parsePage(page));
                } else {
                    id = self.newPendingOperation();
                    makeCB = (function() {
                        var ρσ_anonfunc = function (a, i, p) {
                            return function () {
                                a.append(self.parsePage(p));
                                self.completedOperation(i);
                            };
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["a", "i", "p"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    page.fullyLoadPage();
                    setTimeout(makeCB(array, id, page), 1e3);
                }
            }
            console.log("Finished parsing pages.");
            return array;
        };
        if (!Campaign.prototype.parsePages.__argnames__) Object.defineProperties(Campaign.prototype.parsePages, {
            __argnames__ : {value: ["pages"]}
        });
        Campaign.prototype.updateModel = function updateModel(data, key, blob, id, cb) {
            var self = this;
            if (ρσ_in(key, ρσ_list_decorate([ "bio", "gmnotes", "notes" ]))) {
                data[(typeof key === "number" && key < 0) ? data.length + key : key] = window.unescape(blob);
            } else if ((key === "defaulttoken" || typeof key === "object" && ρσ_equals(key, "defaulttoken"))) {
                data[(typeof key === "number" && key < 0) ? data.length + key : key] = JSON.parse(blob);
            } else {
                data[(typeof key === "number" && key < 0) ? data.length + key : key] = blob;
            }
            if (self.completedOperation(id) && cb) {
                cb();
            }
        };
        if (!Campaign.prototype.updateModel.__argnames__) Object.defineProperties(Campaign.prototype.updateModel, {
            __argnames__ : {value: ["data", "key", "blob", "id", "cb"]}
        });
        Campaign.prototype.parseCharacter = function parseCharacter(character, cb) {
            var self = this;
            var data, bio_id, gmnotes_id, token_id;
            data = character.toJSON();
            data.inplayerjournals = data.inplayerjournals.split(",");
            data.controlledby = data.controlledby.split(",");
            if ((data.bio !== "" && (typeof data.bio !== "object" || ρσ_not_equals(data.bio, "")))) {
                delete data.bio;
                bio_id = self.newPendingOperation();
                character._getLatestBlob("bio", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "bio", blob, bio_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            if ((data.gmnotes !== "" && (typeof data.gmnotes !== "object" || ρσ_not_equals(data.gmnotes, "")))) {
                delete data.gmnotes;
                gmnotes_id = self.newPendingOperation();
                character._getLatestBlob("gmnotes", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "gmnotes", blob, gmnotes_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            if ((data.defaulttoken !== "" && (typeof data.defaulttoken !== "object" || ρσ_not_equals(data.defaulttoken, "")))) {
                delete data.defaulttoken;
                token_id = self.newPendingOperation();
                character._getLatestBlob("defaulttoken", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "defaulttoken", blob, token_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            data.attributes = character.attribs.toJSON();
            data.abilities = character.abilities.toJSON();
            return data;
        };
        if (!Campaign.prototype.parseCharacter.__argnames__) Object.defineProperties(Campaign.prototype.parseCharacter, {
            __argnames__ : {value: ["character", "cb"]}
        });
        Campaign.prototype.parseCharacters = function parseCharacters(characters, cb) {
            var self = this;
            var array, character;
            array = ρσ_list_decorate([]);
            var ρσ_Iter3 = ρσ_Iterable(characters.models);
            for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                character = ρσ_Iter3[ρσ_Index3];
                array.append(self.parseCharacter(character, cb));
            }
            console.log("Finished parsing characters.");
            return array;
        };
        if (!Campaign.prototype.parseCharacters.__argnames__) Object.defineProperties(Campaign.prototype.parseCharacters, {
            __argnames__ : {value: ["characters", "cb"]}
        });
        Campaign.prototype.parseHandout = function parseHandout(handout, cb) {
            var self = this;
            var data, notes_id, gmnotes_id;
            data = handout.toJSON();
            data.inplayerjournals = data.inplayerjournals.split(",");
            data.controlledby = data.controlledby.split(",");
            if ((data.notes !== "" && (typeof data.notes !== "object" || ρσ_not_equals(data.notes, "")))) {
                delete data.notes;
                notes_id = self.newPendingOperation();
                handout._getLatestBlob("notes", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "notes", blob, notes_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            if ((data.gmnotes !== "" && (typeof data.gmnotes !== "object" || ρσ_not_equals(data.gmnotes, "")))) {
                delete data.gmnotes;
                gmnotes_id = self.newPendingOperation();
                handout._getLatestBlob("gmnotes", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "gmnotes", blob, gmnotes_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            return data;
        };
        if (!Campaign.prototype.parseHandout.__argnames__) Object.defineProperties(Campaign.prototype.parseHandout, {
            __argnames__ : {value: ["handout", "cb"]}
        });
        Campaign.prototype.parseHandouts = function parseHandouts(handouts, cb) {
            var self = this;
            var array, handout;
            array = ρσ_list_decorate([]);
            var ρσ_Iter4 = ρσ_Iterable(handouts.models);
            for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
                handout = ρσ_Iter4[ρσ_Index4];
                array.append(self.parseHandout(handout, cb));
            }
            console.log("Finished parsing handouts.");
            return array;
        };
        if (!Campaign.prototype.parseHandouts.__argnames__) Object.defineProperties(Campaign.prototype.parseHandouts, {
            __argnames__ : {value: ["handouts", "cb"]}
        });
        Campaign.prototype.parsePlayer = function parsePlayer(player) {
            var self = this;
            var data;
            data = player.toJSON();
            if (data.journalfolderstatus) {
                data.journalfolderstatus = data.journalfolderstatus.split(",");
            }
            if (data.jukeboxfolderstatus) {
                data.jukebosfolderstatus = data.jukeboxfolderstatus.split(",");
            }
            if (data.macrobar) {
                data.macrobar = data.macrobar.split(",");
            }
            if (data.adv_fow_revealed) {
                data.adv_fow_revealed = JSON.parse(data.adv_fow_revealed);
            }
            return data;
        };
        if (!Campaign.prototype.parsePlayer.__argnames__) Object.defineProperties(Campaign.prototype.parsePlayer, {
            __argnames__ : {value: ["player"]}
        });
        Campaign.prototype.parsePlayers = function parsePlayers(players) {
            var self = this;
            var array, player;
            array = ρσ_list_decorate([]);
            var ρσ_Iter5 = ρσ_Iterable(players.models);
            for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
                player = ρσ_Iter5[ρσ_Index5];
                array.append(self.parsePlayer(player));
            }
            console.log("Finished parsing players.");
            return array;
        };
        if (!Campaign.prototype.parsePlayers.__argnames__) Object.defineProperties(Campaign.prototype.parsePlayers, {
            __argnames__ : {value: ["players"]}
        });
        Campaign.prototype.loadArchivedPages = function loadArchivedPages() {
            var self = this;
            var num_loaded, page;
            num_loaded = 0;
            var ρσ_Iter6 = ρσ_Iterable(window.Campaign.pages.models);
            for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
                page = ρσ_Iter6[ρσ_Index6];
                if (!page.fullyLoaded) {
                    page.fullyLoadPage();
                    num_loaded += 1;
                }
            }
            return num_loaded;
        };
        Campaign.prototype._parseChatArchiveHTML = function _parseChatArchiveHTML(obj, html) {
            var self = this;
            var scripts, prefix, content, start, end, chat, i;
            scripts = window.$(html).filter("script[type='text/javascript']");
            prefix = "var msgdata = \"";
            for (var ρσ_Index7 = 0; ρσ_Index7 < scripts.length; ρσ_Index7++) {
                i = ρσ_Index7;
                content = scripts[(typeof i === "number" && i < 0) ? scripts.length + i : i].textContent.trim();
                if (content.startsWith(prefix)) {
                    start = len(prefix);
                    end = content.indexOf("\";", start);
                    try {
                        chat = window.atob(content.slice(start, end));
                        obj.chat_archive = JSON.parse(chat);
                    } catch (ρσ_Exception) {
                        ρσ_last_exception = ρσ_Exception;
                        if (ρσ_Exception instanceof Error) {
                            var e = ρσ_Exception;
                            console.log("Unable to parse chat data: ", e);
                        } else {
                            throw ρσ_Exception;
                        }
                    }
                    break;
                }
            }
        };
        if (!Campaign.prototype._parseChatArchiveHTML.__argnames__) Object.defineProperties(Campaign.prototype._parseChatArchiveHTML, {
            __argnames__ : {value: ["obj", "html"]}
        });
        Campaign.prototype._fetchChatArchive = function _fetchChatArchive(obj, done) {
            var self = this;
            var id, errorcb, cb;
            id = self.newPendingOperation();
            errorcb = function () {
                if (self.completedOperation(id) && done) {
                    done();
                }
            };
            cb = (function() {
                var ρσ_anonfunc = function (blob) {
                    var f;
                    f = new FileReader;
                    f.onerror = errorcb;
                    f.onabort = errorcb;
                    f.onload = function () {
                        self._parseChatArchiveHTML(obj, f.result);
                        if (self.completedOperation(id) && done) {
                            done();
                        }
                    };
                    f.readAsText(blob);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["blob"]}
                });
                return ρσ_anonfunc;
            })();
            self.downloadResource("https://app.roll20.net/campaigns/chatarchive/" + obj.campaign_id, cb, errorcb);
        };
        if (!Campaign.prototype._fetchChatArchive.__argnames__) Object.defineProperties(Campaign.prototype._fetchChatArchive, {
            __argnames__ : {value: ["obj", "done"]}
        });
        Campaign.prototype._parseCampaignDelayed = function _parseCampaignDelayed(result, cb) {
            var self = this;
            var done, id;
            done = function () {
                if (cb) {
                    cb(result);
                }
            };
            id = self.newPendingOperation();
            result.handouts = self.parseHandouts(window.Campaign.handouts, done);
            result.characters = self.parseCharacters(window.Campaign.characters, done);
            result.pages = self.parsePages(window.Campaign.pages);
            result.players = self.parsePlayers(window.Campaign.players);
            result.jukebox = window.Jukebox.playlist.toJSON();
            self._fetchChatArchive(result, done);
            if ((result.jukeboxfolder !== "" && (typeof result.jukeboxfolder !== "object" || ρσ_not_equals(result.jukeboxfolder, "")))) {
                result.jukeboxfolder = JSON.parse(result.jukeboxfolder);
            }
            if ((result.journalfolder !== "" && (typeof result.journalfolder !== "object" || ρσ_not_equals(result.journalfolder, "")))) {
                result.journalfolder = JSON.parse(result.journalfolder);
            }
            if ((result.turnorder !== "" && (typeof result.turnorder !== "object" || ρσ_not_equals(result.turnorder, "")))) {
                result.turnorder = JSON.parse(result.turnorder);
            }
            console.log("Download operations in progress : ", self._pending_operations.length);
            if (self.completedOperation(id)) {
                done();
            }
        };
        if (!Campaign.prototype._parseCampaignDelayed.__argnames__) Object.defineProperties(Campaign.prototype._parseCampaignDelayed, {
            __argnames__ : {value: ["result", "cb"]}
        });
        Campaign.prototype.parseCampaign = function parseCampaign(cb) {
            var self = this;
            var num_loaded, result;
            num_loaded = self.loadArchivedPages();
            result = window.Campaign.toJSON();
            result.campaign_title = self.title;
            result.account_id = window.d20_account_id;
            result.campaign_id = window.campaign_id;
            self.campaign = result;
            console.log("Waiting ", num_loaded * 5, " seconds for ", num_loaded, " archived pages to finish loading");
            setTimeout(function () {
                self._parseCampaignDelayed(result, cb);
            }, num_loaded * 5e3);
            return result;
        };
        if (!Campaign.prototype.parseCampaign.__argnames__) Object.defineProperties(Campaign.prototype.parseCampaign, {
            __argnames__ : {value: ["cb"]}
        });
        Campaign.prototype.saveCampaign = function saveCampaign() {
            var self = this;
            var filename = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? saveCampaign.__defaults__.filename : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "filename")){
                filename = ρσ_kwargs_obj.filename;
            }
            window.saveAs(toBlob(self.campaign), (filename) ? filename : self.title + ".json");
        };
        if (!Campaign.prototype.saveCampaign.__defaults__) Object.defineProperties(Campaign.prototype.saveCampaign, {
            __defaults__ : {value: {filename:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["filename"]}
        });
        Campaign.prototype.exportCampaignJson = function exportCampaignJson() {
            var self = this;
            var filename = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? exportCampaignJson.__defaults__.filename : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "filename")){
                filename = ρσ_kwargs_obj.filename;
            }
            self.parseCampaign(function () {
                self.saveCampaign(filename);
            });
        };
        if (!Campaign.prototype.exportCampaignJson.__defaults__) Object.defineProperties(Campaign.prototype.exportCampaignJson, {
            __defaults__ : {value: {filename:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["filename"]}
        });
        Campaign.prototype.exportCampaign = function exportCampaign() {
            var self = this;
            self.exportCampaignJson();
        };
        Campaign.prototype._imageToBlob = function _imageToBlob(img, id, cb) {
            var self = this;
            var c, ctx;
            c = document.createElement("canvas");
            ctx = c.getContext("2d");
            c.width = img.naturalWidth;
            c.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0);
            c.toBlob((function() {
                var ρσ_anonfunc = function (blob) {
                    self.completedOperation(id);
                    cb(blob);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["blob"]}
                });
                return ρσ_anonfunc;
            })(), "image/jpeg", .75);
        };
        if (!Campaign.prototype._imageToBlob.__argnames__) Object.defineProperties(Campaign.prototype._imageToBlob, {
            __argnames__ : {value: ["img", "id", "cb"]}
        });
        Campaign.prototype.downloadImageViaCanvas = function downloadImageViaCanvas() {
            var self = this;
            var url = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var cb = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
            var errorCB = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? downloadImageViaCanvas.__defaults__.errorCB : arguments[2];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "errorCB")){
                errorCB = ρσ_kwargs_obj.errorCB;
            }
            var id, img;
            id = self.newPendingOperation();
            img = new Image;
            img.onload = (function() {
                var ρσ_anonfunc = function (ev) {
                    self._imageToBlob(img, id, cb);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["ev"]}
                });
                return ρσ_anonfunc;
            })();
            img.onerror = (function() {
                var ρσ_anonfunc = function (error) {
                    self.completedOperation(id);
                    if (errorCB) {
                        errorCB();
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["error"]}
                });
                return ρσ_anonfunc;
            })();
            img.crossOrigin = "";
            img.src = url;
        };
        if (!Campaign.prototype.downloadImageViaCanvas.__defaults__) Object.defineProperties(Campaign.prototype.downloadImageViaCanvas, {
            __defaults__ : {value: {errorCB:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["url", "cb", "errorCB"]}
        });
        Campaign.prototype.downloadResource = function downloadResource() {
            var self = this;
            var url = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var cb = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
            var errorCB = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? downloadResource.__defaults__.errorCB : arguments[2];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "errorCB")){
                errorCB = ρσ_kwargs_obj.errorCB;
            }
            var id;
            id = self.newPendingOperation();
            window.fetch(url).then((function() {
                var ρσ_anonfunc = function (response) {
                    if ((response.status === 200 || typeof response.status === "object" && ρσ_equals(response.status, 200)) || (response.status === 0 || typeof response.status === "object" && ρσ_equals(response.status, 0))) {
                        return Promise.resolve(response.blob());
                    } else {
                        return Promise.reject(new Error(response.statusText));
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["response"]}
                });
                return ρσ_anonfunc;
            })()).then((function() {
                var ρσ_anonfunc = function (blob) {
                    self.completedOperation(id);
                    if (cb) {
                        cb(blob);
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["blob"]}
                });
                return ρσ_anonfunc;
            })()).catch((function() {
                var ρσ_anonfunc = function (error) {
                    self.completedOperation(id);
                    if (errorCB) {
                        errorCB();
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["error"]}
                });
                return ρσ_anonfunc;
            })());
        };
        if (!Campaign.prototype.downloadResource.__defaults__) Object.defineProperties(Campaign.prototype.downloadResource, {
            __defaults__ : {value: {errorCB:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["url", "cb", "errorCB"]}
        });
        Campaign.prototype.downloadR20Resource = function downloadR20Resource() {
            var self = this;
            var folder = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var prefix = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
            var url = ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[2];
            var finallyCB = ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[3];
            var try_files = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? downloadR20Resource.__defaults__.try_files : arguments[4];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "try_files")){
                try_files = ρσ_kwargs_obj.try_files;
            }
            var filename, new_url, errorCB;
            filename = (ρσ_expr_temp = url.split("/"))[ρσ_expr_temp.length-1].split(".")[0];
            if (try_files.length > 0) {
                if (ρσ_in(filename, ρσ_list_decorate([ "original", "max", "med", "thumb" ]))) {
                    new_url = url.replace("/" + filename + ".", "/" + try_files[0] + ".");
                } else {
                    new_url = url;
                    try_files = ρσ_list_decorate([ "" ]);
                }
                errorCB = function () {
                    self.downloadR20Resource(folder, prefix, url, finallyCB, try_files.slice(1));
                };
                self.downloadResource(new_url, self._makeAddBlobToZip(folder, prefix + ".png", finallyCB), errorCB);
            } else {
                self.downloadImageViaCanvas(url, self._makeAddBlobToZip(folder, prefix + ".png", finallyCB), function () {
                    console.log("Couldn't download ", url, " with any alternative filename. Resource has become unavailable");
                    finallyCB();
                });
            }
        };
        if (!Campaign.prototype.downloadR20Resource.__defaults__) Object.defineProperties(Campaign.prototype.downloadR20Resource, {
            __defaults__ : {value: {try_files:ρσ_list_decorate([ "original", "max", "med", "thumb" ])}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["folder", "prefix", "url", "finallyCB", "try_files"]}
        });
        Campaign.prototype._makeNameUnique = function _makeNameUnique(names, orig_name) {
            var self = this;
            var name;
            name = str(names.length).padStart(3, "0") + " - " + orig_name;
            names.append(name);
            return name;
        };
        if (!Campaign.prototype._makeNameUnique.__argnames__) Object.defineProperties(Campaign.prototype._makeNameUnique, {
            __argnames__ : {value: ["names", "orig_name"]}
        });
        Campaign.prototype._flattenJournalEntries = function _flattenJournalEntries() {
            var self = this;
            var journal = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var _list = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? _flattenJournalEntries.__defaults__._list : arguments[1];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "_list")){
                _list = ρσ_kwargs_obj._list;
            }
            var entry;
            var ρσ_Iter8 = ρσ_Iterable(journal);
            for (var ρσ_Index8 = 0; ρσ_Index8 < ρσ_Iter8.length; ρσ_Index8++) {
                entry = ρσ_Iter8[ρσ_Index8];
                if ((typeof entry === "string" || typeof typeof entry === "object" && ρσ_equals(typeof entry, "string"))) {
                    _list.append(entry);
                } else {
                    self._flattenJournalEntries(entry.i, _list);
                }
            }
            return _list;
        };
        if (!Campaign.prototype._flattenJournalEntries.__defaults__) Object.defineProperties(Campaign.prototype._flattenJournalEntries, {
            __defaults__ : {value: {_list:ρσ_list_decorate([])}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["journal", "_list"]}
        });
        Campaign.prototype._makeAddBlobToZip = function _makeAddBlobToZip(folder, filename, finallyCB) {
            var self = this;
            return (function() {
                var ρσ_anonfunc = function (blob) {
                    self._addFileToZip(folder, filename, blob);
                    finallyCB();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["blob"]}
                });
                return ρσ_anonfunc;
            })();
        };
        if (!Campaign.prototype._makeAddBlobToZip.__argnames__) Object.defineProperties(Campaign.prototype._makeAddBlobToZip, {
            __argnames__ : {value: ["folder", "filename", "finallyCB"]}
        });
        Campaign.prototype._addCharacterToZip = function _addCharacterToZip(folder, character, finallyCB) {
            var self = this;
            self._addFileToZip(folder, "character.json", toBlob(character));
            if ((ρσ_exists.e(character.avatar, "") !== "" && (typeof ρσ_exists.e(character.avatar, "") !== "object" || ρσ_not_equals(ρσ_exists.e(character.avatar, ""), "")))) {
                self.downloadR20Resource(folder, "avatar", character.avatar, finallyCB);
            }
            if (ρσ_exists.n(character.defaulttoken) && (ρσ_exists.e(character.defaulttoken.imgsrc, "") !== "" && (typeof ρσ_exists.e(character.defaulttoken.imgsrc, "") !== "object" || ρσ_not_equals(ρσ_exists.e(character.defaulttoken.imgsrc, ""), "")))) {
                self.downloadR20Resource(folder, "token", character.defaulttoken.imgsrc, finallyCB);
            }
            if ((ρσ_exists.e(character.bio, "") !== "" && (typeof ρσ_exists.e(character.bio, "") !== "object" || ρσ_not_equals(ρσ_exists.e(character.bio, ""), "")))) {
                self._addFileToZip(folder, "bio.html", new Blob(ρσ_list_decorate([ character.bio ])));
            }
            if ((ρσ_exists.e(character.gmnotes, "") !== "" && (typeof ρσ_exists.e(character.gmnotes, "") !== "object" || ρσ_not_equals(ρσ_exists.e(character.gmnotes, ""), "")))) {
                self._addFileToZip(folder, "gmnotes.html", new Blob(ρσ_list_decorate([ character.gmnotes ])));
            }
        };
        if (!Campaign.prototype._addCharacterToZip.__argnames__) Object.defineProperties(Campaign.prototype._addCharacterToZip, {
            __argnames__ : {value: ["folder", "character", "finallyCB"]}
        });
        Campaign.prototype._addHandoutToZip = function _addHandoutToZip(folder, handout, finallyCB) {
            var self = this;
            self._addFileToZip(folder, "handout.json", toBlob(handout));
            if ((ρσ_exists.e(handout.avatar, "") !== "" && (typeof ρσ_exists.e(handout.avatar, "") !== "object" || ρσ_not_equals(ρσ_exists.e(handout.avatar, ""), "")))) {
                self.downloadR20Resource(folder, "avatar", handout.avatar, finallyCB);
            }
            if ((ρσ_exists.e(handout.notes, "") !== "" && (typeof ρσ_exists.e(handout.notes, "") !== "object" || ρσ_not_equals(ρσ_exists.e(handout.notes, ""), "")))) {
                self._addFileToZip(folder, "notes.html", new Blob(ρσ_list_decorate([ handout.notes ])));
            }
            if ((ρσ_exists.e(handout.gmnotes, "") !== "" && (typeof ρσ_exists.e(handout.gmnotes, "") !== "object" || ρσ_not_equals(ρσ_exists.e(handout.gmnotes, ""), "")))) {
                self._addFileToZip(folder, "gmnotes.html", new Blob(ρσ_list_decorate([ handout.gmnotes ])));
            }
        };
        if (!Campaign.prototype._addHandoutToZip.__argnames__) Object.defineProperties(Campaign.prototype._addHandoutToZip, {
            __argnames__ : {value: ["folder", "handout", "finallyCB"]}
        });
        Campaign.prototype._addJournalToZip = function _addJournalToZip(folder, journal, finallyCB) {
            var self = this;
            var names, handout, name, handout_dir, character, char_dir, child_dir, journal_entry;
            names = ρσ_list_decorate([]);
            var ρσ_Iter9 = ρσ_Iterable(journal);
            for (var ρσ_Index9 = 0; ρσ_Index9 < ρσ_Iter9.length; ρσ_Index9++) {
                journal_entry = ρσ_Iter9[ρσ_Index9];
                if ((typeof journal_entry === "string" || typeof typeof journal_entry === "object" && ρσ_equals(typeof journal_entry, "string"))) {
                    handout = self.findID(journal_entry, "handout");
                    if (handout !== null) {
                        name = self._makeNameUnique(names, handout.name);
                        handout_dir = self._addZipFolder(folder, name);
                        self._addHandoutToZip(handout_dir, handout, finallyCB);
                    } else {
                        character = self.findID(journal_entry, "character");
                        if (character !== null) {
                            name = self._makeNameUnique(names, character.name);
                            char_dir = self._addZipFolder(folder, name);
                            self._addCharacterToZip(char_dir, character, finallyCB);
                        } else {
                            console.log("Can't find handout with ID : ", journal_entry);
                            continue;
                        }
                    }
                } else {
                    name = self._makeNameUnique(names, journal_entry.n);
                    child_dir = self._addZipFolder(folder, name);
                    self._addJournalToZip(child_dir, journal_entry.i, finallyCB);
                }
            }
        };
        if (!Campaign.prototype._addJournalToZip.__argnames__) Object.defineProperties(Campaign.prototype._addJournalToZip, {
            __argnames__ : {value: ["folder", "journal", "finallyCB"]}
        });
        Campaign.prototype._addPlaylistToZip = function _addPlaylistToZip(folder, playlist, finallyCB) {
            var self = this;
            var names, track, name, url, filename, id, _makePostCB, _makePostErrorCB, errorCB, child_dir, audio;
            names = ρσ_list_decorate([]);
            var ρσ_Iter10 = ρσ_Iterable(playlist);
            for (var ρσ_Index10 = 0; ρσ_Index10 < ρσ_Iter10.length; ρσ_Index10++) {
                audio = ρσ_Iter10[ρσ_Index10];
                if ((typeof audio === "string" || typeof typeof audio === "object" && ρσ_equals(typeof audio, "string"))) {
                    track = self.findID(audio, "track");
                    if (track !== null) {
                        name = self._makeNameUnique(names, track.title);
                        if ((name[name.length-4] !== ".mp3" && (typeof name[name.length-4] !== "object" || ρσ_not_equals(name[name.length-4], ".mp3")))) {
                            name += ".mp3";
                        }
                        if ((track.source === "My Audio" || typeof track.source === "object" && ρσ_equals(track.source, "My Audio"))) {
                            url = "https://app.roll20.net/audio_library/play/" + self.campaign.campaign_id + "/" + track.track_id;
                        } else if ((track.source === "Tabletop Audio" || typeof track.source === "object" && ρσ_equals(track.source, "Tabletop Audio"))) {
                            url = "https://s3.amazonaws.com/cdn.roll20.net/ttaudio/" + track.track_id.split("-")[0];
                        } else if ((track.source === "Incompetech" || typeof track.source === "object" && ρσ_equals(track.source, "Incompetech"))) {
                            url = "https://s3.amazonaws.com/cdn.roll20.net/incompetech/" + track.track_id.split("-")[0];
                        } else if ((track.source === "Battlebards" || typeof track.source === "object" && ρσ_equals(track.source, "Battlebards"))) {
                            url = null;
                            filename = track.track_id.split(".mp3-")[0] + ".mp3";
                            filename = encodeURIComponent(filename.replace(/%20%2D%20/g, " - "));
                            id = self.newPendingOperation();
                            _makePostCB = (function() {
                                var ρσ_anonfunc = function (folder, name, finallyCB, id) {
                                    return (function() {
                                        var ρσ_anonfunc = function (url) {
                                            var errorCB;
                                            errorCB = function () {
                                                console.log("Couldn't download Jukebox audio from url : ", url);
                                            };
                                            self.completedOperation(id);
                                            self.downloadResource(url, self._makeAddBlobToZip(folder, name, finallyCB), errorCB);
                                        };
                                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                            __argnames__ : {value: ["url"]}
                                        });
                                        return ρσ_anonfunc;
                                    })();
                                };
                                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                    __argnames__ : {value: ["folder", "name", "finallyCB", "id"]}
                                });
                                return ρσ_anonfunc;
                            })();
                            _makePostErrorCB = (function() {
                                var ρσ_anonfunc = function (track_id, finallyCB, id) {
                                    return function () {
                                        console.log("Couldn't download Jukebox audio from Battlebards : ", track_id);
                                        self.completedOperation(id);
                                        finallyCB();
                                    };
                                };
                                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                    __argnames__ : {value: ["track_id", "finallyCB", "id"]}
                                });
                                return ρσ_anonfunc;
                            })();
                            $.post("/editor/audiourl/bb", (function(){
                                var ρσ_d = {};
                                ρσ_d["trackurl"] = filename;
                                return ρσ_d;
                            }).call(this), _makePostCB(folder, name, finallyCB, id)).fail(_makePostErrorCB(track.track_id, finallyCB, id));
                        } else {
                            url = null;
                            console.log("Can't download Audio track (", track.title, "). Unsupported source : ", track.source);
                        }
                        if (url) {
                            errorCB = function () {
                                console.log("Couldn't download Jukebox audio from url : ", url);
                                finallyCB();
                            };
                            self.downloadResource(url, self._makeAddBlobToZip(folder, name, finallyCB), errorCB);
                        }
                    } else {
                        console.log("Can't find Audio Track with ID : ", track);
                        continue;
                    }
                } else {
                    name = self._makeNameUnique(names, audio.n);
                    child_dir = self._addZipFolder(folder, name);
                    self._addPlaylistToZip(child_dir, audio.i, finallyCB);
                }
            }
        };
        if (!Campaign.prototype._addPlaylistToZip.__argnames__) Object.defineProperties(Campaign.prototype._addPlaylistToZip, {
            __argnames__ : {value: ["folder", "playlist", "finallyCB"]}
        });
        Campaign.prototype._addPageToZip = function _addPageToZip(folder, page, finallyCB) {
            var self = this;
            var graphics, graphic;
            self._addFileToZip(folder, "page.json", toBlob(page));
            if ((ρσ_exists.e(page.thumbnail, "") !== "" && (typeof ρσ_exists.e(page.thumbnail, "") !== "object" || ρσ_not_equals(ρσ_exists.e(page.thumbnail, ""), "")))) {
                self.downloadR20Resource(folder, "thumbnail", page.thumbnail, finallyCB);
            }
            if (page.graphics.length > 0) {
                graphics = self._addZipFolder(folder, "graphics");
                var ρσ_Iter11 = ρσ_Iterable(page.graphics);
                for (var ρσ_Index11 = 0; ρσ_Index11 < ρσ_Iter11.length; ρσ_Index11++) {
                    graphic = ρσ_Iter11[ρσ_Index11];
                    self.downloadR20Resource(graphics, graphic.id, graphic.imgsrc, finallyCB);
                }
            }
        };
        if (!Campaign.prototype._addPageToZip.__argnames__) Object.defineProperties(Campaign.prototype._addPageToZip, {
            __argnames__ : {value: ["folder", "page", "finallyCB"]}
        });
        Campaign.prototype._saveCampaignZipCharacters = function _saveCampaignZipCharacters(checkZipDone) {
            var self = this;
            var characters, names, name, char_dir, character;
            console.log("Saving Characters");
            if (self.campaign.characters.length > 0) {
                characters = self._addZipFolder(self.zip, "characters");
                names = ρσ_list_decorate([]);
                var ρσ_Iter12 = ρσ_Iterable(self.campaign.characters);
                for (var ρσ_Index12 = 0; ρσ_Index12 < ρσ_Iter12.length; ρσ_Index12++) {
                    character = ρσ_Iter12[ρσ_Index12];
                    name = self._makeNameUnique(names, character.name);
                    char_dir = self._addZipFolder(characters, name);
                    self._addCharacterToZip(char_dir, character, checkZipDone);
                }
            }
            self.savingStep = 1;
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipCharacters.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipCharacters, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype._saveCampaignZipJournal = function _saveCampaignZipJournal(checkZipDone) {
            var self = this;
            var journal, all_ids, orphaned, archived, handout, folder;
            console.log("Saving Journal");
            if (self.campaign.journalfolder.length > 0) {
                journal = self._addZipFolder(self.zip, "journal");
                self._addJournalToZip(journal, self.campaign.journalfolder, checkZipDone);
                all_ids = self._flattenJournalEntries(self.campaign.journalfolder);
                orphaned = ρσ_list_decorate([]);
                archived = ρσ_list_decorate([]);
                var ρσ_Iter13 = ρσ_Iterable(self.campaign.handouts);
                for (var ρσ_Index13 = 0; ρσ_Index13 < ρσ_Iter13.length; ρσ_Index13++) {
                    handout = ρσ_Iter13[ρσ_Index13];
                    if (!ρσ_in(handout.id, all_ids)) {
                        orphaned.append(handout.id);
                    } else if (handout.archived) {
                        archived.append(handout.id);
                    }
                }
                if (archived.length > 0) {
                    folder = self._addZipFolder(journal, "Archived Handouts");
                    self._addJournalToZip(folder, archived, checkZipDone);
                }
                if (orphaned.length > 0) {
                    folder = self._addZipFolder(journal, "Orphaned Handouts");
                    self._addJournalToZip(folder, orphaned, checkZipDone);
                }
            }
            self.savingStep = 2;
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipJournal.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipJournal, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype._saveCampaignZipPage = function _saveCampaignZipPage(checkZipDone) {
            var self = this;
            var page, name, page_dir;
            if (self.savingPageIdx >= self.campaign.pages.length) {
                self.savingStep = 4;
            } else {
                page = (ρσ_expr_temp = self.campaign.pages)[ρσ_bound_index(self.savingPageIdx, ρσ_expr_temp)];
                self.savingPageIdx += 1;
                name = (len(page.name) > 0) ? page.name : "Untitled";
                console.log("Saving Page : ", name, "(", self.savingPageIdx, "/", self.campaign.pages.length, ")");
                name = self._makeNameUnique(self.names, name);
                page_dir = self._addZipFolder(self.pages, name);
                self._addPageToZip(page_dir, page, checkZipDone);
            }
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipPage.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipPage, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype._saveCampaignZipPages = function _saveCampaignZipPages(checkZipDone) {
            var self = this;
            console.log("Saving ", self.campaign.pages.length, " Pages");
            if (self.campaign.pages.length > 0) {
                self.pages = self._addZipFolder(self.zip, "pages");
                self.names = ρσ_list_decorate([]);
            }
            self.savingStep = 3;
            self.savingPageIdx = 0;
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipPages.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipPages, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype._saveCampaignZipJukebox = function _saveCampaignZipJukebox(checkZipDone) {
            var self = this;
            var jukebox;
            console.log("Saving Jukebox audio");
            if (self.campaign.jukeboxfolder.length > 0) {
                jukebox = self._addZipFolder(self.zip, "jukebox");
                self._addPlaylistToZip(jukebox, self.campaign.jukeboxfolder, checkZipDone);
            }
            self.savingStep = 5;
            self.savingPageIdx = 0;
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipJukebox.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipJukebox, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype.saveCampaignZip = function saveCampaignZip() {
            var self = this;
            var filename = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? saveCampaignZip.__defaults__.filename : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "filename")){
                filename = ρσ_kwargs_obj.filename;
            }
            var checkZipDone;
            if (self.zip !== null) {
                console.error("Saving already in progress. Can't be cancelled.");
                return;
            }
            filename = (filename) ? filename : self.title + ".zip";
            self.zip = self._createZipFile();
            self._total_size = 0;
            self.savingStep = 0;
            self._addFileToZip(self.zip, "campaign.json", toBlob(self.campaign));
            if (ρσ_exists.n(self.campaign.chat_archive)) {
                self._addFileToZip(self.zip, "chat_archive.json", toBlob(self.campaign.chat_archive));
            }
            checkZipDone = function () {
                if (!self.hasPendingOperation()) {
                    if ((self.savingStep === 0 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 0))) {
                        self._saveCampaignZipCharacters(checkZipDone);
                    } else if ((self.savingStep === 1 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 1))) {
                        self._saveCampaignZipJournal(checkZipDone);
                    } else if ((self.savingStep === 2 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 2))) {
                        self._saveCampaignZipPages(checkZipDone);
                    } else if ((self.savingStep === 3 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 3))) {
                        self._saveCampaignZipPage(checkZipDone);
                    } else if ((self.savingStep === 4 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 4))) {
                        self._saveCampaignZipJukebox(checkZipDone);
                    } else {
                        self._saveZipToFile(self.zip, filename);
                        self.zip = null;
                    }
                    console.log("Download operations in progress : ", self._pending_operations.length);
                }
            };
            checkZipDone();
        };
        if (!Campaign.prototype.saveCampaignZip.__defaults__) Object.defineProperties(Campaign.prototype.saveCampaignZip, {
            __defaults__ : {value: {filename:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["filename"]}
        });
        Campaign.prototype.exportCampaignZip = function exportCampaignZip() {
            var self = this;
            var filename = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? exportCampaignZip.__defaults__.filename : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "filename")){
                filename = ρσ_kwargs_obj.filename;
            }
            self.parseCampaign((function() {
                var ρσ_anonfunc = function (campaign) {
                    self.saveCampaignZip(filename);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["campaign"]}
                });
                return ρσ_anonfunc;
            })());
        };
        if (!Campaign.prototype.exportCampaignZip.__defaults__) Object.defineProperties(Campaign.prototype.exportCampaignZip, {
            __defaults__ : {value: {filename:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["filename"]}
        });
        Campaign.prototype.__repr__ = function __repr__ () {
                        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Campaign.prototype.__str__ = function __str__ () {
            return this.__repr__();
        };
        Object.defineProperty(Campaign.prototype, "__bases__", {value: []});

        console.log("Roll20 Campaign exporter loaded.");
        console.log("To export your Roll20 campaign, enter R20Exporter.exportCampaignZip() and be patient.");
        console.log("Note that you should not open a different campaign in Roll20 as it can interfere with the download of some resources.");
        console.log("DISCLAIMER: Please note that using this tool to export a module from the marketplace may infringe on the Marketplace Asset License and/or Roll20 EULA.");
        window.R20Exporter = new Campaign(window.$("head title").text().trim().replace(" | Roll20", ""));
    })();
})();