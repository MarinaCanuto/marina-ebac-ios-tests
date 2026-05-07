import { expect } from '@wdio/globals'

describe('Search iOS', () => {

    it('deve validar a tela inicial do app', async () => {

        await driver.pause(20000)

        const accountTab = await $('id:tab-Account')

        await expect(accountTab).toBeDisplayed()

    })

})