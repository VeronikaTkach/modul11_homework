import {repeatWord}  from '../src/index';

// Успешное выполнение функции

test ('Output a string with a given number for its repetition, which are passed in the arguments repeatWord(word, number)', () => {
	
	expect(repeatWord('слово', 2)).toBe( 'слово1, слово2, ');
  
}); 

//Неуспешное выполнение функции. Получен результат "слово 1, слово 2, " с пробелом после последнего слова. Ожидали без пробела: toBe( "слово1, слово2,").

xtest ('Output a string with a given number for its repetition, which are passed in the arguments repeatWord(word, number)', () => {
	
	expect(repeatWord('слово', 2)).toBe( 'слово1, слово2,');
  
}); 

//unit-тесты

describe('Output a string with a given number for its repetition, which are passed in the arguments repeatWord(word, number)', () => {
	
	it('The function should return the received word and the number of times to repeat it', () => {
	  expect(repeatWord('слово', 1)).toBe('слово1, ');
	  expect(repeatWord('слово', 2)).toBe('слово1, слово2, ');
	  expect(repeatWord('слово', 3)).toBe('слово1, слово2, слово3, ');
	});
  }); 