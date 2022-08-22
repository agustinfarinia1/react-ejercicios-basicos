import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples";
import { useCounter, useFetch } from "../../hooks";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Test del componente <MultipleCustomHooks/>',() => {

    /*test('Prueba 01-Debe retornar los valores por defecto',() => {
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByRole('heading',{id:"titulo-principal"}).innerHTML);
    });

    test('Prueba 02-Debe mostrar un Quote',() => {
        const dataTest = {author:'prueba',quote:'prueba123'};
        useFetch.mockReturnValue({
            data:[{author:dataTest.author,quote:dataTest.quote}],
            isLoading:false,
            hasError:null
        });

        useFetch.mockReturnValue({
            data:[{author:dataTest.author,quote:dataTest.quote}],
            isLoading:false,
            hasError:null
        });

        render(<MultipleCustomHooks/>);
        expect(screen.getByText(dataTest.author)).toBeTruthy();
        expect(screen.getByText(dataTest.quote)).toBeTruthy();
    });*/

    test('Prueba 02-Debe mostrar un Quote',() => {
        const mockIncrement = jest.fn();
        const dataTest = {author:'prueba',quote:'prueba123'};
        useFetch.mockReturnValue({
            data:[{author:dataTest.author,quote:dataTest.quote}],
            isLoading:false,
            hasError:null
        });
        useCounter.mockReturnValue({
            counter : 1,
            increment: mockIncrement
        });
        render(<MultipleCustomHooks/>);
        const boton = screen.getByRole('button',{name:'Next Quote'});
        fireEvent.click(boton);
        expect(mockIncrement).toHaveBeenCalled();
    });
})