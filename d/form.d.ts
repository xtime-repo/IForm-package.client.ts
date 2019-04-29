declare module "Form" {


    export interface IFormData {
        [name: string]: IForm;
    }


    export interface IForm {
        Form: { id: string, ownDoc: Document, inputs: string[] };
        Formitem: any;
        submit(): void;
    }



}


