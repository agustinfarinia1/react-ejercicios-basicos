import { render, screen } from "@testing-library/react"
import { UserContext } from "../../09-useContext/context/UserContext";
import { HomePage } from "../../09-useContext/pages/HomePage";

describe('Test de componente <HomePage/>',() => {

    test('Prueba 01-Debe retornar los valores por defecto',() => {
        render(
        <UserContext.Provider value={{user:null}}>
        <HomePage/>
        </UserContext.Provider>);
        expect(screen.getByText('HomePage')).toBeTruthy();
    });
})