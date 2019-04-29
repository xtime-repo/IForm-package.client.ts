import { IFormData, IForm } from "Form";






export const AppForms = {
    forms: {} as IFormData,
    Initialize: (frm: IForm) => {
        AppForms.forms[frm.Form.id] = frm;
    }
};



export var Invoke = {
    Action(FNC: () => void) {
        FNC();
    },
    Form(event: Event) {
        event.preventDefault();
        var p = event.currentTarget as HTMLElement;
        var rf = AppForms.forms[p.id];
        if (rf) {
            rf.Form.ownDoc = (event.currentTarget as HTMLElement).ownerDocument as Document;
            rf.submit();
        }
        else {
            var txt = p.id.toUpperCase();
            var le = p.querySelector("legend");

            if (le && le.textContent) txt = le.textContent;

            throw "no initializer found for " + txt;

        }
    }
}

