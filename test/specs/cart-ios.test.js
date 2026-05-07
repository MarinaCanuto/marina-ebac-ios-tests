import { expect } from '@wdio/globals'

describe('Cart iOS', () => {

    it('deve acessar a tela Account', async () => {

        await driver.pause(20000)

        const accountTab = await $('id:tab-Account')

        await accountTab.click()

        await driver.pause(5000)

        const emailField = await $('id:email')

        await expect(emailField).toBeDisplayed()

    })

})