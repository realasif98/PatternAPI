class ErrorModel {
    msg: string;
    phone: string;
    constructor(msg: string, phone: string){
           this.msg = msg;
           this.phone = phone;
    }
}

// ErrorModel.prototype.toString = function dogToString() {
//     return 'Messge: ' + this.msg +  'Element: ' + this.element;
// };

export {ErrorModel};