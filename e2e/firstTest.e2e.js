describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // it('should show world screen after tap', async () => {
  //   // await element(by.id('inputService˝RegistrationView')).tap();
  //   await expect(element(by.id('testDetox'))).toBeVisible();
  // });

  it('RegistrationView', async () => {
    await element(by.id('inputService˝RegistrationView')).typeText("albina");
    await element(by.id('inputPassworRegistrationView')).typeText("1234567");
    await element(by.id('inputPinRegistrationView')).typeText("1111111");
    await element(by.id('inputLoginRegistrationView')).typeText("380678282323");
    await element(by.id('inputImailRegistrationView')).typeText("albina@gmail.com");
    await element(by.id('buttonRegistrateRegistrationView')).tap();
    await expect(element(by.id('buttonAddTodoTodosView'))).toBeVisible();
  });

  it('AddSnippetView', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).typeText('11111');
    await element(by.id('inputBodyAddTodoView')).typeText('380678282323');
    await element(by.id('buttonSaveAddTodoView')).tap();
    await expect(element(by.id(`button${'11111'}ItemTodoView`))).toBeVisible();
  });

  it('AddSnippetView 1', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).typeText('hjzbvjldnbxkfckl;b');
    await element(by.id('inputBodyAddTodoView')).typeText('hfvbjlhvbljavnklnkjvsdbvjlhshbvjlshdhdfsbvjlhbfdjl326347567956975');
    await element(by.id('buttonSaveAddTodoView')).tap();
    await expect(element(by.id(`button${'hjzbvjldnbxkfckl;b'}ItemTodoView`))).toExist();
  });

  it('AddSnippetView 3', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).replaceText('привет!');
    await element(by.id('inputBodyAddTodoView')).replaceText('написать отчет!');
    await element(by.id('buttonSaveAddTodoView')).tap();
  });

  it('AddSnippetView 4', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).typeText('test1');
    await element(by.id('inputBodyAddTodoView')).typeText('qqq');
    await element(by.id('buttonSaveAddTodoView')).tap();
  });

  it('AddSnippetView 5', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).typeText('test2');
    await element(by.id('inputBodyAddTodoView')).typeText('qqq');
    await element(by.id('buttonSaveAddTodoView')).tap();
  });

  it('AddSnippetView 6', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).typeText('test3');
    await element(by.id('inputBodyAddTodoView')).typeText('qqq');
    await element(by.id('buttonSaveAddTodoView')).tap();
  });

  it('AddSnippetView 7', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).typeText('test4');
    await element(by.id('inputBodyAddTodoView')).typeText('qqq');
    await element(by.id('buttonSaveAddTodoView')).tap();
  });

  it('AddSnippetView 8', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).typeText('test5');
    await element(by.id('inputBodyAddTodoView')).typeText('qqq');
    await element(by.id('buttonSaveAddTodoView')).tap();
  });

  it('SnnipetList', async () => {
    await element(by.id('snippetListTodosView')).scroll(200, 'down');
  });


  it('SnippetList', async () => {
    await expect(element(by.id(`button${'привет!'}ItemTodoView`))).toBeVisible();
  });

  //  it('snippetList 2 ', async () => {
  //   await element(by.id('buttonAddTodoTodosView')).tap();
  //   await element(by.id('inputBodyAddTodoView')).typeText('qqq');
  //   await element(by.id('inputBodyAddTodoView')).clearText('qqq');
  //   await expect(element(by.id(`button${'qqq'}ItemTodoView`))).toNotExist();
  // });

  it('snippetList 3', async () => {
    await element(by.id('buttonAddTodoTodosView')).tap();
    await element(by.id('inputTitleAddTodoView')).typeText('test5');
    await element(by.id('inputBodyAddTodoView')).typeText('qqq');
    await device.pressBack();
  });
});
