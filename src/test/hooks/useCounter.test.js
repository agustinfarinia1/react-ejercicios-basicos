import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../hooks";

describe('Test del hook useCounter()',() => {
    test('Prueba 01-Debe retornar los valores por defecto',() => {
        const {result} = renderHook(() => useCounter());
        const {counter,increment,decrement,reset} = result.current;
        expect(counter).toBeGreaterThan(0);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Prueba 02-Debe retornar con el valor de 100',() => {
        const valor = 100;
        const {result} = renderHook(() => useCounter(valor));
        const {counter} = result.current;
        expect(counter).toBe(valor);
    });

    test('Prueba 03-Debe incrementar el contador',() => {
        const valor = 100;
        const {result} = renderHook(() => useCounter(valor));
        const {counter,increment} = result.current;
        act(() => {
            increment();
            increment(2);
        })
        expect(result.current.counter).toBe(valor + 3);
    });

    test('Prueba 04-Debe disminuir el contador',() => {
        const valor = 100;
        const {result} = renderHook(() => useCounter(valor));
        const {counter,decrement} = result.current;
        act(() => {
            decrement();
            decrement(2);
        })
        expect(result.current.counter).toBe(valor - 3);
    });

    test('Prueba 05-Debe resetear el valor',() => {
        const valor = 100;
        const {result} = renderHook(() => useCounter(valor));
        const {counter,decrement,reset} = result.current;
        act(() => {
            decrement();
            reset();
        })
        expect(result.current.counter).toBe(counter);
    });
})