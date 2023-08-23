const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {

    it('set the address', async () => {
        // Setting the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })

    it('should select supportive plan', async () => { 
         // Selecting Supportive plan
         await browser.url(`/`)
         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
         await page.selectSupportiveClass();
    })

    it('should Input the phone number', async () => {
        // Input phone number
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportiveClass();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
    
    it('should add a card', async () => {
         // Adding a card
         await browser.url(`/`)
         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
         await page.selectSupportiveClass();
         const phoneNumber = helper.getPhoneNumber("+1");
         await page.submitPhoneNumber(phoneNumber);
         await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
         await page.addPaymentMethodCard();

         const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
         await cardPaymentMethodIcon.waitForDisplayed();
         await expect(await $(cardPaymentMethodIcon)).toBeExisting();
    })
    
    it('should wirte a messgae to the driver', async () => {
         // Writing a message for the driver
         await browser.url(`/`)
         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
         await page.selectSupportiveClass();
         const phoneNumber = helper.getPhoneNumber("+1");
         await page.submitPhoneNumber(phoneNumber);
         await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
         await page.addPaymentMethodCard();
         await page.messageToDriver();
         const messageToDriverField = await $(page.messageToDriverField);
         await messageToDriverField.setValue('Hi');
         const message = await messageToDriverField.getValue();
         await expect(message).toBe('Hi')
    })     

    it('should order a blanket and handkerchief', async () => {
         // Ordering a blanket and handkerchiefs
         await browser.url(`/`)
         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
         await page.selectSupportiveClass();
         const phoneNumber = helper.getPhoneNumber("+1");
         await page.submitPhoneNumber(phoneNumber);
         await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
         await page.addPaymentMethodCard();
         await page.messageToDriver();
         await page.addBlanketandHandkerchief();
    })     

    it('should order 2 ice creams', async () => {
         // Ordering 2 Ice creams
         await browser.url(`/`)
         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
         await page.selectSupportiveClass();
         const phoneNumber = helper.getPhoneNumber("+1");
         await page.submitPhoneNumber(phoneNumber);
         await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
         await page.addPaymentMethodCard();
         await page.messageToDriver();
         await page.addBlanketandHandkerchief();
         await page.orderIceCream();
    })

    it('should bring up the car search modal', async () => {
         // Car search modal appears
         await browser.url(`/`)
         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
         await page.selectSupportiveClass();
         const phoneNumber = helper.getPhoneNumber("+1");
         await page.submitPhoneNumber(phoneNumber);
         await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
         await page.addPaymentMethodCard();
         await page.messageToDriver();
         await page.addBlanketandHandkerchief();
         await page.orderIceCream();
         await page.orderACar();

         const orderModal = await $(page.orderModal);
         await orderModal.waitForDisplayed();
         await expect(await $(orderModal)).toBeExisting();
    })
})
