/**
 * Created by grizzly on 01/03/2016.
 */

/**
 * Manage to operate
 * @param x
 * @param y
 * @constructor
 */
var Calculator = function ( x, y) {

    var x;
    var y;

    /**
     * Set value x and y
     * @type int || float
     * @return Object
     */
    this.set = function (x, y) {
        x = parseFloat(x);
        y = parseFloat(y);
        return this;
    };


    /**
     * function to add value x and y
     * @return number
     */
    this.add = function () {
        return this.sum();
    };

    /**
     * function to substract value x and y
     * @return number
     */
    this.substract = function (){
        return x - y;
    };

    /**
     * function to multiply value x and y
     * @return number
     */
    this.multiply = function(){
        return x * y;
    };

    /**
     * function to divide  value x and y
     * @return number
     */
    this.divide = function(){
        return x / y;
    };

    /**
     * function to sum value x and y
     * @return number
     */
    this.sum = function () {
        return parseFloat(x) + parseFloat(y);
    };

    /**
     * manager to calculator value x and y
     * @return this.{ function }
     */
    this.calculator = function( symbol ){
        switch(symbol){
            case '??' :
                return this.sum();
                break;
            case '+' :
                return this.add();
                break;
            case '-':
                return this.substract();
                break;
            case '*' :
                return this.multiply();
                break;
            case '/' :
                return this.divide();
                break;
            default :
                console.warn('Error : Symbol Operation');
                return undifined;
                break;

        }
    };

    this.set(x,y);
};