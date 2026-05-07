import { expect } from '@wdio/globals'

describe('Product iOS', () => {

    it('deve validar abertura do app', async () => {

        await driver.pause(20000)

        const accountTab = await $('id:tab-Account')

        await expect(accountTab).toBeDisplayed()

    })

})