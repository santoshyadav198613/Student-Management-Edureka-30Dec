import { FormControl } from "@angular/forms";

export class CustomValidation {
    static cardValidator(control: FormControl) {
        if (control.value !== undefined || control.value !== null) {
            if (control.value.toString().length <= 16 || control.value.toString().length >= 19) {
                return { cardValid: false };
            }
            return null;
        }
    }
}