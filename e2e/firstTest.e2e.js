const { it } = require("jest-circus");

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // it('should show world screen after tap', async () => {
  //   // await element(by.id('inputService˝RegistrationView')).tap();
  //   await expect(element(by.id('testDetox'))).toBeVisible();
  // });

  it('view save',  async()=> {
    await expect(element(by.id('buttonRegistrateRegistrationView'))).toBeVisible();
    });

  it('RegistrationView', async()=> {
    await element(by.id('inputService˝RegistrationView')).typeText("albina");
    await element(by.id('inputPassworRegistrationView')).typeText("1234567");
    await element(by.id('inputPinRegistrationView')).typeText("1111111");
    await element(by.id('inputLoginRegistrationView')).typeText("380678282323");
    await element(by.id('inputImailRegistrationView')).typeText("albina@gmail.com");
    await element(by.id('buttonRegistrateRegistrationView')).tap();
  });

  it('view buttonAddTodoTodosView',  async()=> {
    await expect(element(by.id('buttonAddTodoTodosView'))).toBeVisible();
  });

    it('AddSnippetView', async()=> {
      await element(by.id('buttonAddTodoTodosView')).tap();
      await element(by.id('inputTitleAddTodoView')).typeText('11111');
      await element(by.id('inputBodyAddTodoView')).typeText('380678282323');
      await element(by.id('buttonSaveAddTodoView')).tap();
    });

    it('AddSnippetView 1', async()=> {
      await element(by.id('buttonAddTodoTodosView')).tap();
      await element(by.id('inputTitleAddTodoView')).typeText('hjzbvjldnbxkfckl;b');
      await element(by.id('inputBodyAddTodoView')).typeText('hfvbjlhvbljavnklnkjvsdbvjlhshbvjlshdhdfsbvjlhbfdjl326347567956975');
      await element(by.id('buttonSaveAddTodoView')).tap();
});

it('AddSnippetView 2', async()=> {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id('inputTitleAddTodoView')).typeText('');
  await element(by.id('inputBodyAddTodoView')).typeText('');
  await element(by.id('buttonSaveAddTodoView')).tap();
});

it('AddSnippetView 3', async()=> {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id('inputTitleAddTodoView')).replaceText('привет!');
  await element(by.id('inputBodyAddTodoView')).replaceText('написать отчет!');
  await element(by.id('buttonSaveAddTodoView')).tap();
});

//it('SnippetList' , async()=> {
  //await element(by.id('inputTitleAddTodoView')).typeText('hjzbvjldnbxkfckl;b');
  //await element(by.id('snippetListTodosView')).tap();
  //await element(by.id('buttonAddTodoTodosView')).tap();
//});
});
