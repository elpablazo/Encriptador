var app = new Vue({
    el: '#app',
    data: {
      password: '',
      passwordF: ['Mensaje encriptado'],
      website: '',
      alphabet: ['A', 'B', 'C', 'D', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ',', '?', '!', '\'', '_', '-', '&', '@', '#', '$', '%', '*', '(', ')', ' ']
    },
    methods: {
        convToArray: function(string) {
            return string.toUpperCase();
         }
    },
    computed: {
        encrypt: function(){
            
            this.password = this.convToArray(this.password);
            this.website = this.convToArray(this.website);

            let alpLen = Object.keys(this.alphabet).length;
            let m_i = 0;
            let k_i = 0;
            let enc_i = 0;
            let k = 1;

            while (this.website.lenght < this.password.lenght){
                this.website = this.website.repeat(k);
                k ++;
            }

            console.log('Alphabet lenght = ' + alpLen);

            for (let i = 0; i < this.password.length; i++) {
                console.log('i = ' + i);
                
                for (let j = 0; j < alpLen; j++){
                    
                    if (this.password[i] == this.alphabet[j]){
                        m_i = j;
                    }

                    if (this.website[i] == this.alphabet[j]){
                        k_i = j;
                    }

                    enc_i = m_i + k_i;
                    

                    if (enc_i > alpLen){
                        enc_i = enc_i - alpLen;
                    }
                }
                this.passwordF[i] = this.alphabet[enc_i];
            }
            
            return this.passwordF.slice(0, this.password.length).join('');
        }
    }
  })
