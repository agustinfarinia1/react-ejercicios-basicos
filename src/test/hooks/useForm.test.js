import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../hooks";

describe('Test del hook useForm()',() => {

    const initialForm = {name:'prueba',email:'prueba@gmail.com'};

    test('Prueba 01-Debe retornar los valores por defecto',() => {
        const {result} = renderHook(() => useForm(initialForm));
        const {formValue} = result.current;
        expect(formValue).toEqual(initialForm);
    });

    test('Prueba 02-Debe retornar el valor modificado',() => {
        const nameModify = 'modificacion';
        const {result} = renderHook(() => useForm(initialForm));
        const {handleChangeForm} = result.current;
        act(() => {
            handleChangeForm({target:{name:'name',value:nameModify}});
        })
        expect(result.current.name).toEqual(nameModify);
        expect(result.current.formValue.name).toEqual(nameModify);
    });


    test('Prueba 03-Debe realizar el reset',() => {
        const nameModify = 'modificacion';
        const {result} = renderHook(() => useForm(initialForm));
        const {handleChangeForm,clearForm} = result.current;
        act(() => {
            handleChangeForm({target:{name:'name',value:nameModify}});
            clearForm();
        })
        expect(result.current.formValue).toEqual(initialForm);
    });
})