/**
 * Created by grizzly on 01/03/2016.
 */
 
/**
 * Manage to operate
 * @param x
 * @param y
 * @constructor
 */
Calculator = function (x, y) {

    this.x=0;
    this.y=0;

    /**
     * Set value x and y
     * @type int || float
     * @return Object
     */
    this.set = function (x, y) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
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
        return this.x - this.y;
    };

    /**
     * function to multiply value x and y
     * @return number
     */
    this.multiply = function(){
        return this.x * this.y;
    };

    /**
     * function to divide  value x and y
     * @return number
     */
    this.divide = function(){
        return this.x / this.y;
    };

    /**
     * function to sum value x and y
     * @return number
     */
    this.sum = function () {
        return parseFloat(this.x) + parseFloat(this.y);
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
    this.set(x, y);
    
    return this;
};