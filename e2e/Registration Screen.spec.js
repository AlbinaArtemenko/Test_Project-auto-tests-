describe('Example', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
});

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