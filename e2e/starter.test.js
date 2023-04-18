const {device, element, by, expect} = require('detox');

describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
  it('check new skill', async () => {
    const inputNewSkill = await element(by.id('input-new'));
    const buttonAdd = await element(by.id('add'));
    const listSkills = element(by.id('skills-list'));

    await inputNewSkill.tap();
    await inputNewSkill.typeText('react native');
    await buttonAdd.tap();
    await listSkills.tap();

    expect(element(by.id('skills-list'))).toBeVisible();
  });
});
