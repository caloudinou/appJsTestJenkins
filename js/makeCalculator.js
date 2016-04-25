/**
 * Created by grizzly on 01/03/2016.
 */


var makeCalculator = {
    symbol:'??',
    /**
     * Create node calculator's template in DOM
     * @param target
     */
    constructNode : function(target){
        target        = target && target != 'nil' ? target : '.calculator';
        this.target   = document.querySelectorAll(target);
        for (var id=0;id<this.target.length; id++){

            console.warn(this.target[id]);

            /**
             * input of the first number value
             * @type {Element}
             */
            this.inputA   = document.createElement('input');
            this.inputA.className = 'inputA';
            this.inputA.setAttribute('type','number');
            this.inputA.setAttribute('pattern','[0-9]');
            this.inputA.setAttribute('placeholder','First number');
            this.target[id].appendChild(this.inputA);

            console.warn('create inputA : ');
            console.warn(document.getElementsByClassName('inputA'));

            /**
             * create node select
             * @type {Element}
             */
            this.select   = document.createElement('select');
            this.select.className = 'symbol';
            this.target[id].appendChild(this.select);

            console.warn('create select : ');
            console.warn(document.getElementsByClassName('symbol'));

            /**
             * create option add in node select
             * @type {Element}
             */
            this.optionChoice= document.createElement('option');
            this.optionChoice.className = 'optionChoice';
            this.optionChoice.appendChild(document.createTextNode('??'));
            this.select.appendChild(this.optionChoice);

            console.warn('create option Choice : ');
            console.warn(document.getElementsByClassName('optionChoice'));

            /**
             * create option add in node select
             * @type {Element}
             */
            this.optionAdd= document.createElement('option');
            this.optionAdd.className = 'optionAdd';
            this.optionAdd.appendChild(document.createTextNode('+'));
            this.select.appendChild(this.optionAdd);

            console.warn('create option Add : ');
            console.warn(document.getElementsByClassName('optionAdd'));

            /**
             * create option multiply in node select
             * @type {Element}
             */
            this.optionMultiply= document.createElement('option');
            this.optionMultiply.className = 'optionMultiply';
            this.optionMultiply.appendChild(document.createTextNode('*'));
            this.select.appendChild(this.optionMultiply);

            console.warn('create option multiply : ');
            console.warn(document.getElementsByClassName('optionMultiply'));

            /**
             * create option substract in node select
             * @type {Element}
             */
            this.optionSubstract= document.createElement('option');
            this.optionSubstract.className = 'optionSubstract';
            this.optionSubstract.appendChild(document.createTextNode('-'));
            this.select.appendChild(this.optionSubstract);

            console.warn('create option substract : ');
            console.warn(document.getElementsByClassName('optionSubstract'));

            /**
             * create option divide in node select
             * @type {Element}
             */
            this.optionDivide= document.createElement('option');
            this.optionDivide.className = 'optionDivide';
            this.optionDivide.appendChild(document.createTextNode('/'));
            this.select.appendChild(this.optionDivide);


            console.warn('create option divide : ');
            console.warn(document.getElementsByClassName('optionDivide'));


            /**
             * input of the second number value
             * @type {Element}
             */
            this.inputB   = document.createElement('input');
            this.inputB.className = 'inputB';
            this.inputB.setAttribute('type','number');
            this.inputA.setAttribute('pattern','[0-9]');
            this.inputB.setAttribute('placeholder','Second number');
            this.target[id].appendChild(this.inputB);

            console.warn('create input B : ');
            console.warn(document.getElementsByClassName('inputB'));

            this.sum      = document.createElement('button');
            this.sum.className = 'sum';
            this.sum.appendChild(document.createTextNode('='));
            this.target[id].appendChild(this.sum);

            console.warn('create button sum : ');
            console.warn(document.getElementsByClassName('sum'));

            /**
             * input of result value
             * @type {Element}
             */
            this.inputSum = document.createElement('input');
            this.inputSum.className = 'inputSum';
            this.inputSum.setAttribute('placeholder','result');
            this.inputSum.setAttribute('disabled','disabled');
            this.target[id].appendChild(this.inputSum);


            console.warn('create input result : ');
            console.warn(document.getElementsByClassName('sum'));

            console.warn('makeCalculator :: construct |-> success full');
        }
    },

    /**
     * initialisation
     */
    init : function(){
        var targetName     = arguments.length > 0 ? arguments[0] : 'nil';

        this.constructNode(targetName);
        this.setListener();

        console.warn('makeCalculator :: init |-> finish');
    },

    setListener:function(){
        var self=this;
        this.sum.onclick=function(){
            console.warn('sum');
            var calculator = new Calculator(self.inputA.value, self.inputB.value);
            console.warn('controle du symbole send à Calculator');
            console.warn(self.symbol);
            self.inputSum.value = calculator.calculator(self.symbol);
        };

        this.inputA.onkeydown=function(event){
            if(!(/^Digit/.test(event.code))){
                console.warn("touche qui n'est pas un Digit");
                console.warn(event);
            }
            if(/^Key/.test(event.code)){
                console.warn("touche qui est une Key");
                console.warn(event);
            }
        };
        this.inputB.onkeydown=function(event){
            if(!(/^Digit/.test(event.code))){
                console.warn(event);
            }
            if(/^Key/.test(event.code)){
                console.warn(event);
            }
        };
        this.select.onchange=function(event){
            console.warn(event.target.value);
            self.symbol=event.target.value;
        };
    }

};