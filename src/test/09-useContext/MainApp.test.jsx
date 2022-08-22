import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../09-useContext/MainApp";

describe('Test de componente <MainApp/>',() => {

    test('Prueba 01-Debe retornar los valores por defecto',() => {
        render(
        <MemoryRouter>
        <MainApp/>
        </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('Prueba 02-Debe mostrar <LoginPage/>',() => {
        render(
        <MemoryRouter initialEntries={['/login']}>
        <MainApp/>
        </MemoryRouter>
        );
        expect(screen.getByText('Loguear')).toBeTruthy();
    });
})