/**
 * Created by grizzly on 02/03/2016.
 */

var chai		= require('chai');
var expect 		= chai.expect;
var sinon 		= require('sinon');
var Promise		= require('promise');
require('../../js/Calculator');

describe('Calculatrice', function(){
   beforeEach(function(){
        calculator = new Calculator(5, 2);
   });
   it('should create a new object Calculator', function(){
        expect(calculator.x).be.equal(5, "error : la value de x n'a pas peux etre set");
        expect(calculator.y).be.equal(2, "error : la value de y n'a pas peux etre set");                             
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
            
            expect(calculator.calculator('??')).be.equal(5+2, "error : la valeur de l'operation ne correspond pas à l'opération par defaut");        
            
            
            expect(calculator.set(x,y).calculator('??')).be.equal(x+y, "error : la valeur de l'operation ne correspond pas à l'opération par defaut");
        });
        it("should add", function(){
            
            expect(calculator.calculator('+')).be.equal(5+2, "error : la valeur de l'operation ne correspond pas a une addition");
            
            expect(calculator.set(x,y).calculator('+')).be.equal(x+y, "error : la valeur de l'operation ne correspond pas a une addition");
        });
        it("should substract", function(){        
            expect(calculator.calculator('-')).be.equal(5-2, "error : la valeur de l'operation ne correspond pas a une soustraction");
            
            expect(calculator.set(x,y).calculator('-')).be.equal(x-y, "error : la valeur de l'operation ne correspond pas a une soustraction");
        });
        it("should division", function(){        
            expect(calculator.calculator('/')).be.equal(5/2, "error : la valeur de l'operation ne correspond pas a une division");
            
            expect(calculator.set(x,y).calculator('/')).be.equal(x/y, "error : la valeur de l'operation ne correspond pas a une division");
        });
        it("should multiply", function(){        
            expect(calculator.calculator('*')).be.equal(5*2, "error : la valeur de l'operation ne correspond pas a une multiplication");
            
            expect(calculator.set(x,y).calculator('*')).be.equal(x*y, "error : la valeur de l'operation ne correspond pas a une multiplication");
        });
    });
    
});
