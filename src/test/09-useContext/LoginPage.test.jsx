import { fireEvent, getByLabelText, render, screen } from "@testing-library/react"
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/pages/LoginPage";

describe('Test de componente <HomePage/>',() => {

    test('Prueba 01-Debe retornar los valores por defecto',() => {
        render(
        <UserContext.Provider value={{user:null}}>
        <LoginPage/>
        </UserContext.Provider>);
        const preTag = screen.getByLabelText('pre').innerHTML;
        expect(preTag).toBe('null');
    });

    test('Prueba 02-Debe retornar los valores con usuario',() => {

        const user = {id:1,name:'agus',email:'agus@gmail.com'}

        render(
        <UserContext.Provider value={{user}}>
        <LoginPage/>
        </UserContext.Provider>);
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
    });

    test('Prueba 03-Debe crear el usuario en contexto',() => {

        const setUserMock = jest.fn();

        render(
        <UserContext.Provider value={{user:null,setUser:setUserMock}}>
        <LoginPage/>
        </UserContext.Provider>);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(setUserMock).toHaveBeenCalledWith({id:1,name:'agus',email:'agus@gmail.com'});
    });
})