/**
 * Created by grizzly on 02/03/2016.
 */

var chai		= require('chai');
var expect 		= chai.expect;
var sinon 		= require('sinon');
var Promise		= require('promise');
var globalCalculatrice = require('../js/Calculator');

describe('Calculatrice', function(){
    
   it('should create a new object Calculator', function(){
        var calculator = globalCalculatrice.calculator(5, 5);
        
        expect(calculator.x).be.equal(5, "error : la value de x n'a pas peux etre set");
        expect(calculator.y).be.equal(5, "error : la value de y n'a pas peux etre set");                             
    });
    var x = 10;
    var y = 15;
    
    it('should set values x and y', function(){
        calculator.set(x,y); 
        
        expect(calculator.x).be.equal(x, "error : la value de x n'a pas peux etre set");
        expect(calculator.y).be.equal(y, "error : la value de x n'a pas peux etre set");
    });
    
    describe('#calcul', function(){
        it("should default operator", function(){
            expect(calculator.calculator('=')).be.equal(x+y, "error : la valeur de l'operation ne correspond pas à l'opération par defaut");
        });
        it("should add", function(){
            expect(calculator.calculator('+')).be.equal(x+y, "error : la valeur de l'operation ne correspond pas a une addition");
        });
        it("should substract", function(){
            expect(calculator.calculator('-')).be.equal(x-y, "error : la valeur de l'operation ne correspond pas a une soustraction");
        });
        it("should division", function(){
            expect(calculator.calculator('/')).be.equal(x/y, "error : la valeur de l'operation ne correspond pas a une division");
        });
        it("should multiply", function(){
            expect(calculator.calculator('*')).be.equal(x*y, "error : la valeur de l'operation ne correspond pas a une multiplication");
        });
    });
    
});