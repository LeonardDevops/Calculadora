 function criaCalculadora () {
    
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        clearDisplay() {
           this.display.value = ''
        },

        removeCaracter() {
        this.display.value = this.display.value.slice(0, -1);
            
        },

     inicia(){
        this.pressionaEnter();
        this.cliqueBotoes();
     },

     pressionaEnter() {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13){
                this.realizaConta();
            }
        })
     },
     realizaConta(){
        let conta = this.display.value;
        try{
         conta = eval(conta);

         if(!conta) {
            alert('conta inválida');
            return;
         }
         this.display.value = String(conta);

        } catch (e) {
            alert('conta invalida');
            return
        }
     },

     cliqueBotoes(){
      document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('btn-num')){
        
            this.btnParaDisplay(el.innerText); 
        }

        if(el.classList.contains('btn-clear')) {
            this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
            this.removeCaracter();
        }

        if(el.classList.contains('btn-eql')){
            this.realizaConta();
        }

      }.bind(this))  
     },
     btnParaDisplay(valor){
        this.display.value += valor ;
     }
    };
 }
 const calculadora = criaCalculadora();
 calculadora.inicia();
