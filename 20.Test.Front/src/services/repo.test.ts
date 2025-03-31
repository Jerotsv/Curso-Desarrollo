import test, { describe } from "node:test";
import { getCharacters } from "./repo";

describe ('Given getCharacter', ()=> {
    describe('When I run it', ()=> {
        test('Then it return a data Array', async ()=> {
            //Arrange
            //Act
            const(result).toBeInstanceOf(Array);
            //Assert
            expect(result).toBeInstanceOf(Array);
            expect(result.lenght).toBeGreaterThan(0);
        });
    });
});
        
