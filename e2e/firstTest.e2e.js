describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  

  it('should show world screen after tap', async () => {
    // await element(by.id('inputService˝RegistrationView')).tap();
    await expect(element(by.id('testDetox'))).toBeVisible();
  });
});
