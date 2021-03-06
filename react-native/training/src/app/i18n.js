import { buildTranslations, buildConstants } from '../utils/i18nUtils';
import * as Routes from '../constants/routes';

// TODO: Replace here the screens titles

const namespace = 'app';
const translations = {
  es: {
    [Routes.Login]: 'Login',
    [Routes.TodoList]: 'Todo List',
    [Routes.Book]: 'Book',
    [Routes.Home]: 'Home',
    footerMessage: 'Remove completed items',
    todolistTextInput: 'Enter an item!',
    author: 'Author:',
    genere: 'Genere:',
    publisher: 'Publisher:',
    year: 'Year:'
  }
};

export const strings = buildConstants(translations, namespace, 'es');
export default buildTranslations(translations, namespace);
