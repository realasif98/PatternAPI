
class ErrorModel {
    ErrorMessage: string;
    Property: string;
    constructor(ErrorMessage: string, Property: string){
           this.ErrorMessage = ErrorMessage;
           this.Property = Property;
    }
}

const Prop = {
    PHONE : 'phone',
    TYPE : 'type',
    SEPARATOR: 'separator',
    INDEX: 'index'
};

export {ErrorModel, Prop};