import { expect } from '@wdio/globals'

describe('Checkout iOS', () => {

    it('deve validar que o app abre para iniciar o fluxo de checkout', async () => {

        await driver.pause(20000)

        const accountTab = await $('id:tab-Account')

        await expect(accountTab).toBeDisplayed()

    })

})